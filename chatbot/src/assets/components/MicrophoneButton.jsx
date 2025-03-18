import React from "react";
import { MdMic } from "react-icons/md";

const MicrophoneButton = () => {
  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        className="
          w-[75px] h-[75px]
          rounded-[27.5px]
          flex items-center justify-center
          transition-all duration-200
          focus:ring-5 focus:ring-blue-500 focus:outline-none
        "
        aria-label="Start voice input (S)"
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
        <MdMic size={37.5} style={{ color: "var(--iconColour)" }} />
      </button>

      {/* Shortcut Key Badge */}
      <div
        className="absolute -bottom-8 w-[45px] h-[45px] rounded-full border-4 flex items-center justify-center font-semibold shadow-md"
        style={{
          backgroundColor: "var(--keyboardBadgeBackground)",
          borderColor: "var(--keyboardBadgeOutline)",
          color: "var(--keyboardBadgeText)",
          fontSize: "var(--keyboardBadgeSize)", // ✅ dynamic font size from context
        }}
      >
        S
      </div>
    </div>
  );
};

export default MicrophoneButton;
