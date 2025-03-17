import { UIProvider } from "./assets/context/UIContext"; // ✅ correct name
import { useState, useEffect } from "react";
import ControlCentre from "./assets/components/ControlCentre";
import ConversationWindow from "./assets/components/ConversationWindow";
import MicrophoneButton from "./assets/components/MicrophoneButton";

export default function App() {
  const [controlOpen, setControlOpen] = useState(true);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("large-text", largeText);
  }, [largeText]);

  return (
    <UIProvider> {/* ✅ use UIProvider now */}
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
        <div className="flex flex-col flex-1 text-[var(--text)] bg-[var(--conversationWindowBackground)]">
          <div className="flex justify-center items-end flex-1 px-4 pb-4">
            <div className="w-[80px] flex justify-end mb-[105px] ml-6 px-2">
              <MicrophoneButton />
            </div>
            <div className="w-full max-w-[960px]">
              <ConversationWindow />
            </div>
          </div>
        </div>
      </div>
    </UIProvider>
  );
}
