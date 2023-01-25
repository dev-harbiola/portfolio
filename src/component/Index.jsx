import React from 'react';
// import { Link } from 'react-router-dom';
import Moon from '../moon..svg';
import Planet from '../planet-saturn-svgrepo-com.svg';
import Rocket from '../rocket-innovation-space-svgrepo-com.svg';
import Contact from './portfolio/Contact';
import { Link } from 'react-scroll';
import Projects from './portfolio/data/projects';

const menus = [
  { id: 1, to: 'home', text: 'Home' },
  { id: 2, to: 'project', text: 'Project' },
  { id: 3, to: 'contact', text: 'Contact' },
  { id: 4, to: 'aboutme', text: 'aboutme' },
  { id: 5, to: 'resume', text: 'Resume' },
];

const Index = () => {
  function handleSetInactive(e) {
    console.log(e);
  }
  function handleSetActive(e) {
    console.log(e);
  }
  return (
    <div className="bg-gray-50/50 min-h-full font-montserrat">
      <header className="fixed top-0 w-full z-10">
        <nav className="navbar z-10">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
              className="md:text-xl cursor-pointer"
            >
              {menu.text}
            </Link>
          ))}
        </nav>
      </header>
      <main className="">
        <div name="home" className="relative mt-[5rem] p-5">
          <img src={Planet} alt="" className="sm:w-[3.5rem] ml-auto" />
          <img src={Moon} alt="" className="left-5 sm:w-[3rem]" />
          <h2 className="mt-[2rem] sm:p-3 sm:text-center text-2xl">
            Abiola is a highly competent full-stack web developer with a lot of
            versatility, flexibility, and a passion for technology and the
            ability to make ideas come true.
          </h2>
          <img src={Rocket} alt="" className="mt-[2rem] sm:w-[4rem] mx-auto" />
        </div>
        <div name="project" className="mt-5">
          <h2 className="text-2xl my-2 font-semibold ml-2">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project, id) => (
              <div ket={id} className={`${project.color} p-5`}>
                <img src={project.image} alt={project.title} />
                <div className="flex justify-between items-center">
                  <a href={project.link} className={`py-3 px-5 rounded-sm`}>View Project</a>
                  <a href={project?.github} className={` py-3 px-5 rounded-sm`}>Github</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div name="aboutme" className="mt-5"></div>
        <div name="contact" className="mt-5">
          <h2 className="text-2xl my-2 font-semibold ml-2">Contact</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
