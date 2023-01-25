import React from 'react';
// import { Link } from 'react-router-dom';
import Moon from '../moon..svg';
import Planet from '../planet-saturn-svgrepo-com.svg';
import Rocket from '../rocket-innovation-space-svgrepo-com.svg';
import Contact from './portfolio/Contact';

const Index = () => {
  return (
    <div className="bg-gray-50/50 min-h-full font-montserrat">
      <header className="fixed top-0 w-full">
        <nav className="navbar">
          <a href="#home" className="md:text-xl">
            Home
          </a>
          <a href="#aboutme" className="md:text-xl">
            About me
          </a>
          <a href="#contact" className="md:text-xl">
            Contact
          </a>
          <a href="#resume" className="md:text-xl">
            Resume
          </a>
        </nav>
      </header>
      <main className="">
        <div id="home" className="relative mt-[5rem] p-5">
          <img src={Planet} alt="" className="sm:w-[3.5rem] ml-auto" />
          <img src={Moon} alt="" className="left-5 sm:w-[3rem]" />
          <h2 className="mt-[2rem] sm:p-3 sm:text-center text-2xl">
            Abiola is a highly competent full-stack web developer with a lot of
            versatility, flexibility, and a passion for technology and the
            ability to make ideas come true.
          </h2>
          <img src={Rocket} alt="" className="mt-[2rem] sm:w-[4rem] mx-auto" />
        </div>
        <div id="aboutme" className="mt-5">
          <h2 className="text-2xl my-2 font-semibold ml-2">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-100 hover:bg-blue-300 p-3 min-h-[50vh]">
              Hello
            </div>
            <div className="bg-green-100 hover:bg-green-300 min-h-[50vh]"></div>
            <div className="bg-purple-100 hover:bg-purple-300 min-h-[50vh]"></div>
            <div className="bg-yellow-100 hover:bg-yellow-300 min-h-[50vh]"></div>
            <div className="bg-orange-100 hover:bg-orange-300 min-h-[50vh]"></div>
            <div className="bg-gray-100 hover:bg-gray-300 min-h-[50vh]"></div>
          </div>
        </div>
        <div id="contact" className="mt-5">
          <h2 className="text-2xl my-2 font-semibold ml-2">Contact</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
