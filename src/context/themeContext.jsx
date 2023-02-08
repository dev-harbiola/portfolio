import React, { useState, createContext } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('theme'));
    if (storage == null || storage === undefined) {
      localStorage.setItem('theme', true);
      return JSON.parse(localStorage.getItem('theme'));
    }
    return storage;
  });

  function toggleTheme() {
    setTheme((theme) => {
      localStorage.setItem('theme', !theme);
      return JSON.parse(localStorage.getItem('theme'));
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
