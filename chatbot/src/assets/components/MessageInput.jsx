import React from "react";
import SendButton from "./SendButton";
import MicrophoneButton from "./MicrophoneButton";

const MessageInput = () => {
  return (
    <div className="relative flex justify-center px-4 py-4 mb-4">

      {/* Message Box Container */}
      <div className="relative flex-grow max-w-[768px] w-full">
        {/* Textarea for top-aligned placeholder */}
        <textarea
          rows={4}
          placeholder="How can I help you today?"
          className="
            w-full h-[150px]
            bg-white text-gray-700 placeholder-gray-400
            px-6 py-4 pr-16
            rounded-[20px]
            shadow-sm border border-gray-300
            focus:ring-5 focus:ring-blue-500 focus:outline-none
            text-lg resize-none
          "
        />

        {/* Send Button - Inside top-right of input box */}
        <div className="absolute top-3 right-3">
          <SendButton />
        </div>

        {/* Helper Text */}
        <p className="absolute bottom-5 right-5 text-sm text-gray-400">
          Press Enter to send
        </p>
      </div>
    </div>
  );
};

export default MessageInput;
