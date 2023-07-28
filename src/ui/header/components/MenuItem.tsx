import { Link } from "react-scroll";
import { navLinks } from "../../../data/menu";

const MenuItem = () => {
  return (
    <menu className="flex space-x-7 font-montalt">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          className="hover:text-emerald-500 text-base transition-all ease-in-out cursor-pointer"
          activeClass="text-emerald-500"
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
    </menu>
  );
};

export default MenuItem;
