import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Image from '../../asset/Get in touch-cuate.svg'

const Contact = (props) => {
  const form = useRef();
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // console.log(process.env)
  function submitForm(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then((result) => {
        setSuccess(true);
        setMsg('Message sent successfully');
        setTimeout(() => {
          e.target.name.value = '';
          e.target.email.value = '';
          e.target.message.value = '';
          setMsg('');
          setSuccess(false);
        }, 5000);

        console.log(result.text);
      })
      .catch((error) => {
        setError(true);
        msg('Message did not send, try agian');
        setTimeout(() => {
          e.target.name.value = '';
          e.target.email.value = '';
          e.target.message.value = '';
          msg('');
          setError(false);
        }, 5000);
        setError(true);
        console.log(error.text);
      });
  }
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* contact page */}
      <div className="w-full">
        <div className="dark:bg-gray-400 flex sm:flex-col md:flex-row lg:justify-between">
          <img
            src={Image}
            alt="contact"
            className="w-1/2 sm:mx-auto h-auto"
          />

          <div className="dark:bg-gray-800 w-full h-auto sm:pt-[2rem] md:pt-[6rem]  bg-gray-300 md:p-2">
            <h3 className="text-center text-2xl mb-2">
              Have an idea or question?
            </h3>
            <p className="text-center text-base mb-8">
              Would you mind telling me about it?
            </p>
            <div className="flex  items-center space-x-8 my-2 justify-center">
              <a
                href="mailto:harbiola78@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-black/80 text-white rounded py-2 px-5"
              >
                Email
              </a>
              <a
                href="
                https://www.linkedin.com/in/abiola-fasanya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-500 hover:bg-zinc-600 text-dark rounded py-2 px-5"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center md:space-x-8 p-5 justify-center">
              <form ref={form} onSubmit={submitForm}>
                {success && (
                  <div className="bg-green-200 border-green-300 my-3 rounded text-green-800 py-2 px-5">
                    {msg}
                  </div>
                )}
                {error && (
                  <div className="bg-red-300 border-red-300 my-3 rounded text-red-800 py-2 px-5">
                    {msg}
                  </div>
                )}
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Drop a message"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-black hover:bg-black/80 text-white rounded py-2 px-5"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
