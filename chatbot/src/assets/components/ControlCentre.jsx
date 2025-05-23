import React, { useRef, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import BurgerMenu from "./BurgerMenu";
import { FiSun, FiMoon, FiEye, FiEyeOff, FiVolume1, FiVolumeX } from "react-icons/fi";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { useUI } from "../context/UIContext";
import { useHotkeys } from "react-hotkeys-hook";
import AudioManager from "../context/AudioManager"; // ✅

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

  const burgerRef = useRef(null);
  const themeRef = useRef(null);
  const textRef = useRef(null);
  const contrastRef = useRef(null);
  const audioRef = useRef(null);

  useHotkeys("a", () => {
    setIsOpen(prev => !prev);
    setTimeout(() => burgerRef.current?.focus(), 10);
  }, [setIsOpen]);

  useHotkeys("q", () => {
    if (!isOpen) return;
    setDarkMode(prev => {
      const next = !prev;
      AudioManager.speak(`Theme ${next ? "dark" : "light"}`);
      return next;
    });
    setTimeout(() => themeRef.current?.focus(), 10);
  }, [isOpen]);

  useHotkeys("w", () => {
    if (!isOpen) return;
    setLargeText(prev => {
      const next = !prev;
      AudioManager.speak(`Large text ${next ? "enabled" : "disabled"}`);
      return next;
    });
    setTimeout(() => textRef.current?.focus(), 10);
  }, [isOpen]);

  useHotkeys("e", () => {
    if (!isOpen) return;
    setHighContrast(prev => {
      const next = !prev;
      AudioManager.speak(`High contrast ${next ? "enabled" : "disabled"}`);
      return next;
    });
    setTimeout(() => contrastRef.current?.focus(), 10);
  }, [isOpen]);

  useHotkeys("r", () => {
    if (!isOpen) return;
    setAudioMode(prev => {
      const next = !prev;
      if (next) AudioManager.enable();
      else AudioManager.disable();
      AudioManager.speak(`Audio mode ${next ? "enabled" : "disabled"}`);
      return next;
    });
    setTimeout(() => audioRef.current?.focus(), 10);
  }, [isOpen]);

  return (
    <div
      className={`
        flex flex-col h-full transition-all duration-300 ease-in-out
        text-sm text-[var(--text)]
        ${isOpen ? "w-64 px-4" : "w-16 px-2"}
        bg-[var(--controlCentreBackground)]
      `}
    >
      <div className="flex justify-end items-center mt-2">
        <button
          ref={burgerRef}
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-md"
          aria-label="Toggle menu (A)"
        >
          <BurgerMenu />
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-16 pb-6">
          <div />

          <ToggleSwitch
            ref={themeRef}
            label="Theme"
            shortcutKey="Q"
            isActive={darkMode}
            onToggle={() => {
              setDarkMode(prev => {
                const next = !prev;
                AudioManager.speak(`Theme ${next ? "dark" : "light"}`);
                return next;
              });
            }}
            iconOff={<FiMoon size={37.5} />}
            iconOn={<FiSun size={37.5} />}
            bgClass="bg-[var(--buttonColour)]"
          />

          <ToggleSwitch
            ref={textRef}
            label="Large Text"
            shortcutKey="W"
            isActive={largeText}
            onToggle={() => {
              setLargeText(prev => {
                const next = !prev;
                AudioManager.speak(`Large text ${next ? "enabled" : "disabled"}`);
                return next;
              });
            }}
            iconOff={<MdTextIncrease size={37.5} />}
            iconOn={<MdTextDecrease size={37.5} />}
          />

          <ToggleSwitch
            ref={contrastRef}
            label="High Contrast"
            shortcutKey="E"
            isActive={highContrast}
            onToggle={() => {
              setHighContrast(prev => {
                const next = !prev;
                AudioManager.speak(`High contrast ${next ? "enabled" : "disabled"}`);
                return next;
              });
            }}
            iconOff={<FiEye size={37.5} />}
            iconOn={<FiEyeOff size={37.5} />}
          />

          <ToggleSwitch
            ref={audioRef}
            label="Audio Mode"
            shortcutKey="R"
            isActive={audioMode}
            onToggle={() => {
              setAudioMode(prev => {
                const next = !prev;
                if (next) AudioManager.enable();
                else AudioManager.disable();
                AudioManager.speak(`Audio mode ${next ? "enabled" : "disabled"}`);
                return next;
              });
            }}
            iconOff={<FiVolume1 size={37.5} />}
            iconOn={<FiVolumeX size={37.5} />}
          />
        </div>
      )}
    </div>
  );
};

export default ControlCentre;
