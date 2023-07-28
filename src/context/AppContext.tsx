import React, { useState, useEffect, createContext } from "react";

type AppTypes = {
  toggleTheme: () => void;
  dark: boolean;
  openSideBar: boolean;
  toggleSidebar: () => void;
  theme: string;
};

interface AppProviderProps {
  children: React.ReactNode;
}

type variant = "light" | "dark" | "outline" | "plain";

const AppContext = createContext({} as AppTypes);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [dark, setDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });
  const [theme, setTheme] = useState<variant>("dark");

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
    setTheme(dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <AppContext.Provider
      value={{ dark, theme, toggleTheme, openSideBar, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
