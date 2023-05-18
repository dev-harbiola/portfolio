// import React from 'react'

import About from './component/About';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Services from './component/Services';
import Skills from './component/Skills';

const Portfolio = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
