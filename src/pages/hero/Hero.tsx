import Button from "../../components/button/Button";
import { Socials } from "../../data/socials";
import { Link } from "react-router-dom";
import { Element, Link as ScrollTo } from "react-scroll";
import MyPics from '../../assets/Abiola-hd.jpg';

const Hero = () => {
  return (
    <Element name="home">
      <div className="min-h-screen w-full flex sm:flex-col-reverse sm:gap-2 md:gap-0 md:flex-row items-center justify-center md:space-x-10 lg:space-x-20 relative">
        <div className="flex flex-col sm:items-center md:items-start">
          <div className="w-full sm:text-center md:text-left">
            <h5 className="text-xl">Hello, I'm</h5>
            <h2 className="sm:text-3xl md:text-4xl lg:text-6xl font-semibold font-montalt">
              Abiola Fasanya
            </h2>
          </div>
          <h4 className="text-xl text-emerald-500">Full-stack Software Developer</h4>
          <ScrollTo to="contact">
            <Button
              id="contact"
              className="w-fit mt-5 py-2 px-7 rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
            >
              Let's Talk
            </Button>
          </ScrollTo>
        </div>
        <div className="rounded-full border-2 box-border w-full max-w-[250px] max-h-[250px] overflow-hidden">
          <img
            src={MyPics}
            alt="abiola fasanya"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute sm:right-5 lg:right-0 flex flex-col items-center gap-2">
          <div className="h-24 w-1 bg-emerald-500"></div>
          <div className="flex gap-2 items-center flex-col">
            {Socials.map((social) => (
              <Link key={social.name} to={social.url} about={social.name}>
                <social.icon
                  name={social.name}
                  className="hover:text-emerald-500"
                  size={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
