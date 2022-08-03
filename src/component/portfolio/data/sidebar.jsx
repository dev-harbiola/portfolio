import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa';

class Sidebar {
  static menu = [
    { link: '/', label: 'Home', icon: <FaHome /> },
    { link: '/about', label: 'About', icon: <FaUser /> },
    { link: '/projects', label: 'Projects', icon: <FaHome /> },
    { link: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];
}

export default Sidebar;
