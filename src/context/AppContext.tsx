import React, { useState, useEffect, createContext } from 'react';

type AppTypes = {
  toggleTheme: () => void;
  dark: boolean;
  openSideBar: boolean;
  toggleSidebar: () => void;
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({} as AppTypes);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [dark, setDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setOpenSideBar(openSideBar => !openSideBar);
  }


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(dark));
  }, [dark]);

  const toggleTheme = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <AppContext.Provider value={{ dark, toggleTheme,openSideBar, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;