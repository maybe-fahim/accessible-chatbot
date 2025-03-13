import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import BurgerMenu from "./BurgerMenu";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FiVolume1 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";


const ControlCentre = ({ isOpen, setIsOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [audioMode, setAudioMode] = useState(false);

  return (
    <div
      className={`
        flex flex-col h-full transition-all duration-300 ease-in-out
        text-sm text-[var(--text-color)]
        ${isOpen ? "w-64 px-4" : "w-16 px-2"}
        bg-neutral-900 dark:bg-neutral-800
      `}
    >
      {/* Burger Icon (always visible, top-right) */}
      <div className="flex justify-end items-center h-14">
        <BurgerMenu onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Toggle Area */}
      {isOpen && (
        <div className="flex flex-col items-center gap-16 pb-6">
          <div className="text-lg font-semibold mb-2 text-white">Accessibility</div>

          {/* Theme Toggle */}
          <ToggleSwitch
            label="Theme"
            shortcutKey="Q"
            isActive={darkMode}
            onToggle={() => setDarkMode(prev => !prev)}
            iconOff={<FiMoon size={37.5}/>}
            iconOn={<FiSun size={37.5}/>}
            bgClass="bg-[var(--toggle-off)]"
          />

          {/* Large Text */}
          <ToggleSwitch
            label="Large Text"
            shortcutKey="W"
            isActive={largeText}
            onToggle={() => setLargeText(prev => !prev)}
            iconOff={<FiEye size={37.5}/>}
            iconOn={<FiEyeOff size={37.5}/>}
          />

          {/* High Contrast */}
          <ToggleSwitch
            label="High Contrast"
            shortcutKey="E"
            isActive={highContrast}
            onToggle={() => setHighContrast(prev => !prev)}
            iconOff="⚫"
            iconOn="🟡"
          />

          {/* Audio Mode */}
          <ToggleSwitch
            label="Audio Mode"
            shortcutKey="R"
            isActive={audioMode}
            onToggle={() => setAudioMode(prev => !prev)}
            iconOff={<FiVolumeX size={37.5}/>}
            iconOn={<FiVolume1 size={37.5}/>}
          />
        </div>
      )}
    </div>
  );
};

export default ControlCentre;
