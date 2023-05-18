import { Box, Link } from "@mui/material";
import Title from "../../components/Title";
import useApp from "../../hooks/useApp";
import styles from "./styles.module.scss";
import { projects, techStack } from "../../data/projects";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import { Element } from "react-scroll";

const Projects = () => {
  const { dark } = useApp();
  return (
    <Element
      name="projects"
      className={`${styles.projects} ${dark ? styles.dark : styles.light}`}
    >
      <Title title="My Projects" subTitle="This are some of my projects" />
      <Box className={styles.projects_container}>
        {projects.map((project) => (
          <Box key={project.id} className={styles.projects_card}>
            <div className={styles.projects_image}>
              <img src={project.image} alt="" />
              <div className={styles.projects_links}>
                <Link href={project.link?.preview}>
                  <PreviewIcon fontSize="large" />
                </Link>
                <Link href={project.link?.github}>
                  <GitHubIcon fontSize="large" />
                </Link>
              </div>
            </div>
            <div className={styles.projects_info}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {techStack(project.stack).map((stack: string) => (
                <Stack
                  key={stack}
                  direction="row"
                  m={0.2}
                  mt={2}
                  spacing={2}
                  display={"inline-flex"}
                >
                  <Chip
                    label={stack}
                    color="error"
                    size="small"
                    sx={{ cursor: "pointer" }}
                  />
                </Stack>
              ))}
              <div></div>
            </div>
          </Box>
        ))}
      </Box>
    </Element>
  );
};

export default Projects;
