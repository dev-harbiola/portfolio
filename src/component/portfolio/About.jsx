import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../me.png';

const About = (props) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >cover
      <div className="my-3 flex sm:flex-col md:justify-between md:w-4/5 md:mx-auto md:flex-row items-center">
        <div className="flex flex-col">
          <img
            src={Image}
            alt="my pics"
            className="object-cover obje  border-4 h-72 w-72 rounded-full border-spacing-1 shrink-0 mx-auto"
          />
          <span className="my-2 text-center font-semibold text-lg">
            Abiola Fasanya
          </span>
        </div>
        <div className="md:w-[65%]">
          <p className="sm:text-center sm:p-2 md:text-justify">
            It is my pleasure to introduce myself as Abiola Fasanya, a Nigerian
            from Lagos. It has been three years since I have worked in the field
            of web development. Designing and developing user interfaces,
            testing, debugging and maintaining web applications are some of the
            things that I do. Working well in a team and delivering a product
            that is reliable and easy to use is one of the skills you need to be
            successful in this role.
          </p>
          <motion.div className='sm:mx-auto md:mx-0 sm:w-1/2 md:w-auto mt-4 '
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <a
              href="https://drive.google.com/file/d/1rSp2b7m76BjLpc_JBvUrzWr_U8dGdvf-/view?usp=share_link"
              target={'_top'}
              className="md:inline-block py-3 px-5 bg-black hover:bg-black/80 rounded-full text-white sm:text-center"
            >
              View my resume
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
