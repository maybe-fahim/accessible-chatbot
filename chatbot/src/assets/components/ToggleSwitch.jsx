import React from "react";

const ToggleSwitch = ({
  label,
  shortcutKey,
  isActive,
  onToggle,
  iconOn,
  iconOff,
  bgClass, // new optional prop for custom background when active
}) => {
  return (
    <div className="relative flex flex-col items-center w-[150px]">
      {/* Label above toggle */}
      <span className="mb-2 text-base font-medium text-center text-white">{label}</span>

      {/* Toggle Container */}
      <button
        onClick={onToggle}
        className={`  
          relative w-[150px] h-[75px] flex items-center justify-between px-4
          rounded-[27.5px] transition-colors duration-300
          ${
            isActive
              ? bgClass || "bg-[var(--toggle-on)]"
              : "bg-[var(--toggle-off)]"
          }
          focus:ring-5 focus:ring-blue-500 focus:outline-none custom-focus-ring
        `}
        aria-pressed={isActive}
        aria-label={`${label} toggle`}
      >
        {/* Left Icon */}
        <span className="text-2xl">{iconOff}</span>

        {/* Slider Knob */}
        <div
          className={`  
            absolute top-1.5 left-1.5
            w-[60px] h-[60px] bg-white rounded-[20px] shadow-md
            transition-transform duration-300
            ${isActive ? "translate-x-[75px]" : "translate-x-0"}
          `}
        />

        {/* Right Icon */}
        <span className="text-2xl">{iconOn}</span>
      </button>

      {/* Shortcut Key Badge */}
      <div className="
        absolute -bottom-8 w-[45px] h-[45px]
        rounded-full border-4 border-gray-600 bg-white
        flex items-center justify-center text-2xl font-semibold
        shadow-md
      ">
        {shortcutKey}
      </div>
    </div>
  );
};

export default ToggleSwitch;
