// src/context/UIContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Define full theme objects
const themes = {
  light: {
    name: "light",
    controlCentreBackground: "#E6E5DE",
    conversationWindowBackground: "#F2F1E8",
    userMessageBackground: "#FFFFFF",
    textBoxBackground: "#FFFFFF",
    buttonColour: "#454441",
    buttonActiveColour: "#25BB4D",
    buttonHoverColour: "#FF0000",
    toggleSwitchColour: "#FFFFFF",
    messageTextColour: "#2A2A28",
    keyboardBadgeBackground: "#FEFEFD",
    keyboardBadgeOutline: "#818181",
    keyboardBadgeText: "#000000",
    iconColour: "#FFFFFF",
    helpTextColour: "#91908C",
  },
  dark: {
    name: "dark",
    controlCentreBackground: "#2E2E2E",
    conversationWindowBackground: "#373737",
    userMessageBackground: "#595959",
    textBoxBackground: "#5B5B5B",
    buttonColour: "#E5E5E5",
    buttonActiveColour: "#25BB4D",
    buttonHoverColour: "#FF0000",
    toggleSwitchColour: "#303030",
    messageTextColour: "#FFFFFF",
    keyboardBadgeBackground: "#FEFEFD",
    keyboardBadgeOutline: "#818181",
    keyboardBadgeText: "#000000",
    iconColour: "#303030",
    helpTextColour: "#D2D2CC",
  },
  "light-high-contrast": {
    name: "light-high-contrast",
    controlCentreBackground: "#EEEEEE",
    conversationWindowBackground: "#FFFFFF",
    userMessageBackground: "#EEEEEE",
    textBoxBackground: "#EEEEEE",
    buttonColour: "#000000",
    buttonActiveColour: "#00E93E",
    buttonHoverColour: "#FF0000",
    toggleSwitchColour: "#FFFFFF",
    messageTextColour: "#000000",
    keyboardBadgeBackground: "#FFFFFF",
    keyboardBadgeOutline: "#000000",
    keyboardBadgeText: "#000000",
    iconColour: "#FFFFFF",
    helpTextColour: "#000000",
  },
  "dark-high-contrast": {
    name: "dark-high-contrast",
    controlCentreBackground: "#000000",
    conversationWindowBackground: "#181818",
    userMessageBackground: "#000000",
    textBoxBackground: "#000000",
    buttonColour: "#FFFFFF",
    buttonActiveColour: "#25BB4D",
    buttonHoverColour: "#FF0000",
    toggleSwitchColour: "#000000",
    messageTextColour: "#FFFFFF",
    keyboardBadgeBackground: "#000000",
    keyboardBadgeOutline: "#FFFFFF",
    keyboardBadgeText: "#FFFFFF",
    iconColour: "#000000",
    helpTextColour: "#FFFFFF",
  },
};

// Create context
const UIContext = createContext();

// Hook
export const useUI = () => useContext(UIContext);

// Provider
export const UIProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const getThemeKey = () => {
    if (darkMode && highContrast) return "dark-high-contrast";
    if (darkMode) return "dark";
    if (highContrast) return "light-high-contrast";
    return "light";
  };

  const themeKey = getThemeKey();
  const theme = themes[themeKey];

  // Apply theme CSS variables
  useEffect(() => {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  }, [theme]);

  // ✅ Inject font size variables
  useEffect(() => {
    const fontSizes = largeText
      ? {
          messageTextSize: "2rem",       // 18px
          placeholderTextSize: "1.75rem",        // 32px
          toggleSwitchTextSize: "1.75rem",
          keyboardBadgeSize: "1.75rem",
          helpTextSize: "1.25rem",
        }
      : {
          messageTextSize: "1rem",       // 18px
          placeholderTextSize: "1.125rem",        // 32px
          toggleSwitchTextSize: "1.125rem",
          keyboardBadgeSize: "1.5rem",
          helpTextSize: "0.875rem",
        };

    for (const [key, value] of Object.entries(fontSizes)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  }, [largeText]);

  return (
    <UIContext.Provider
      value={{
        darkMode,
        highContrast,
        largeText,
        setDarkMode,
        setHighContrast,
        setLargeText,
        themeName: theme.name,
        theme,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
