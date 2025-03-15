import React from "react";
import { GoArrowUp } from "react-icons/go";

const SendButton = () => {
  return (
    <button
      type="button"
      className="w-[60px] h-[60px]
          bg-gray-500 hover:bg-gray-700 text-white
          rounded-[20px]
          flex items-center justify-center
          transition-all duration-200
          focus:ring-5 focus:ring-blue-500 focus:outline-none"
      aria-label="Send message (Enter)"
    >
      <GoArrowUp size={30}/>
    </button>
  );
};

export default SendButton;
