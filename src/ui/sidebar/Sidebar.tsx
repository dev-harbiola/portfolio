import { AiOutlineClose } from "react-icons/ai";
import Button from "../../components/button/Button";
import { navLinks } from "../../data/menu";
import { Link } from "react-scroll";
import { cv_url } from "../../data/socials";

const Sidebar = ({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  return (
    <aside
      className={`${
        isOpen ? "sm:flex lg:hidden -translate-x-0" : "-translate-x-full  "
      } fixed w-full bg-black right-0 top-0 min-h-screen bg-opacity-70 z-50 ease-in-out duration-300`}
    >
      <div className="bg-zinc-900">
        <div className="flex justify-between items-center py-3 px-5">
          <AiOutlineClose
            size={24}
            className="mt-4 ml-auto cursor-pointer"
            onClick={toggleOpen}
          />
        </div>
        <ul className=" flex flex-col px-5 py-3 space-y-5 w-72 pt-5">
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
          <Button
            onClick={() => window.open(cv_url)}
            className="py-2 px-7 mt-5  rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
          >
            Download CV
          </Button>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
