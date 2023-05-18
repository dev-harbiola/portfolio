// import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useApp from "../hooks/useApp";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const { dark, toggleTheme, openSideBar, toggleSidebar } = useApp();
  console.log("sidebar is open?", openSideBar);

  return (
    <nav className={`${styles.navbar} ${dark ? styles.dark : styles.light}`}>
      <menu className={styles.menu}>
        <div className={styles.menu_logo}>
          <div className={styles.menu_title}>{"<Habiola />"}</div>
          <div className={styles.group_icon}>
            <Button className={styles.theme_icon} onClick={() => toggleTheme()}>
              {!dark && <DarkModeIcon color="action" />}
              {dark && <LightModeIcon color="error" />}
            </Button>
            <Button
              color="error"
              className={styles.menu_icon}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
        <div className={`${openSideBar ? styles.menu_link : styles.hidden}`}>
          <Link to={"home"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"projects"}>Projects</Link>
          <Link to={"services"}>Services</Link>
          <Link to={"skill"}>Skill</Link>
          <Link to={"blog"}>Blog</Link>
          <Button className={styles.hidden} onClick={() => toggleTheme()}>
            {!dark && <DarkModeIcon color="action" />}
            {dark && <LightModeIcon color="error" />}
          </Button>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;
