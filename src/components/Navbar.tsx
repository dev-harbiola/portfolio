import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useApp from '../hooks/useApp';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { dark, toggleTheme } = useApp();
  
  return (
    <nav className={`${styles.navbar} ${dark ? styles.dark : styles.light}`}>
      <menu className={styles.menu}>
        <div className={styles.menu_logo}>
        <div className={styles.menu_title}>{'<Habiola />'}</div>
        <MenuIcon className={styles.menu_icon}/>
        </div>
        <div className={styles.menu_link}>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Projects</Link>
          <Link to={'/'}>Skill</Link>
          <Link to={'/'}>Blog</Link>
          <Button onClick={() => toggleTheme()}>
            {!dark && <DarkModeIcon color='action'/>}
            {dark && <LightModeIcon color='error'/>}
          </Button>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;
