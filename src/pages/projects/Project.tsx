import { Element } from "react-scroll";
import Title from "../../components/Title";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ProjectType = (typeof projects)[0];

const containerVariant = {
  hidden: { transition: {  } },
  visible: {
    transition: { staggarChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = () => {
  return (
    <Element name="projects" className="sm:px-5 lg:px-0">
      <Title title="My Projects" subTitle="This are some of my projects" />
      <div className="min-h-screen w-full mt-36">
        <motion.section
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariant}
        >
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </motion.section>
        <section className="flex items-center justify-center h-44">
          <Link
            to={"https://www.github.com/abiolafasanya"}
            className="underline text-emerald-500"
          >
            View More...
          </Link>
        </section>
      </div>
    </Element>
  );
};

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
        <h3 className="text-2xl font-semibold">{project?.name}</h3>
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

export default Project;
