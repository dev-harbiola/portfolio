import { Box, Button } from "@mui/material";
import useApp from "../../hooks/useApp";
import styles from "./styles.module.scss";
import { useTypewriter } from "react-simple-typewriter";
import Abiola from "../../assets/Abiola.jpg";
import { Element, Link } from "react-scroll";

const Hero = () => {
  const { dark } = useApp();
  const [text] = useTypewriter({
    /* Config */
    words: [
      // 'I am an IT Specialist',
      "I am Full-Stack Web Developer",
      "I am Frontend Web Developer",
      "I am a Backend Developer",
      //   'I am a DevOps Engineer',
    ],
    loop: true,
    // cursorStyle: '_',
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });
  return (
    <Element
      name="home"
      className={`${styles.hero} ${dark ? styles.dark : styles.light}`}
    >
      <Box className={styles.hero_align}>
        <Box className={styles.hero_text}>
          <h5>Hello I'm</h5>
          <h2>Abiola Fasanya</h2>
          <h3 className={styles.typewritter}> {text} </h3>
          <Link to="contact">
            <Button
              variant="contained"
              color="error"
              className={styles.hero_btn}
            >
              Hire Me
            </Button>
          </Link>
        </Box>
        <Box className={styles.hero_image}>
          <picture>
            <img loading="lazy" src={Abiola} alt="image of abiola" />
          </picture>
        </Box>
      </Box>
    </Element>
  );
};

export default Hero;
