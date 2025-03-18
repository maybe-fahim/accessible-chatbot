import React, { useRef, useState, useEffect } from "react";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";
import ResponseDictionary from "../data/ResponseDictionary";
import nlp from "compromise"; // ✅ Import compromise
import TypingIndicator from "./TypingIndicator";

const ConversationWindow = () => {
  const [messages, setMessages] = useState([
    { type: "user", text: "Hello!" },
    { type: "response", text: "Hi there! How can I assist you today?" },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef(null);

  const MIN_DELAY = 500;   // 0.5s
  const MAX_DELAY = 7000;  // 7s

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { type: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;

    setTimeout(() => {
      const doc = nlp(text.toLowerCase());
      const topics = doc.topics().out("array");
      const nouns = doc.nouns().out("array");

      console.log("Topics:", topics);
      console.log("Nouns:", nouns);

      let selectedResponse = "I'm not sure how to respond to that, but I'm listening!";

      for (const topic of topics) {
        if (ResponseDictionary[topic]) {
          const options = ResponseDictionary[topic];
          selectedResponse = options[Math.floor(Math.random() * options.length)];
          break;
        }
      }

      if (selectedResponse.includes("not sure")) {
        for (const noun of nouns) {
          if (ResponseDictionary[noun]) {
            const options = ResponseDictionary[noun];
            selectedResponse = options[Math.floor(Math.random() * options.length)];
            break;
          }
        }
      }

      const botMessage = { type: "response", text: selectedResponse };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  // ✅ Scroll to bottom on message or typing indicator change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col w-full h-screen items-center">
      {/* Scrollable Message Area */}
      <div
        className="flex-1 overflow-y-auto w-full scroll-stable flex justify-center"
        ref={scrollContainerRef}
      >
        <div className="w-full max-w-[958px] pl-[39px] pt-8 pb-4 pr-[25px]">
          <Conversation messages={messages} />
          {isTyping && <TypingIndicator />} {/* 👈 only show while "thinking" */}
        </div>
      </div>

      {/* Sticky Message Input */}
      <div className="sticky bottom-0 w-full flex justify-center bg-[var(--conversationWindowBackground)] z-10">
        <div className="w-full max-w-[960px] px-8">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ConversationWindow;
