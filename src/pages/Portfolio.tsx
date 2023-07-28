import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Project from "./projects/Project";
import Services from "./services/Services";

const Portfolio = () => {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
    </main>
  );
};

export default Portfolio;
