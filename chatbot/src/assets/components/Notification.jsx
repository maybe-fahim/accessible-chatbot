import React, { useState, useEffect } from "react";

const Notification = ({ message, type, icon, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    // When isVisible becomes false, fire onClose after transition
    if (!isVisible && onClose) {
      const cleanupTimer = setTimeout(() => {
        onClose();
      }, 500); // must match transition duration
      return () => clearTimeout(cleanupTimer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-full max-w-xs w-auto text-center flex items-center justify-center
        ${type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"} 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"}
        transition-all duration-500 ease-in-out shadow-lg`}
      style={{
        fontSize: "var(--placeholderTextSize)",
        backgroundColor: "var(--notificationBackground)",
        paddingLeft: "12px",
        paddingRight: "16px",
        maxWidth: "90%",
        fontWeight: "500",
        color: "var(--notificationTextColour)",
      }}
    >
      {icon && (
        <span
          className="mr-3 flex items-center justify-center"
          style={{ fontSize: "1.5rem", lineHeight: "1" }}
        >
          {icon}
        </span>
      )}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
