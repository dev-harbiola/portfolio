import { useContext } from 'react';
import ThemeContext from '../context/themeContext';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;

// import { useState, useEffect } from 'react';

// const useTheme = () => {
//   const [darkTheme, setDarkTheme] = useState(() => {
//     const jsonValue =
//       typeof window !== 'undefined' ? localStorage.getItem('darkTheme') : null;
//     if (jsonValue != null) return true;
//     return false;
//   });

//   useEffect(() => {
//     const controller = new AbortController();
//     localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
//     return () => {
//       controller.abort();
//     };
//   }, [darkTheme]);

//   function toggleTheme() {
//     setDarkTheme((theme) => !theme);
//   }

//   return [darkTheme, setDarkTheme, toggleTheme];
// };

// export default useTheme;
