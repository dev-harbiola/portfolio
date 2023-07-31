import { Element } from "react-scroll";
import Title from "../../components/Title";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LetConnect from "./components/LetConnect";
import SendMessage from "./components/SendMessage";

const Contact = () => {
  return (
    <Element name="contact" className="sm:px-5 lg:px-0 mt-40">
      <Title title="Contact Me" subTitle="Get in touch" />
      <div className="w-full min-h-screen py-14 flex items-center sm:px-5 md:px-0">
        <article className="flex sm:flex-col-reverse sm:gap-10 lg:gap-0 lg:flex-row justify-between w-full">
          <LetConnect />
          <SendMessage />
        </article>
      </div>
      <ToastContainer />
    </Element>
  );
};

export default Contact;
