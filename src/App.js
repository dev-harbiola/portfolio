import React, { useState } from 'react';
import Portfolio from './component/Index';
import Container from './component/portfolio/Container.jsx';
import AnimatedCursor from 'react-animated-cursor';
import { MdToggleOn, MdToggleOff } from 'react-icons/md';


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    // const options = { true: 'dark', false: 'light' };
    setDarkTheme((theme) => !theme);
  };
  return (
      <Container className={`${darkTheme && 'dark'} dark:bg-gray-800 mont-montserrat`}>
        <AnimatedCursor
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
        />
        <div className={'absolute sm:-top-2 md:top-3 right-5 z-50'}>
          {darkTheme ? (
            <MdToggleOn
              className="sm:text-[4rem] md:text-[3.5rem] dark:text-gray-100"
              onClick={() => toggleTheme()}
            />
          ) : (
            <MdToggleOff
              className="sm:text-[4rem] md:text-[3.5rem] dark:text-gray-100"
              onClick={() => toggleTheme()}
            />
          )}
        </div>
        <Portfolio />
      </Container>
  );
}

export default App;
