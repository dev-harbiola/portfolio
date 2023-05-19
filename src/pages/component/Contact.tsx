import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Link } from "@mui/material";
import Title from "../../components/Title";
import useApp from "../../hooks/useApp";
import styles from "./styles.module.scss";
import contactUs from "../../assets/contactUs.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const { dark } = useApp();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement & {
      email: { value: string };
      name: { value: string };
      message: { value: string };
    };
    const body = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      message: messageInput.current?.value,
    };
    if (body.name === "" || body.email === "" || body.message === "") {
      toast.error("Please fill in all fields");
      return;
    }

    const myForm = form?.current ?? "";
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        myForm,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          target.name.value = "";
          target.email.value = "";
          target.message.value = "";
          toast.success("Your message was successfully sent.");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <Element
      name="contact"
      className={`${styles.contact} ${dark ? styles.dark : styles.light}`}
    >
      <Title title="Contact Me" subTitle="Get in touch" />
      <div className={styles.contact_container}>
        <Box className={styles.contact_box}>
          <h3>Get in Touch</h3>
          <p>
            I appreciate your time in reviewing my profile. I am confident that
            my skills and experience would be a valuable asset to your team. I
            would be happy to discuss any potential opportunities with you at
            your convenience. If you do not have any openings at this time,
            please keep my resume on file for future consideration.
          </p>
          <img src={contactUs} alt="" />
        </Box>
        <Box className={styles.contact_form}>
          <div>
            <div className={styles.contact_biz}>
              <h3 className={styles.contact_biz_h3}>
                Have an idea or question?
              </h3>
              <p className={styles.contact_biz_p}>
                Would you mind telling me about it?
              </p>
              <div className={styles.contact_biz_links}>
                <Link
                  href="mailto:harbiola78@gmail.com?subject=Let's Discuss Your Needs"
                  variant="button"
                  color="error"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact_biz_link_email}
                >
                  Email
                </Link>
                <Link
                  variant="button"
                  color="error"
                  href="
                https://www.linkedin.com/in/abiola-fasanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contact_biz_link_linkedIn}
                >
                  LinkedIn
                </Link>
              </div>

              <div className={styles.contact_form}>
                <form ref={form} onSubmit={handleForm}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="name"
                      name="name"
                      ref={nameInput}
                      type="text"
                      required
                      placeholder="your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="email"
                      type="email"
                      name="email"
                      ref={emailInput}
                      placeholder="you@mail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      ref={messageInput}
                      required
                      placeholder="Drop a message"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <Button className={styles.form_btn} type="submit">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <ToastContainer />
    </Element>
  );
};

export default Contact;

// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import Image from '../../asset/Get in touch-cuate.svg'

// const Contact = (props) => {
//   const form = useRef();
//   const [msg, setMsg] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   // console.log(process.env)
//   function submitForm(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAIL_SERVICE_ID,
//         process.env.REACT_APP_EMAIL_TEMPLATE_ID,
//         form.current,
//         process.env.REACT_APP_EMAIL_PUBLIC_KEY
//       )
//       .then((result) => {
//         setSuccess(true);
//         setMsg('Message sent successfully');
//         setTimeout(() => {
//           e.target.name.value = '';
//           e.target.email.value = '';
//           e.target.message.value = '';
//           setMsg('');
//           setSuccess(false);
//         }, 5000);

//         console.log(result.text);
//       })
//       .catch((error) => {
//         setError(true);
//         msg('Message did not send, try agian');
//         setTimeout(() => {
//           e.target.name.value = '';
//           e.target.email.value = '';
//           e.target.message.value = '';
//           msg('');
//           setError(false);
//         }, 5000);
//         setError(true);
//         console.log(error.text);
//       });
//   }
//   return (
//     <motion.div
//       className="w-full"
//       initial={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
//       animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
//     >
//       {/* contact page */}
//       <div className="w-full max-w-6xl mx-auto">
//         <div className="dark:bg-gray-400 flex sm:flex-col md:flex-row lg:justify-between">
//           <img
//             src={Image}
//             alt="contact"
//             className="w-1/2 sm:mx-auto h-auto"
//           />

// <div className="dark:bg-gray-800 w-full h-auto sm:pt-[2rem] md:pt-[6rem]  bg-gray-300 md:p-2">
//   <h3 className="text-center text-2xl mb-2">
//     Have an idea or question?
//   </h3>
//   <p className="text-center text-base mb-8">
//     Would you mind telling me about it?
//   </p>
//   <div className="flex  items-center space-x-8 my-2 justify-center">
//     <a
//       href="mailto:harbiola78@gmail.com"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-black hover:bg-black/80 text-white rounded py-2 px-5"
//     >
//       Email
//     </a>
//     <a
//       href="
//       https://www.linkedin.com/in/abiola-fasanya"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-gray-500 hover:bg-gray-600 text-gray-50 rounded py-2 px-5"
//     >
//       LinkedIn
//     </a>
//   </div>

//   <div className="flex items-center md:space-x-8 p-5 justify-center">
//     <form ref={form} onSubmit={submitForm}>
//       {success && (
//         <div className="bg-green-200 border-green-300 my-3 rounded text-green-800 py-2 px-5">
//           {msg}
//         </div>
//       )}
//       {error && (
//         <div className="bg-red-300 border-red-300 my-3 rounded text-red-800 py-2 px-5">
//           {msg}
//         </div>
//       )}
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//           id="name"
//           name="name"
//           type="text"
//           required
//           placeholder="your name"
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//           id="email"
//           type="email"
//           name="email"
//           placeholder="you@mail.com"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message</label>
//         <textarea
//           name="message"
//           id='message'
//           required
//           placeholder="Drop a message"
//           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//         ></textarea>
//       </div>
//       <div>
//         <button
//           className="bg-black hover:bg-black/80 text-white rounded py-2 px-5"
//           type="submit"
//         >
//           Send
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;
