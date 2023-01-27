import React from 'react';
import socials from '../data/social';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-black py-5 px-5 ">
      <div className="text-zinc-100 lg:w-3/4 lg:mx-auto text-center py-3">
        <text className="text-2xl underline">Quote</text>
        <p>
          “If you are working on something that you really care about, you don’t
          have to be pushed. The vision pulls you.”
        </p>
        <div className="italic"> - Steve Jobs - </div>
      </div>
      <div className="bg-gray-200 h-px"></div>
      <div className="flex justify-between items-center w-full lg:px-5 text-white">
        <p className="sm:text-[14px] md:text-md text-white md:py-2">
          All right reserved - {new Date().getFullYear()}
        </p>
        <div className="flex sm:space-x-2 md:space-x-3 items-center">
          {socials.map((social, index) => (
            <div key={index} className="">
              <button
                onClick={() => window.open(social.url)}
                className="flex my-4 text-zinc-400 hover:text-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="md:text-2xl" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
