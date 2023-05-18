import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';
import Abiola from '../../assets/Abiola.jpg';
import useApp from '../../hooks/useApp';
import Title from '../../components/Title';

const About = () => {
  const { dark } = useApp();
  return (
    <div className={`${styles.about} ${dark ? styles.dark : styles.light}`}>
      <Title title="About Me" subTitle="Get to know me" />
      <Box className={styles.about_container}>
        <Box className={styles.about_image}>
          <img src={Abiola} alt="" />
        </Box>
        <Box className={styles.about_detail}>
          <Typography component="p">
            Welcome to my portfolio! I'm Abiola Fasanya, a full-stack developer
            who loves building beautiful and functional web apps. I specialize
            in MERN stack (MongoDB, Express, React, Node.js), Next.js, and
            Laravel, which enables me to create high-quality apps tailored to
            your needs.
          </Typography>
          <Typography component="p">
            I believe in collaboration and communication. By working closely
            with clients and understanding their vision, I deliver creative
            solutions that exceed expectations. My approach is both thoughtful
            and creative, resulting in functional and visually appealing
            projects.
          </Typography>
          <Typography component="p">
            I specialize in building custom e-commerce platforms, content
            management systems, and complex web applications. With the right
            expertise and tools, I can bring your ideas to life and create
            something amazing. Let's work together!
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default About;
