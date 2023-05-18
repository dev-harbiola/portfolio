import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import styles from './Layout.module.scss';
import useApp from '../hooks/useApp';

const Layout = () => {
  const {dark} = useApp()
  return (
    <div className={`${styles.layout} ${dark ? styles.dark : styles.light}`}>
      {/* <div className={dark ? styles.dark : styles.light}> */}
        <Navbar />
        <Outlet />
      {/* </div> */}
    </div>
  )
}

export default Layout