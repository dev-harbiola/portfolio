import React from 'react';
import Portfolio from './component/Index';
import Container from './component/portfolio/Container.jsx';
// import AnimatedCursor from 'react-animated-cursor';
import useTheme from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <Container className={`${theme && 'dark'} dark:bg-gray-800 font-poppins`}>
      <Portfolio />
    </Container>
  );
}

export default App;
