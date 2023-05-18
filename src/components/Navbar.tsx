// import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useApp from "../hooks/useApp";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const navLinks = [
  { id: 1, name: "About", to: "about" },
  { id: 2, name: "Services", to: "services" },
  { id: 3, name: "Skills", to: "skills" },
  { id: 4, name: "Projects", to: "projects" },
  { id: 5, name: "Contact", to: "contact" },
];

const Navbar = () => {
  const { dark, toggleTheme, openSideBar, toggleSidebar } = useApp();
  console.log("sidebar is open?", openSideBar);

  return (
    <nav className={`${styles.navbar} ${dark ? styles.dark : styles.light}`}>
      <menu className={styles.menu}>
        <div className={styles.menu_logo}>
          <Link to="home" className={styles.menu_title}>
            {"<Habiola />"}
          </Link>
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
          {navLinks.map((link) => (
            <Link
              key={link.id}
              className={styles.link}
              // onClick={() => toggleSidebar()}
              activeClass={styles.active_link}
              to={link.to}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              isDynamic={true}
            >
              {link.name}
            </Link>
          ))}
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
