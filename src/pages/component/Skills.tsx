import reactLogo from "../../assets/react.png";
import github from "../../assets/github.png";
import linux from "../../assets/linux.png";
import node from "../../assets/nodejs.png";
import laravel from "../../assets/laravel.png";
import vscode from "../../assets/vscode.png";
import typescript from "../../assets/typescript.png";
import postgres from "../../assets/postgre.png";
import nextjs from "../../assets/NextJs.png";
import sass from "../../assets/sass.png";
import npm from "../../assets/npm.png";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./styles.module.scss";
import useApp from "../../hooks/useApp";
import Title from "../../components/Title";
import StarIcon from "@mui/icons-material/Star";
import { HTMLAttributes } from "react";
interface DivProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}
const skillsLists = [
  "Good Communication Skills",
  "Critical Thinking & Problem Solving",
  "Team Work & Collaboration",
  "Professionalism & Strong Work Ethics",
  "Flexibility & Adaptability",
];

const Skills = () => {
  const { dark } = useApp();
  return (
    <div
      id="skills"
      className={`${styles.skills} ${dark ? styles.dark : styles.light}`}
    >
      <Title title="My Skills" subTitle="Skills and Tools" />
      <section className={styles.skills_container}>
        <Box className={styles.skills_logo_container}>
          <img src={reactLogo} alt="" />
          <img src={node} alt="" />
          <img src={laravel} alt="" />
          <img src={vscode} alt="" />
          <img src={linux} alt="" />
          <img src={github} alt="" />
          <img src={nextjs} alt="" />
          <img src={sass} alt="" />
          <img src={npm} alt="" />
          <img src={typescript} alt="" />
          <img src={postgres} alt="" />
        </Box>
        <Box>
          <List>
            {skillsLists.map((skill) => (
              <ListItem key={skill}>
                <ListItemIcon>
                  <StarIcon color="error" />
                </ListItemIcon>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>
      </section>
    </div>
  );
};

export default Skills;
