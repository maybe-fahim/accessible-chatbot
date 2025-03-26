import React, { useRef, useState, useEffect } from "react";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";
import Notification from "./Notification";
import ResponseDictionary from "../data/ResponseDictionary";
import nlp from "compromise";
import TypingIndicator from "./TypingIndicator";
import { BsExclamationLg } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";
import AudioManager from "../context/AudioManager"; 

const ConversationWindow = ({ transcript, setTranscript, isListening }) => {
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showListening, setShowListening] = useState(false);
  const scrollContainerRef = useRef(null);

  const MIN_DELAY = 500;
  const MAX_DELAY = 7000;

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { type: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setIsThinking(true);
    setIsTyping(false);

    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;

    setTimeout(() => {
      const isError = Math.random() < 0.10;

      if (isError) {
        const errorMsg = "Unable to generate response, please try again.";
        setNotificationMessage(errorMsg);
        AudioManager.speak(errorMsg); 
        setIsThinking(false);
        setTimeout(() => setNotificationMessage(""), 5000);
        return;
      }

      const cleanedText = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
      const doc = nlp(cleanedText);
      const topics = doc.topics().out("array");
      const nouns = doc.terms().out("array");

      let selectedResponse = "I'm not sure how to respond to that, but I'm listening!";

      const fallbackResponses = [
        "Could you clarify that a bit? I'm not sure I understand.",
        "Hmm, that’s interesting! I’m still learning about that topic.",
        "I don't quite know how to respond, but I'm here to chat.",
        "That sounds intriguing, but I don’t have a response for that right now.",
        "I’m not sure what you mean, but I’m happy to keep chatting!",
        "I'm not sure how to respond to that, but I'm listening!",
        "I'm still learning about that topic. Could you tell me more?",
        "I'm not sure what you're asking, but I'm here to help!",
        "Sorry, I don't quite understand. Could you try again with more information?",
        "I'm not sure... try using keywords in your message!"
      ];

      for (const topic of topics) {
        const normalized = topic.toLowerCase();
        if (ResponseDictionary.has(normalized)) {
          const options = ResponseDictionary.get(normalized);
          selectedResponse = options[Math.floor(Math.random() * options.length)];
          break;
        }
      }

      if (selectedResponse.includes("not sure")) {
        for (const noun of nouns) {
          const normalized = noun.toLowerCase();
          if (ResponseDictionary.has(normalized)) {
            const options = ResponseDictionary.get(normalized);
            selectedResponse = options[Math.floor(Math.random() * options.length)];
            break;
          }
        }
      }

      if (selectedResponse.includes("not sure")) {
        selectedResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      }

      setIsThinking(false);
      setIsTyping(true);

      const words = selectedResponse.split(" ");
      const botMessage = { type: "response", text: "" };
      setMessages((prev) => [...prev, botMessage]);

      AudioManager.speak(selectedResponse);

      let wordIndex = 0;
      const typeWord = () => {
        wordIndex++;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            text: words.slice(0, wordIndex).join(" "),
          };
          return updated;
        });

        if (wordIndex < words.length) {
          setTimeout(typeWord, 30);
        } else {
          setIsTyping(false);
        }
      };

      typeWord();
    }, delay);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isThinking, isTyping]);

  useEffect(() => {
    if (isListening) {
      setShowListening(true);
    }
  }, [isListening]);

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <div
        className="flex-1 overflow-y-auto w-full scroll-stable flex justify-center"
        ref={scrollContainerRef}
      >
        <div className="w-full max-w-[958px] pl-[39px] pt-8 pb-4 pr-[25px]">
          <Conversation messages={messages} />
          {isThinking && <TypingIndicator />}
        </div>
      </div>

      {notificationMessage && (
        <Notification
          message={notificationMessage}
          type="error"
          icon={<BsExclamationLg size={28} className="text-[#FF0000] text-2xl" />}
        />
      )}

      {showListening && (
        <Notification
          message="Listening"
          type="success"
          duration={isListening ? 999999 : 500}
          icon={<LuAudioLines size={28} style={{ color: "var(--buttonActiveColour)" }} />}
          onClose={() => setShowListening(false)}
        />
      )}

      <div className="sticky bottom-0 w-full flex justify-center bg-[var(--conversationWindowBackground)] z-10">
        <div className="w-full max-w-[960px] px-8">
          <MessageInput
            onSend={handleSendMessage}
            transcript={transcript}
            setTranscript={setTranscript}
          />
        </div>
      </div>
    </div>
  );
};

export default ConversationWindow;
