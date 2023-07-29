import Title from "../../components/Title";
import { Element } from "react-scroll";
import MyPics from "../../assets/Abiola-hd.jpg";
import AboutContent from "./components/AboutContent";

const About = () => {
  return (
    <Element name="about">
      <Title title="About Me" subTitle="Get to know me" />
      <div className="sm:mt-10 w-full sm:px-5 lg:mt-0 md:px-0 flex sm:flex-col lg:flex-row justify-between md:min-h-screen md:mb-20 items-center">
        <div className="hidden md:flex w-[350px] box-border overflow-hidden rounded-lg">
          <img src={MyPics} alt="abiola fasanya" />
        </div>
        <AboutContent />
      </div>
    </Element>
  );
};

export default About;
