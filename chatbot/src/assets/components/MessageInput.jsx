import React, { useState, useRef, useEffect } from "react";
import SendButton from "./SendButton";

const MessageInput = ({ onSend, transcript, setTranscript }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      textareaRef.current?.blur();
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (text.trim()) {
        onSend(text);
        setText("");
        textareaRef.current?.blur();
      }
    }
  };

  useEffect(() => {
    const handleGlobalEnter = (e) => {
      if (!isFocused && e.key === "Enter") {
        e.preventDefault();
        textareaRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalEnter);
    return () => window.removeEventListener("keydown", handleGlobalEnter);
  }, [isFocused]);

  // Inject transcript into the message box
  useEffect(() => {
    if (transcript) {
      setText((prev) => (prev ? prev + " " + transcript : transcript));
      setTranscript("");
    }
  }, [transcript, setTranscript]);

  return (
    <div className="relative flex justify-center py-6">
      <div className="relative flex-grow w-full">
        <textarea
          ref={textareaRef}
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How can I help you today?"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className="
            w-full h-[150px]
            bg-[var(--textBoxBackground)] text-[var(--messageTextColour)] placeholder-[var(--helpTextColour)]
            px-6 py-4 pr-16
            rounded-[20px]
            shadow-sm
            focus:ring-5 focus:ring-blue-500 focus:outline-none
            resize-none
          "
          style={{ fontSize: "var(--placeholderTextSize)" }}
        />

        <div className="absolute top-3 right-3">
          <SendButton
            onClick={() => {
              if (text.trim()) {
                onSend(text);
                setText("");
                textareaRef.current?.blur();
              }
            }}
          />
        </div>

        <p
          className="absolute bottom-5 left-5 text-sm text-[var(--helpTextColour)]"
          style={{ fontSize: "var(--helpTextSize)" }}
        >
          {isFocused ? "Press Esc to exit" : "Press Enter to type"}
        </p>

        {isFocused && (
          <p
            className="absolute bottom-5 right-5 text-sm text-[var(--helpTextColour)]"
            style={{ fontSize: "var(--helpTextSize)" }}
          >
            Press Enter to send
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
