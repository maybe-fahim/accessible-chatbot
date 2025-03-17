import React from "react";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

const ConversationWindow = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      {/* Scrollable Message Area (full width, content centered) */}
      <div className="flex-1 overflow-y-auto w-full scroll-stable flex justify-center">
        <div className="w-full max-w-[958px] pl-[39px] pt-8 pb-4 pr-[25px]">
          <Conversation />
        </div>
      </div>

      {/* Sticky Message Input Area */}
      <div className="sticky bottom-0 w-full flex justify-center bg-[var(--conversationWindowBackground)] z-10">
        <div className="w-full max-w-[960px] px-8">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ConversationWindow;
