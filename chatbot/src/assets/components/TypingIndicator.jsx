import React from "react";
import "../styles/TypingIndicator.css"; // ✅ Update this path if needed

const TypingIndicator = () => {
  return (
    <div className="flex space-x-1.75 items-end justify-start h-16 pb-4 ml-4 overflow-visible">
      <div className="dot bg-[var(--buttonColour)] animate-bounce1" />
      <div className="dot bg-[var(--buttonColour)] animate-bounce2" />
      <div className="dot bg-[var(--buttonColour)] animate-bounce3" />
    </div>
  );
};

export default TypingIndicator;
