import React from "react";

const ToggleSwitch = ({
  label,
  shortcutKey,
  isActive,
  onToggle,
  iconOn,
  iconOff,
  bgClass, // optional override
}) => {
  return (
    <div className="relative flex flex-col items-center w-[150px]">
      {/* Label above toggle */}
      <span
        className="mb-2 font-medium text-center"
        style={{
          color: "var(--buttonColour)",
          fontSize: "var(--toggleSwitchTextSize)",
        }}
      >
        {label}
      </span>

      {/* Toggle Container */}
      <button
        onClick={onToggle}
        className={`  
          relative w-[150px] h-[75px] flex items-center justify-between px-4
          rounded-[27.5px] transition-colors duration-300
          ${
            isActive
              ? bgClass || "bg-[var(--buttonActiveColour)]"
              : "bg-[var(--buttonColour)]"
          }
          focus:ring-5 focus:ring-blue-500 focus:outline-none custom-focus-ring
        `}
        aria-pressed={isActive}
        aria-label={`${label} toggle`}
      >
        {/* Left Icon */}
        <span className="text-2xl" style={{ color: "var(--iconColour)" }}>
          {iconOff}
        </span>

        {/* Slider Knob */}
        <div
          className={`  
            absolute top-1.5 left-1.5
            w-[60px] h-[60px] rounded-[20px] shadow-md
            transition-transform duration-300
            ${isActive ? "translate-x-[75px]" : "translate-x-0"}
          `}
          style={{ backgroundColor: "var(--toggleSwitchColour)" }}
        />

        {/* Right Icon */}
        <span className="text-2xl" style={{ color: "var(--iconColour)" }}>
          {iconOn}
        </span>
      </button>

      {/* Shortcut Key Badge */}
      <div
        className="absolute -bottom-8 w-[45px] h-[45px] rounded-full border-4 flex items-center justify-center shadow-md"
        style={{
          backgroundColor: "var(--keyboardBadgeBackground)",
          borderColor: "var(--keyboardBadgeOutline)",
          color: "var(--keyboardBadgeText)",
          fontSize: "var(--keyboardBadgeSize)",
          fontWeight: 600,
        }}
      >
        {shortcutKey}
      </div>
    </div>
  );
};

export default ToggleSwitch;
