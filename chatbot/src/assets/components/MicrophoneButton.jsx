import React from "react";

const MicrophoneButton = () => {
  return (
    <button
      type="button"
      className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Start voice input (S)"
    >
      <span className="text-lg">🎤</span>
    </button>
  );
};

export default MicrophoneButton;
