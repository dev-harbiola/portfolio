import Form from "./form/Form";

const SendMessage = () => {
  return (
    <div className="flex flex-col gap-10 lg:mr-20">
      <h2 className="text-4xl font-montalt">Send me a message</h2>
      <div className="w-full max-w-[450px]">
        <Form />
      </div>
    </div>
  );
};

export default SendMessage;
