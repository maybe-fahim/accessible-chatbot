import React from "react";
import SendButton from "./SendButton";
import MicrophoneButton from "./MicrophoneButton";

const MessageInput = () => {
  return (
    <div className="flex items-center gap-2 p-4 rounded-lg bg-white shadow-md border mt-4">
      {/* Mic Button */}
      <MicrophoneButton />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Send Button */}
      <SendButton />
    </div>
  );
};

export default MessageInput;
