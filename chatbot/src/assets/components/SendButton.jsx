import React from "react";

const SendButton = () => {
  return (
    <button
      type="button"
      className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Send message (Enter)"
    >
      <span className="text-lg">⬆</span>
    </button>
  );
};

export default SendButton;
