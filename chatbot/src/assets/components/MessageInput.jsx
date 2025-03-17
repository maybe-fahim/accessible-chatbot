import React, { useState } from "react";
import SendButton from "./SendButton";

const MessageInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex justify-center py-6">
      {/* Message Box Container */}
      <div className="relative flex-grow w-full">
        {/* Textarea for top-aligned placeholder */}
        <textarea
          rows={4}
          placeholder="How can I help you today?"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            w-full h-[150px]
            bg-[var(--textBoxBackground)] text-[var(--messageTextColour)] placeholder-[var(--helpTextColour)]
            px-6 py-4 pr-16
            rounded-[20px]
            shadow-sm
            focus:ring-5 focus:ring-blue-500 focus:outline-none
            resize-none
          "
          style={{
            fontSize: "var(--placeholderTextSize)",
          }}
        />

        {/* Send Button - Inside top-right of input box */}
        <div className="absolute top-3 right-3">
          <SendButton />
        </div>

        {/* Helper Text - Right */}
        <p
          className="absolute bottom-5 right-5 text-sm text-[var(--helpTextColour)]"
          style={{ fontSize: "var(--helpTextSize)" }}
        >
          Press Enter to send
        </p>

        {/* Helper Text - Left (only when focused) */}
        {isFocused && (
          <p
            className="absolute bottom-5 left-5 text-sm text-[var(--helpTextColour)]"
            style={{ fontSize: "var(--helpTextSize)" }}
          >
            Press Esc to exit
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
