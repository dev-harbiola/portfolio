import { Button, Link } from "@mui/material";
import { Socials } from "../data/socials";
import useApp from "../hooks/useApp";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { dark } = useApp();
  return (
    <footer className={`${styles.footer} ${dark ? styles.dark : styles.light}`}>
      <div>Abiola Fasanya &copy; {new Date(Date.now()).getFullYear()}</div>
      <div className={styles.footer_social_icons}>
        {Socials.map((social) => (
          <Link key={social.name} href={social.url} color={'inherit'}>
            <social.icon name={social.name} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
