import Title from "../../components/Title";
import { Element } from "react-scroll";
import AboutContent from "./components/AboutContent";
import ImgBox from "./components/ImgBox";

const About = () => {
  return (
    <Element name="about">
      <Title title="About Me" subTitle="Get to know me" />
      <div className="sm:mt-10 w-full sm:px-5 lg:mt-0 md:px-0 flex sm:flex-col lg:flex-row justify-between md:min-h-screen md:mb-20 items-center">
        <ImgBox />
        <AboutContent />
      </div>
    </Element>
  );
};

export default About;
