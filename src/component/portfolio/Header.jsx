import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Container from "./Container";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ showSidebar }) => {
  function toggleSidebar() {
    setActive(!active);
    console.log("toggleSidebar");
    showSidebar(active);
  }
  const [active, setActive] = useState(true);
  return (
    <div className="">
      <Container className="container mx-auto flex items-center lg:justify-between sm:justify-center py-2 px-5">
        <div className="flex items-center sm:justify-between">
          <HiMenuAlt1
            onClick={toggleSidebar}
            className={`mx-2 text-white text-2xl`}
          />
          <h1 className="text-white text-2xl">Abiola Fasanya</h1>
        </div>
        
        <div className="hidden sm:hidden lg:flex text-xl justify-between">
          {/* <BrowserRouter> */}
            <Link to="/" className="mx-4 text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="mx-4 text-gray-300 hover:text-white">About</Link>
            <Link to="/contact" className="mx-4 text-gray-300 hover:text-white">Contact</Link>
            <Link to="/projects" className="mx-4 text-gray-300 hover:text-white">Project</Link>
          {/* </BrowserRouter> */}
        </div>
        <div className="sm:hidden lg:flex">
          <a href="https://drive.google.com/file/d/1iQd7itDgFfLY0NXi35mfDV-5ZfiHeQmD/view?usp=sharing">
            <button className="inline-flex rounded-full py-2 px-7 bg-orange-500 hover:bg-orange-600">
              <FaDownload />
              <span className="ml-2">Download CV</span>
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
