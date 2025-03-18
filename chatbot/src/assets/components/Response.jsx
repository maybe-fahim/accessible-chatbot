import React from "react";

const Response = ({ children }) => {
  return (
    <div
      className="self-start w-fit break-words text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]"
      style={{ fontSize: "var(--messageTextSize)" }}
    >
      {children}
    </div>
  );
};

export default Response;
