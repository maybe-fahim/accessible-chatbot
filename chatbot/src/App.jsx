import { useState, useEffect } from "react";
import ControlCentre from "./assets/components/ControlCentre";
import ConversationWindow from "./assets/components/ConversationWindow";
import MessageInput from "./assets/components/MessageInput";
import MicrophoneButton from "./assets/components/MicrophoneButton";

export default function App() {
  const [controlOpen, setControlOpen] = useState(true);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("large-text", largeText);
  }, [largeText]);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Control Centre Sidebar */}
      <div
        className={`
          bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 ease-in-out
          ${controlOpen ? "w-64" : "w-16"}
          relative
        `}
      >
        <ControlCentre
          isOpen={controlOpen}
          setIsOpen={setControlOpen}
          setLargeText={setLargeText}
          largeText={largeText}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 bg-[var(--bg-color)] text-[var(--text-color)]">
        {/* Centered Chat Window */}
        <div className="flex justify-center w-full flex-grow overflow-y-auto px-4 pt-6">
          <div className="flex flex-col w-full max-w-[768px]">
            <ConversationWindow />
          </div>
        </div>

        {/* Message Input Area - pinned bottom */}
        <div className="relative flex justify-center w-full px-4 pb-6">
          {/* Microphone Button - aligned with input */}
          <div className="absolute left-[calc(50%-384px-80px)] bottom-[24px]">
            <MicrophoneButton />
          </div>

          {/* Message Input */}
          <div className="w-full max-w-[768px]">
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
}
