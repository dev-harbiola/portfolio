import { BiHomeAlt, BiUser, BiBriefcaseAlt2, BiMessage} from 'react-icons/bi';

class Menu {
  static menus = [
    { id: 1, to: 'home', text: 'Home', icon: BiHomeAlt },
    { id: 2, to: 'aboutme', text: 'About', icon: BiUser },
    { id: 3, to: 'project', text: 'Project', icon: BiBriefcaseAlt2 },
    { id: 4, to: 'contact', text: 'Contact', icon: BiMessage },
  ];
}

export default Menu;
