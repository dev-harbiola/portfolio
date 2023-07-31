import { sendForm } from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import TextField from "./Input";
import TextArea from "./textArea";
import Button from "../../../../components/button/Button";

const Form = () => {
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
    sendForm(
      import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
      import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
      myForm,
      import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
    ).then(
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
    <div className="w-full max-w-[450px]">
      <form onSubmit={handleSubmit} ref={form}>
        <div className="w-full flex sm:flex-col md:flex-row justify-between items-center sm:gap-10 md:gap-5">
          <TextField
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            label="Name*"
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
  );
};

export default Form;
