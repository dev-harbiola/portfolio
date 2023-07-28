import { Socials } from "../../data/socials";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { Element } from "react-scroll";
import Title from "../../components/Title";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    console.log(body);
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
    <Element name="contact" className="sm:px-5 lg:px-0 mt-40">
      <Title title="Contact Me" subTitle="Get in touch" />
      <div className="w-full min-h-screen py-14 flex items-center sm:px-5 md:px-0">
        <article className="flex sm:flex-col-reverse sm:gap-10 lg:gap-0 lg:flex-row justify-between w-full">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-montalt">Lets Connect</h2>
            <section className="flex gap-4 flex-col">
              <div className="text-zinc-200">
                <h5>habiolafasanya@gmail.com</h5>
                <h5>+2348102307473</h5>
              </div>
              <div className={"flex gap-x-2"}>
                {Socials.map((social) => (
                  <Link key={social.name} to={social.url} about={social.name}>
                    <social.icon
                      name={social.name}
                      className="text-zinc-200 hover:text-emerald-500"
                      size={24}
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-10 lg:mr-20">
            <h2 className="text-4xl font-montalt">Send me a message</h2>
            <div className="w-full max-w-[450px]">
              <form onSubmit={handleSubmit} ref={form}>
                <div className="w-full flex sm:flex-col md:flex-row justify-between items-center sm:gap-10 md:gap-5">
                  <TextField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    label="Name *"
                    ref={nameInput}
                    required
                  />
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@domain.com"
                    label="Email*"
                    ref={emailInput}
                    required
                  />
                </div>
                <div className="flex sm:flex-col md:flex-row items-center mt-10">
                  <TextArea
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Hey, Let's collaborate"
                    label="Message*"
                    ref={messageInput}
                    required
                  ></TextArea>
                </div>
                <div className="flex w-full mt-5">
                  <Button
                    type="submit"
                    className="flex items-center justify-center transition duration-200 w-full mt-5 py-3 px-7 rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
      <ToastContainer />
    </Element>
  );
};

const TextField = ({ ...props }) => {
  return (
    <div className="w-full bg-blend-normal">
      <label
        htmlFor={props.id}
        className="relative w-full group bg-blend-normal"
      >
        <input
          {...props}
          id={props.id}
          required
          ref={props.ref}
          className="py-3 px-5 w-full flex bg-transparent transition duration-200 border rounded-lg border-zinc-200 focus:border-emerald-500 bg-none focus:text-zinc-200 border-opacity-50 outline-none"
        />
        <span className="absolute input-text -top-3 left-5 bg-zinc-900 transition duration-200">
          {props.label}
        </span>
      </label>
    </div>
  );
};

const TextArea = ({ ...props }) => {
  return (
    <div className="flex w-full">
      <label htmlFor={props.id} className="relative w-full group">
        <textarea
          {...props}
          id={props.id}
          ref={props.ref}
          required
          className="text-area py-3 px-5 w-full flex bg-transparent transition duration-200 border rounded-lg border-zinc-200 focus:border-emerald-500 focus:text-zinc-200 border-opacity-50 outline-none"
        >
          {props.children}
        </textarea>
        <span className="absolute input-text -top-3 left-5 bg-zinc-900 px-1 transition duration-200">
          {props.label}
        </span>
      </label>
    </div>
  );
};

export default Contact;
