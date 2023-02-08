import React from 'react';
import Portfolio from './component/Index';
import Container from './component/portfolio/Container.jsx';
// import AnimatedCursor from 'react-animated-cursor';
import useTheme from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <Container className={`${theme && 'dark'} dark:bg-gray-800 font-poppins`}>
      {/* <AnimatedCursor
        innerSize={12}
        outerSize={30}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          'li',
          'Link',
          '.link',
        ]}
      /> */}

      <Portfolio />
    </Container>
  );
}

export default App;
