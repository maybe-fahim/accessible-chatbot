import React from "react";
import UserMessage from "./UserMessage";
import Response from "./Response";

const Conversation = ({ messages }) => {
  return (
    <div className="flex flex-col gap-8">
      {messages.map((msg, index) =>
        msg.type === "user" ? (
          <UserMessage key={index}>{msg.text}</UserMessage>
        ) : (
          <Response key={index}>{msg.text}</Response>
        )
      )}
    </div>
  );
};

export default Conversation;
