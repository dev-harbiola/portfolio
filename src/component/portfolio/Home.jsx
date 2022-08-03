import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const Home = (props) => {
  return (
    <motion.div className="w-full lg:h-[90vh] sm:h-auto bg-zinc-100"
    initial={{opacity: 0, transition: {duration: 0.8, ease: "easeInOut"}}} 
    animate={{opacity: 1, transition: {duration: 0.8, ease: "easeInOut"}}}
    // exit={{opacity: 0, transition: {duration: 0.8, ease: "easeInOut"}}}
    >
      <Container className="container mx-auto sm:px-5 lg:mb-1 sm:mb-7 lg:py-[2rem] lg:px-[3.5rem] py-3">
      <div className="flex lg:flex-row  sm:flex-col-reverse lg:mt-[2.5rem] justify-center items-center sm:space-y-5 lg:space-x-5">
          <div className="">
            <h1 className="lg:text-6xl lg:my-[1.5rem] font-bold text-4xl mb-12 w-[75%]">
              Hello,
              <br /> I am Abiola Fasanya
            </h1>
            <p className="text-base font-medium text-[18px]">
              I am a web developer and i can build nice and scalable web
              applications with a variety of technologies. I have a passion for
              building web applications and i am always looking to learn new
              technologies.
            </p>
            <button className="mt-12 rounded-full py-2 px-5 bg-orange-500 hover:bg-orange-600">
              More about me
            </button>
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
