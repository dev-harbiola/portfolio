import { Element } from "react-scroll";
import Title from "../../components/Title";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./components/Card";

const containerVariant = {
  hidden: { transition: {} },
  visible: {
    transition: { staggarChildren: 0.2 },
  },
};

const Project = () => {
  return (
    <Element name="projects" className="sm:px-5 lg:px-0 mt-40 min-h-screen">
      <Title title="My Projects" subTitle="These are some of my projects" />
      <div className="w-full mt-20">
        <motion.section
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 w-full h-full"
          initial="hidden"
          whileInView="visible"
          // viewport={{once: true}}
          variants={containerVariant}
        >
          {projects.slice(0,6).map((project) => (
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

export default Project;
