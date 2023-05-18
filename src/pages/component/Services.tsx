import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Title from "../../components/Title";
import useApp from "../../hooks/useApp";
import WebDev from "../../assets/app-development.png";
import webMaintain from "../../assets/web-maintenance.png";
import DbMange from "../../assets/database-management.png";
import webHost from "../../assets/hosting-services.png";
import support from "../../assets/technical-support.png";

const Services = () => {
  const { dark } = useApp();
  return (
    <div
      id="services"
      className={`${styles.services} ${dark ? styles.dark : styles.light}`}
    >
      <Title title="My Services" subTitle="What I can offer" />

      <div className={styles.services_group}>
        <Box className={styles.services_card}>
          <img src={WebDev} alt="" />
          <h3>Website Development</h3>
          <p>
            Using ReactJs, NextJs, NodeJs, and Golang, to develop web
            applications with custom features that work seamlessly across
            different devices and browsers.
          </p>
        </Box>
        <Box className={styles.services_card}>
          <img src={DbMange} alt="" />
          <h3>Database management</h3>
          <p>
            developing, maintaining, and optimizing databases to support website
            functionality.
          </p>
        </Box>
        <Box className={styles.services_card}>
          <img src={webHost} alt="" />
          <h3>Web Hosting</h3>
          <p>
            setting up, configuring, and managing web hosting accounts for
            clients.
          </p>
        </Box>
        <Box className={styles.services_card}>
          <img src={webMaintain} alt="" />
          <h3>Website Maintainance</h3>
          <p>
            Website maintenance: providing ongoing updates, backups, security
            checks, and bug fixes to keep websites running smoothly.
          </p>
        </Box>
        <Box className={styles.services_card}>
          <img src={support} alt="" />
          <h3>Technical Consulting</h3>
          <p>
            offering technical guidance and advice to clients on web-related
            issues and solutions.
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Services;
