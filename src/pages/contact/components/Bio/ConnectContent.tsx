import Social from "./Social";
import Contact from "./Contact";

const ConnectContent = () => {
  return (
    <section className="flex gap-4 flex-col">
      <Contact />
      <Social />
    </section>
  );
};

export default ConnectContent;
