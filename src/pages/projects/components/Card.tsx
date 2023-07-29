import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { Link } from "react-router-dom";


const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type ProjectType = (typeof projects)[0];

const Card = (project: ProjectType) => {
  return (
    <motion.article
      variants={projectVariant}
      className="w-full border border-solid border-zinc-700 hover:border-zinc-500 transition duration-500 ease-in-out p-5 rounded-lg flex flex-col gap-4"
    >
      <div className="image-area w-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full object-cover object-center rounded-sm"
        />
      </div>
      <div className="content-area">
        <h3 className="text-2xl font-montalt">{project?.name}</h3>
        <p className="text-sm text-zinc-300">{project?.description}</p>
      </div>
      <div className="flex gap-5">
        <Link
          to={project.link.preview}
          className="py-2 px-7 rounded-lg border border-emerald-500 hover:bg-emerald-500"
        >
          Preview
        </Link>
        <Link
          to={project.link.github}
          className="py-2 px-7 rounded-lg border border-emerald-500 hover:bg-emerald-500"
        >
          GitHub
        </Link>
      </div>
    </motion.article>
  );
};

export default Card;
