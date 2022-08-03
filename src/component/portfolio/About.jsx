import React from "react";
import Container from "./Container";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const About = (props) => {
  return (
    <motion.div  className="w-full bg-zinc-100"
    // animate={{transition: {duration: 0.5}}}
  
    initial={{opacity: 0, transition: {duration: 0.8, ease: "easeInOut"}}}
    animate={{opacity: 1, transition: {duration: 0.8, ease: "easeInOut"}}}
    // exit={{opacity: 0, transition: {duration: 0.8, ease: "easeInOut"}}}
    >
      <Container className="lg:h-[60vh] sm:h-auto container my-10 sm:px-5 lg:px-14 py-3">
        <div className="my-3 space-y-5">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="">
            I am Abiola Fasanya, from Lagos, Nigeria. I have 3 years of
            experience in web development. I design and develop user
            interfaces, testing, debugging and maintaining web applications.
            Proven ability to work with a team to deliver a product that is
            intended to be useful and easy to use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center">
          <div className="my-3 space-y-5">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <p>
              <span>Lagos</span>
              <br />
              <span>Nigeria</span>
              <br />
              <span>+234 8102307473</span>
              <br />
              <span>harbiola78@gmail.com</span>
              <br />
            </p>
          </div>

          <div className="mt-7">
            <a href="https://drive.google.com/file/d/1iQd7itDgFfLY0NXi35mfDV-5ZfiHeQmD/view?usp=sharing">
              <button className="inline-flex rounded-full py-2 px-7 bg-orange-500 hover:bg-orange-600">
                <FaDownload />
                <span className="ml-2">Download CV</span>
              </button>
            </a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
