import { Element } from "react-scroll";
import Title from "../../components/Title";
import Marquee from "react-fast-marquee";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";

const containerVariant = {
  hidden: { transition: {} },
  visible: {
    transition: { staggarChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <Element name="services" className="sm:px-5 lg:px-0">
      <Title title="My Services" subTitle="What I can offer" />
      <motion.div
        className="min-h-screen w-full flex items-center justify-center flex-col gap-24"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        variants={containerVariant}
      >
        <ServiceCard />
        <Marquee pauseOnClick pauseOnHover speed={10}>
          <Skills />
        </Marquee>
      </motion.div>
    </Element>
  );
};

export default Services;
