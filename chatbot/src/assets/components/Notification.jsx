import React, { useState, useEffect } from "react";

const Notification = ({ message, type, icon, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the notification after the duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration); // Duration in milliseconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [duration]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-full max-w-xs w-auto text-center flex items-center justify-center
        ${type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"} 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"}
        transition-all duration-500 ease-in-out shadow-lg`}
      style={{
        fontSize: "var(--placeholderTextSize)",
        backgroundColor: "var(--notificationBackground)",
        paddingLeft: "12px", // Add some padding for icon spacing
        paddingRight: "16px",
        maxWidth: "90%", // Makes the notification responsive
        fontWeight: "500", // Increased font weight
        color: "var(--notificationTextColour)", // Use the notification text color from the theme
      }}
    >
      {/* If an icon is passed, display it */}
      {icon && (
        <span
          className="mr-3 flex items-center justify-center"
          style={{
            fontSize: "1.5rem", // Increased icon size
            lineHeight: "1", // Vertically center icon
          }}
        >
          {icon}
        </span>
      )}

      {/* Message Text */}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
