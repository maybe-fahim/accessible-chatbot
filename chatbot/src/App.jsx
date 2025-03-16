import { useState, useEffect } from "react";
import ControlCentre from "./assets/components/ControlCentre";
import ConversationWindow from "./assets/components/ConversationWindow";

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
        <ConversationWindow />
      </div>
    </div>
  );
}
