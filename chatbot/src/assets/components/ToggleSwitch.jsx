import React, { forwardRef } from "react";

const ToggleSwitch = forwardRef(({
  label,
  shortcutKey,
  isActive,
  onToggle,
  iconOn,
  iconOff,
  bgClass,
}, ref) => {
  return (
    <div className="relative flex flex-col items-center w-[150px]">
      {/* Label */}
      <div
        className="mb-2 flex items-center justify-center overflow-hidden font-medium"
        style={{
          height: "32px",
          fontSize: "var(--toggleSwitchTextSize)",
          color: "var(--buttonColour)",
          lineHeight: "1.1",
          textAlign: "center",
        }}
      >
        {label}
      </div>

      {/* Toggle Button */}
      <button
        ref={ref}
        onClick={onToggle}
        className={`  
          relative w-[150px] h-[75px] flex items-center justify-between px-4
          rounded-[27.5px] transition-colors duration-300
          ${
            isActive
              ? bgClass || "bg-[var(--buttonActiveColour)]"
              : "bg-[var(--buttonColour)]"
          }
          focus:outline-none focus:ring-4 focus:ring-blue-500
        `}
        aria-pressed={isActive}
        aria-label={`${label} toggle`}
      >
        <span className="text-2xl" style={{ color: "var(--iconColour)" }}>
          {iconOff}
        </span>
        <div
          className={`absolute top-1.5 left-1.5 w-[60px] h-[60px] rounded-[20px] shadow-md transition-transform duration-300
          ${isActive ? "translate-x-[75px]" : "translate-x-0"}`}
          style={{ backgroundColor: "var(--toggleSwitchColour)" }}
        />
        <span className="text-2xl" style={{ color: "var(--iconColour)" }}>
          {iconOn}
        </span>
      </button>

      {/* Shortcut Badge */}
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
});

export default ToggleSwitch;
