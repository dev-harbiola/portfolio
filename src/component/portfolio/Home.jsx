import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <motion.div
      className="w-full lg:h-[90vh] sm:h-auto bg-zinc-100"
      initial={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }}
      // exit={{opacity: 0, transition: {duration: 0.8, ease: "easeInOut"}}}
    >
      <Container className="container mx-auto sm:px-5 lg:mb-1 sm:mb-7 lg:py-[2rem] lg:px-[3.5rem] py-3">
        <div className="flex lg:flex-row  sm:flex-col-reverse lg:mt-[2.5rem] justify-center items-center sm:space-y-5 lg:space-x-5">
          <div className="">
            <h1 className="lg:text-6xl lg:my-[1.5rem] font-bold text-4xl mb-12 w-[75%]">
              Hello,
              <br /> I am Abiola Fasanya
            </h1>
            <p className="text-base font-medium text-[18px] sm:w-full lg:w-3/4">
              I am a web developer and i can build nice and scalable web
              applications with a variety of technologies. I have a passion for
              building web applications and i am always looking to learn new
              technologies.
            </p>
            <div className="flex space-x-8 mt-12">
              <Link to="/about">
                <button className="w-[150px] rounded-full py-2 px-5 text-gray-200 bg-black hover:bg-gray-900">
                  More about me
                </button>
              </Link>
              <Link to="/contact">
                <button className="sm:hidden w-[150px]  md:inline rounded-full py-2 px-5 text-black bg-orange-500 hover:bg-orange-600">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-5">
            <img
              src="https://github.com/fastbeetech/fastbeetech/raw/main/abiola.jpg"
              alt=""
              className="rounded-full shadow-sm w-[100%] "
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;
