import { useState } from "react";
import { about, cv_url } from "../../../data/socials";
import Button from "../../../components/button/Button";
import { motion } from "framer-motion";
import ActionArea from "./ActionArea";
import Content from "./Content";

const containerVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutContent = () => {
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
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 mt-10 max-w-2xl ml-auto"
    >
      <section className="text-zin-200 -leading-5">
        <Content step={step} />
        <ActionArea increaseStep={increaseStep} reduceStep={reduceStep} />
        <Button
          onClick={() => window.open(cv_url)}
          className="py-2 px-7 mt-5  rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
        >
          Download CV
        </Button>
      </section>
    </motion.div>
  );
};

export default AboutContent;
