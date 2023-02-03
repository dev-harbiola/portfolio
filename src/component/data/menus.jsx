import { BiHomeAlt, BiBook, BiBriefcaseAlt, BiMessageSquareDetail} from 'react-icons/bi';

class Menu {
  static menus = [
    { id: 1, to: 'home', text: 'Home', icon: BiHomeAlt },
    { id: 2, to: 'aboutme', text: 'About', icon: BiBook },
    { id: 3, to: 'project', text: 'Project', icon: BiBriefcaseAlt },
    { id: 4, to: 'contact', text: 'Contact', icon: BiMessageSquareDetail },
  ];
}

export default Menu;
