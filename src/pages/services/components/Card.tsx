import { services } from "../data/service";
import { motion } from "framer-motion";

type ServiceType = (typeof services)[0];
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
      <h3 className="font-montalt text-2xl capitalize">{service.name}</h3>
      <p className="capitalize">{service.description}</p>
    </motion.article>
  );
};

export default Card;
