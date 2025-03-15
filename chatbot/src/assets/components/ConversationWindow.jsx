import React from "react";

const ConversationWindow = () => {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto flex-grow p-4 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] ">
      {/* Sample user message */}
      <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs">
        Can you write me a short poem?
      </div>

      {/* Sample chatbot message */}
      <div className="self-start bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl max-w-xs text-white">
        Here’s a short poem for you:
        <br />
        Whispers of dawn...
      </div>
    </div>
  );
};

export default ConversationWindow;
