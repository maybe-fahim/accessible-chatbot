import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import BurgerMenu from "./BurgerMenu";
import { FiSun, FiMoon, FiEye, FiEyeOff, FiVolume1, FiVolumeX } from "react-icons/fi";
import { useUI } from "../context/UIContext"; // ✅ Import useTheme

const ControlCentre = ({ isOpen, setIsOpen }) => {
  const {
    darkMode,
    highContrast,
    largeText,
    setDarkMode,
    setHighContrast,
    setLargeText,
  } = useUI();
  

  const [audioMode, setAudioMode] = useState(false);

  return (
    <div
      className={`
        flex flex-col h-full transition-all duration-300 ease-in-out
        text-sm text-[var(--text)]
        ${isOpen ? "w-64 px-4" : "w-16 px-2"}
        bg-[var(--controlCentreBackground)]
      `}
    >
      {/* Burger Icon */}
      <div className="flex justify-end items-center h-14">
        <button
          onClick={() => setIsOpen(!isOpen)}>
          <BurgerMenu />
        </button>
      </div>

      {/* Toggle Area */}
      {isOpen && (
        <div className="flex flex-col items-center gap-16 pb-6">
          <div />

          {/* Theme Toggle */}
          <ToggleSwitch
            label="Theme"
            shortcutKey="Q"
            isActive={darkMode}
            onToggle={() => setDarkMode(prev => !prev)}
            iconOff={<FiMoon size={37.5} />}
            iconOn={<FiSun size={37.5} />}
            bgClass="bg-[var(--buttonColour)]"
          />

          {/* Large Text */}
          <ToggleSwitch
            label="Large Text"
            shortcutKey="W"
            isActive={largeText}
            onToggle={() => {
              console.log("Toggling large text");
              setLargeText(prev => !prev)
            }}
            iconOff={<FiEyeOff size={37.5} />}
            iconOn={<FiEyeOff size={37.5} />}
          />

          {/* High Contrast */}
          <ToggleSwitch
            label="High Contrast"
            shortcutKey="E"
            isActive={highContrast}
            onToggle={() => setHighContrast(prev => !prev)}
            iconOff={<FiEye size={37.5} />}
            iconOn={<FiEyeOff size={37.5} />}
          />

          {/* Audio Mode */}
          <ToggleSwitch
            label="Audio Mode"
            shortcutKey="R"
            isActive={audioMode}
            onToggle={() => setAudioMode(prev => !prev)}
            iconOff={<FiVolumeX size={37.5} />}
            iconOn={<FiVolume1 size={37.5} />}
          />
        </div>
      )}
    </div>
  );
};

export default ControlCentre;
