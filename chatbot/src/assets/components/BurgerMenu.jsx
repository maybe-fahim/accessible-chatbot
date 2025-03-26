import React from "react";
import { FiMenu } from "react-icons/fi";

const BurgerMenu = ({ onClick }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Icon Button */}
      <button
        onClick={onClick}
        className="
          focus:ring-5 focus:ring-blue-500 focus:outline-none
          transition-all duration-200
        "
        aria-label="Toggle control centre (A)"
        style={{ color: "var(--buttonColour)" }}
      >
        <FiMenu size={50} />
      </button>

      {/* Shortcut Key Badge */}
      <div
        className="absolute -bottom-10 w-[45px] h-[45px] rounded-full border-4 flex 
        items-center justify-center font-semibold shadow-md"
        style={{
          backgroundColor: "var(--keyboardBadgeBackground)",
          borderColor: "var(--keyboardBadgeOutline)",
          color: "var(--keyboardBadgeText)",
          fontSize: "var(--keyboardBadgeSize)", // ✅ Dynamic text size
        }}
      >
        A
      </div>
    </div>
  );
};

export default BurgerMenu;
