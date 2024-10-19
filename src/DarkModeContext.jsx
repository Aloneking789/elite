import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Custom hook for easy access to the context
export const useDarkMode = () => useContext(DarkModeContext);

// Context provider component
// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial value from localStorage or default to false
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const html = document.documentElement; // Select <html> element
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
