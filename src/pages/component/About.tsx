import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Abiola from "../../assets/Abiola.jpg";
import useApp from "../../hooks/useApp";
import Title from "../../components/Title";
import { Element } from "react-scroll";
import { about, cv_url } from "../../data/socials";
import { useState } from "react";

const About = () => {
  const { dark } = useApp();
  const [step, setStep] = useState(2);
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
    <Element
      name="about"
      className={`${styles.about} ${dark ? styles.dark : styles.light}`}
    >
      <Title title="About Me" subTitle="Get to know me" />
      <Box className={styles.about_container}>
        <Box className={styles.about_image}>
          <img src={Abiola} alt="" />
        </Box>
        <Box className={styles.about_detail}>
          <div>
            {about.slice(0, step).map((info) => (
              <Typography component="p" key={info.id}>
                {info.content}
              </Typography>
            ))}

            <div className={styles.btn_direction}>
              <Button onClick={() => reduceStep()}>See Less</Button>
              <Button onClick={() => increaseStep()}>See More</Button>
            </div>
          </div>
          <Button
            color="error"
            variant="contained"
            sx={{ height: "40px", minWidth: "150px" }}
            onClick={() => window.open(cv_url)}
          >
            Check my CV
          </Button>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
