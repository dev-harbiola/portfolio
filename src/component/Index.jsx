import React from 'react';
import Moon from '../asset/moon..svg';
import Planet from '../asset/planet-saturn-svgrepo-com.svg';
import Rocket from '../asset/rocket-innovation-space-svgrepo-com.svg';
import Contact from './portfolio/Contact';
import { Link, Button } from 'react-scroll';
import Projects from './data/projects';
import Footer from './portfolio/Footer';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import { useTypewriter } from 'react-simple-typewriter';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import useTheme from '../hooks/useTheme';
import Menu from './data/menus';

const Index = () => {
  const { toggleTheme, theme } = useTheme();

  const [text] = useTypewriter({
    /* Config */
    words: [
      // 'I am an IT Specialist',
      'I am Full-Stack Web Developer',
      'I am Frontend Web Developer',
      'I am a Backend Developer',
      'Im a DevOps Engineer',
    ],
    loop: true,
    cursorStyle: '_',
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 800,
  });

  return (
    <div
    title='portfolio page'
      className={` dark:bg-gray-800 dark:text-gray-100 bg-gray-50/50 min-h-full`}
    >
      <header title='header section' className="w-full fixed top-0 py-5 bg-white dark:bg-gray-800  shadow-sm z-10">
        <nav title='navigation section 1' className="flex justify-between items-center sm:mx-5 md:mx-10 lg:max-w-6xl lg:mx-auto my-0 dark:bg-gray-800">
          <h2 title='username' className="text-2xl">
            {'<'}Harbiola{' />'}
          </h2>
          <div title={'theme area'}>
            {theme ? (
              <MdOutlineLightMode
                className="sm:text-2xl md:text-xl dark:text-gray-100"
                onClick={() => toggleTheme()}
                title='light theme'
              />
            ) : (
              <MdOutlineDarkMode
                className="sm:text-2xl md:text-xl text-gray-800 dark:text-gray-100"
                onClick={() => toggleTheme()}
                title='dark theme'
              />
            )}
          </div>
        </nav>
      </header>
      <section className="fixed bottom-5 w-full my-2 z-10">
        <div
          title='menu navigation'
          className={
            'sm:flex sm:space-x-12 sm:max-w-sm sm:w-fit md:w-fit md:max-w-6xl md:py-5 mx-auto navbar dark:text-gray-300 dark:bg-gray-900'
          }
        >
          {Menu.menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              ignoreCancelEvents={false}
              spyThrottle={500}
              className="sm:text-2xl md:text-xl cursor-pointer p-2"
              title={menu.text}
              activeStyle={theme ? darkStyle : lightStyle}
            >
              <menu.icon />
            </Link>
          ))}
        </div>
      </section>
      <main className="-z-10" title='main content'>
        <div
        title='home'
          name="home"
          className="relative lg:w-[65%] lg:mx-auto py-[5rem] p-5"
        >
          <img src={Planet} alt="planet" className="sm:w-[3.5rem] ml-auto" />
          <img src={Moon} alt="moon" className="left-5 sm:w-[3rem]" />
          <div className="flex items-center justify-center flex-col space-y-2">
            <h2 className="text-base">Hello, I'm</h2>
            <h1 className="sm:text-2xl md:text-4xl font-lobster">
              Abiola Fasanya
            </h1>
            <span className="text-red-500 pb-8 h-12 font-semibold" title='what i do'>{text}</span>

            <div className="flex my-5 space-x-4">
              <Button
                activeClass="active"
                className="py-3 px-7 bg-transparent dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-500 border text-black transition-all hover:text-gray-50 border-black hover:bg-black"
                type="submit"
                value="About me"
                to="aboutme"
                title='about me'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
              <button
              title='download cv'
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1rSp2b7m76BjLpc_JBvUrzWr_U8dGdvf-/view?usp=share_link'
                  )
                }
                className="py-3 px-7 bg-black rounded-sm hover:bg-black text-gray-50 dark:bg-gray-700 "
              >
                Download CV
              </button>
            </div>
          </div>
          <img src={Rocket} alt="rocket" className="mt-[2rem] sm:w-[4rem] mx-auto" />
        </div>
        <div
          name="aboutme"
          title='about me section'
          className="sm:text-center md:text-left mt-5 py-5 dark:bg-gray-700 dark:text-gray-100 bg-white"
        >
          <About />
        </div>
        <div
        title='skills section'
          name="skills"
          className="px-14 sm:text-center md:text-left dark:bg-gray-800 dark:text-gray-100 bg-white"
        >
          <h2 className="px-8 py-5 text-2xl font-semibold ml-2">Skills</h2>
          <Skills />
        </div>
        <div name="project" title='recent projects' className="py-5 dark:bg-gray-700">
          <h2 title='featured project' className="dark:text-gray-100 dar sm:text-center md:text-left px-24 text-2xl my-2 font-semibold">
            Featured Projects
          </h2>
          <div title='projects' className="max-w-6xl px-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project, id) => (
              <div
                key={id}
                className={`${project.color} p-5 transition-all ease-in-out delay-200`}
                title={project.title}
              >
                <img src={project.image} alt={project.title} />
                <div className="flex justify-between items-center">
                  <a href={project.link} className={`py-3 px-5 rounded-sm`} title='view demo'>
                    View Project
                  </a>
                  <a href={project?.github} className={` py-3 px-5 rounded-sm`} title='visit github'>
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div name="contact" title='contact section' className="pt-5">
          <h2 className="dark:text-gray-100 sm:text-center md:text-left px-24 text-2xl my-2 font-semibold ml-2">
            Contact
          </h2>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const lightStyle = {
  background: '#374151',
  color: '#fff',
  borderRadius: '25px',
};

const darkStyle = {
  background: '#374151',
  color: '#fff',
  borderRadius: '25px',
};

export default Index;

