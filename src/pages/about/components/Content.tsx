import { about } from "../../../data/socials";
import { motion } from "framer-motion";

const Content = ({ step }: { step: number }) => {
  return (
    <div>
      {about.slice(0, step).map((info) => (
        <motion.p
          key={info.id}
          className="font-montserrat transistion duration-500 ease-in-out"
          dangerouslySetInnerHTML={{ __html: info.content }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        />
      ))}
    </div>
  );
};

export default Content;
