import React from "react";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

const ConversationWindow = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      {/* Scrollable Message Area */}
      <div
        className="overflow-y-auto w-full flex justify-center scroll-stable"
      >
        <div className="w-full max-w-[960px] pl-10 pt-8 pb-4 pr-6">
          <Conversation />
        </div>
      </div>

      {/* Fixed Message Input Area */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[960px] px-8">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ConversationWindow;
