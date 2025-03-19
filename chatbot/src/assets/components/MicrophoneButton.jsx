import React, { useState, useEffect, useRef } from "react";
import { MdMic, MdStop } from "react-icons/md";
import { useHotkeys } from "react-hotkeys-hook";
import AudioManager from "../context/AudioManager"; // ✅ Audio Mode

const MicrophoneButton = ({ onTranscript, setIsListening }) => {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported");
      return;
    }

    const recognizer = new SpeechRecognition();
    recognizer.lang = "en-US";
    recognizer.continuous = false;
    recognizer.interimResults = false;

    recognizer.onstart = () => {
      setListening(true);
      setIsListening(true);
      AudioManager.playStartCue(); // 🔊 Beep on start
    };

    recognizer.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };

    recognizer.onend = () => {
      setListening(false);
      setIsListening(false);
      AudioManager.playEndCue(); // 🔊 Beep on end
    };

    recognizer.onerror = () => {
      setListening(false);
      setIsListening(false);
    };

    setRecognition(recognizer);
  }, [onTranscript, setIsListening]);

  const toggleListening = () => {
    if (!recognition) return;

    if (!listening) recognition.start();
    else recognition.stop();
  };

  useHotkeys("s", () => {
    toggleListening();
    buttonRef.current?.focus();
  }, [recognition, listening]);

  return (
    <div className="relative flex flex-col items-center">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleListening}
        className="w-[75px] h-[75px] rounded-[27.5px] flex items-center justify-center transition-all duration-200 focus:ring-5 focus:ring-blue-500 focus:outline-none"
        aria-label="Start voice input (S)"
        style={{
          backgroundColor: listening ? "var(--buttonActiveColour)" : "var(--buttonColour)",
        }}
        onMouseEnter={(e) => {
          if (!listening) e.currentTarget.style.backgroundColor = "var(--buttonHoverColour)";
        }}
        onMouseLeave={(e) => {
          if (!listening) e.currentTarget.style.backgroundColor = "var(--buttonColour)";
        }}
      >
        {listening
          ? <MdStop size={37.5} style={{ color: "var(--iconColour)" }} />
          : <MdMic size={37.5} style={{ color: "var(--iconColour)" }} />}
      </button>

      {/* Keyboard Shortcut Badge */}
      <div
        className="absolute -bottom-8 w-[45px] h-[45px] rounded-full border-4 flex items-center justify-center font-semibold shadow-md"
        style={{
          backgroundColor: "var(--keyboardBadgeBackground)",
          borderColor: "var(--keyboardBadgeOutline)",
          color: "var(--keyboardBadgeText)",
          fontSize: "var(--keyboardBadgeSize)",
        }}
      >
        S
      </div>
    </div>
  );
};

export default MicrophoneButton;
