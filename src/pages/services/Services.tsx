import { Element } from "react-scroll";
import Title from "../../components/Title";
import Marquee from "react-fast-marquee";
import Skills from "./skill/Skills";
import { services } from "./data/service";
import { motion } from "framer-motion";

type ServiceType = (typeof services)[0];
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
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariant}
      >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Card key={service.id} {...service} />
          ))}
        </section>
        <Marquee>
          <Skills />
        </Marquee>
      </motion.div>
    </Element>
  );
};

const serviceVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Card = (service: ServiceType) => {
  return (
    <motion.article
      variants={serviceVariant}
      className="mt-10 w-full border border-zinc-700 hover:border-zinc-500 transition duration-500 ease-in-out rounded-lg p-5 flex items-center justify-center text-center flex-col gap-3"
    >
      <img src={service.image} alt="" className="w-[64px]" />
      <h3 className="capitalize">{service.name}</h3>
      <p className="capitalize">{service.description}</p>
    </motion.article>
  );
};
export default Services;
