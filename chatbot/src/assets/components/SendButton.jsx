import React from "react";
import { GoArrowUp } from "react-icons/go";

const SendButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-[60px] h-[60px]
        rounded-[20px]
        flex items-center justify-center
        transition-all duration-200
        focus:ring-5 focus:ring-blue-500 focus:outline-none
      "
      aria-label="Send message (Enter)"
      style={{
        backgroundColor: "var(--buttonColour)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--buttonHoverColour)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--buttonColour)")
      }
    >
      <GoArrowUp size={30} style={{ color: "var(--iconColour)" }} />
    </button>
  );
};

export default SendButton;
