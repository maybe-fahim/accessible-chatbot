import React from "react";

const UserMessage = ({ children }) => {
  return (
    <div
      className="self-end w-fit break-words bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]"
      style={{ fontSize: "var(--messageTextSize)" }}
    >
      {children}
    </div>
  );
};

export default UserMessage;
