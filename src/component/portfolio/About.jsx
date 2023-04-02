import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../asset/me.png';

const About = (props) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      // animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="area">
        <div className="flex flex-col">
          <img
            src={Image}
            alt="my pics"
            className="object-cover shadow-sm h-72 w-72 rounded-full border-spacing-1 shrink-0 mx-auto"
          />
          <span className="my-2 text-center font-semibold text-lg dark:text-gray-100">
            Abiola Fasanya
          </span>
        </div>
        <div className="md:w-[65%]">
          <div className="sm:text-center text-xl sm:p-2 md:p-px md:text-justify">
            <p className="my-4">
              Hello, and welcome to my portfolio! My name is Abiola Fasanya and
              I'm a full-stack developer with a passion for creating beautiful
              and functional web applications.
            </p>
            <p className="my-4">
              With expertise in the MERN (MongoDB, Express, React, Node.js)
              stack, Next.js, and Laravel, I have the skills and experience
              necessary to build high-quality web applications that meet the
              unique needs of my clients.
            </p>
            <p className="my-4">
              My approach to development is centered around collaboration and
              communication, working closely with clients to understand their
              vision and create a solution that exceeds their expectations. I
              believe that every project deserves a thoughtful and creative
              approach, and I strive to deliver results that are both functional
              and visually appealing.
            </p>
            <p className="my-4">
              Whether you're looking to build a custom e-commerce platform, a
              content management system, or a complex web application, I have
              the expertise and tools to get the job done right. So let's work
              together to bring your ideas to life and create something truly
              amazing!
            </p>
          </div>
          <div className="sm:mx-auto md:mx-0 sm:w-1/2 md:w-auto mt-4">
            <a
              href="https://drive.google.com/file/d/1rSp2b7m76BjLpc_JBvUrzWr_U8dGdvf-/view?usp=share_link"
              target={'_top'}
              className="md:inline-block py-3 px-5 dark:bg-gray-900 bg-black hover:bg-black/80 rounded-sm dark:text-gray-100 text-white sm:text-center"
            >
              View my resume
            </a>
          </div>
        </div>
      </div>
      <section className="">
        <h2 className="px-24 py-5 text-2xl font-semibold ml-2">Experience</h2>
        <div className="timeline-area">
          <div className="timeline-card text-left">
            <h2 className="text-lg font-semibold">Full-Stack Developer</h2>
            <h3 className="text-md font-medium">Fasbeetech</h3>
            <h4>2021 - 2022</h4>
          </div>
          <div className="timeline-card text-left">
            <h2 className="text-lg font-semibold">Backend Developer (Tutor)</h2>
            <h3 className="text-md font-medium">Zuri (Internship)</h3>
            <h4>May 2022 - Aug 2022</h4>
          </div>
          <div className="timeline-card text-left">
            <h2 className="text-lg font-semibold">Backend Developer</h2>
            <h3 className="text-md font-medium">KodeCamp (Internship) </h3>
            <h4>2021 - 2022</h4>
          </div>
          <div className="timeline-card text-left">
            <h2 className="text-lg font-semibold">Frontend Developer</h2>
            <h3 className="text-md font-medium">Globatech Institute</h3>
            <h4>2019 - 2020</h4>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
