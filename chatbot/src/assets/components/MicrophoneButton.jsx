import React from "react";
import { MdMic } from "react-icons/md";

const MicrophoneButton = () => {
  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        className="
          w-[75px] h-[75px]
          bg-gray-500 hover:bg-gray-700 text-white
          rounded-[27.5px]
          flex items-center justify-center
          transition-all duration-200
          focus:ring-5 focus:ring-blue-500 focus:outline-none
        "
        aria-label="Start voice input (S)"
      >
        <MdMic size={37.5} />
      </button>

      {/* Shortcut Key Badge */}
      <div className="
        absolute -bottom-8 w-[45px] h-[45px]
        rounded-full border-4 border-gray-600 bg-white
        flex items-center justify-center text-2xl font-semibold
        shadow-md
      ">
        S
      </div>
    </div>
  );
};

export default MicrophoneButton;
