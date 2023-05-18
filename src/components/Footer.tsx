import useApp from "../hooks/useApp";
import styles from "./Footer.module.scss";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  const { dark } = useApp();
  return (
    <footer className={`${styles.footer} ${dark ? styles.dark : styles.light}`}>
      <div>Abiola Fasanya &copy; {new Date(Date.now()).getFullYear()}</div>
      <div className={styles.footer_social_icons}>
        <GitHub />
        <LinkedIn />
        <Twitter />
      </div>
    </footer>
  );
};

export default Footer;
