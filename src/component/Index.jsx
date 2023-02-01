import React from 'react';
import Moon from '../asset/moon..svg';
import Planet from '../asset/planet-saturn-svgrepo-com.svg';
import Rocket from '../asset/rocket-innovation-space-svgrepo-com.svg';
import Contact from './portfolio/Contact';
import { Link } from 'react-scroll';
import Projects from './data/projects';
import Footer from './portfolio/Footer';
import About from './portfolio/About';
import Skills from './portfolio/Skills';

const menus = [
  { id: 1, to: 'home', text: 'Home' },
  { id: 2, to: 'aboutme', text: 'About' },
  { id: 3, to: 'project', text: 'Project' },
  { id: 4, to: 'contact', text: 'Contact' },
  {
    id: 5,
    to: 'https://drive.google.com/file/d/1rSp2b7m76BjLpc_JBvUrzWr_U8dGdvf-/view?usp=share_link',
    text: 'Resume',
  },
];

const Index = () => {

  //   function handleSetInactive(e) {
  //     console.log(e);
  //   }
  //   function handleSetActive(e) {
  //     console.log(e);
  //   }
  return (
    <div
      className={` dark:bg-gray-800 dark:text-gray-100 bg-gray-50/50 min-h-full font-montserrat`}
    >
      <header className="dark:bg-gray-800 fixed top-0 w-full z-10">
        <nav className="navbar z-10 dark:text-gray-300 dark:bg-gray-900">
          {menus.map((menu, index) => (
            <div key={index}>
              {menu.id !== 5 && (
                <Link
                  key={index}
                  to={menu.to}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  //   onSetActive={handleSetActive}
                  //   onSetInactive={handleSetInactive}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className="sm:text-[14px] md:text-xl cursor-pointer"
                >
                  {menu.text}
                </Link>
              )}
              {menu.id === 5 && (
                <a
                  href={menu.to}
                  className="ssm:text-[14px] md:text-xl cursor-pointe"
                  target={'_top'}
                >
                  {menu.text}
                </a>
              )}
            </div>
          ))}
        </nav>
      </header>
      <main className="">
        <div
          name="home"
          className="relative lg:w-[65%] lg:mx-auto mt-[5rem] p-5"
        >
          <img src={Planet} alt="" className="sm:w-[3.5rem] ml-auto" />
          <img src={Moon} alt="" className="left-5 sm:w-[3rem]" />
          <h2 className="mt-[2rem] sm:p-3 sm:text-center sm:text-2xl lg:text-3xl lg:font-semibold">
            Abiola is a highly competent full-stack web developer with a lot of
            versatility, flexibility, and a passion for technology and the
            ability to make ideas come true.
          </h2>
          <img src={Rocket} alt="" className="mt-[2rem] sm:w-[4rem] mx-auto" />
        </div>
        <div
          name="aboutme"
          className="sm:text-center md:text-left mt-5 py-5 dark:bg-gray-700 dark:text-gray-100 bg-white"
        >
          <h2 className="px-14 py-5 text-2xl font-semibold ml-2">About me</h2>
          <About />
        </div>
        <div
          name="skills"
          className="px-14 sm:text-center md:text-left dark:bg-gray-800 dark:text-gray-100 bg-white"
        >
          <h2 className="px-14 py-5 text-2xl font-semibold ml-2">Skills</h2>
          <Skills />
        </div>
        <div name="project" className="mt-5 py-2 dark:bg-gray-700">
          <h2 className="dark:text-gray-100 dar sm:text-center md:text-left px-14 text-2xl my-2 font-semibold ml-2">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project, id) => (
              <div
                key={id}
                className={`${project.color} p-5 transition-all ease-in-out delay-200`}
              >
                <img src={project.image} alt={project.title} />
                <div className="flex justify-between items-center">
                  <a href={project.link} className={`py-3 px-5 rounded-sm`}>
                    View Project
                  </a>
                  <a href={project?.github} className={` py-3 px-5 rounded-sm`}>
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div name="contact" className="pt-5">
          <h2 className="dark:text-gray-100 sm:text-center md:text-left px-14 text-2xl my-2 font-semibold ml-2">
            Contact
          </h2>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
