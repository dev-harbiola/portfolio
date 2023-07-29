import SocialInfo from "./components/SocialInfo";
import { Element } from "react-scroll";
import ImageBox from "./components/ImageBox";
import BriefIntro from "./components/BriefIntro";

const Hero = () => {
  return (
    <Element name="home">
      <div className="min-h-screen w-full flex sm:flex-col-reverse sm:gap-2 md:gap-0 md:flex-row items-center justify-center md:space-x-10 lg:space-x-20 relative">
        <BriefIntro />
        <ImageBox />
        <SocialInfo />
      </div>
    </Element>
  );
};

export default Hero;
