import Container from './Container';
import React from 'react';
import projects from './data/projects';
import { motion } from 'framer-motion';

const Project = (props) => {
  return (
    <motion.div
      className="w-full bg-zinc-100"
      initial={{ x: 300, opacity: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Container className=" mx-auto sm:px-5 lg:py-[2rem] lg:px-[3.5rem] py-3">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {projects.map((project, i) => {
            return (
              <div className="">
                <motion.div
                  className="flex flex-col items-center justify-center"
                  key={i}
                  initial={{ opacity: 0 }}
                  transition={{ duration: i, delay: i }}
                  animate={{ opacity: 1 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-300 p-2 rounded-b-md">
                    <h3 className="text-lg font-bold text-orange-500 text-center">
                      {project.title}
                    </h3>
                    <p className="text-center">{project.description}</p>
                    <div className="flex  items-center space-x-8 my-2 justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 rounded py-2 px-5"
                      >
                        Visit
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-500 hover:bg-zinc-600 text-dark rounded py-2 px-5"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </motion.div>
  );
};

export default Project;
