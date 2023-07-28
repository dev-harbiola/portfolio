import { useState } from "react";
import Title from "../../components/Title";
import { Box } from "@mui/material";
import { Socials, about, cv_url } from "../../data/socials";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Element } from "react-scroll";
import MyPics from '../../assets/Abiola-hd.jpg'

const About = () => {
  const [step, setStep] = useState(1);
  const increaseStep = () => {
    if (step <= about.length) {
      setStep((step) => step + 1);
    }
  };
  const reduceStep = () => {
    if (step !== 1) {
      setStep((step) => step - 1);
    }
  };
  return (
    <Element name="about">
      <Title title="About Me" subTitle="Get to know me" />
      <div className="sm:mt-40 w-full sm:px-5 lg:mt-0 md:px-0 flex sm:flex-col lg:flex-row justify-between min-h-screen sm:mb-40 items-center ">
        <div className="hidden md:flex w-[350px] box-border overflow-hidden rounded-lg">
          <img src={MyPics} alt="abiola fasanya" />
        </div>
        <div className="w-full">
          <Box className="flex flex-col gap-4 mt-10 max-w-2xl ml-auto">
            <div className="text-zin-200 -leading-5">
              {about.slice(0, step).map((info) => (
                <p
                  key={info.id}
                  className="font-montserrat"
                  dangerouslySetInnerHTML={{ __html: info.content }}
                />
              ))}

              <div className={"mt-4 flex items-center justify-between"}>
                <div className={"flex gap-x-2"}>
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
                <div>
                  <Button className="py-2 px-5" onClick={() => reduceStep()}>
                    <MdNavigateBefore size={24} className="text-emerald-500" />
                  </Button>
                  <Button className="py-2 px-5" onClick={() => increaseStep()}>
                    <MdNavigateNext size={24} className="text-emerald-500" />
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => window.open(cv_url)}
                className="py-2 px-7 mt-5  rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
              >
                Download CV
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </Element>
  );
};

export default About;
