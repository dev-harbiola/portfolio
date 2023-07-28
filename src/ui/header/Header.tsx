import clsx from "clsx";
import useApp from "../../hooks/useApp";
import MenuItem from "./components/MenuItem";
import Logo from "../../assets/logo.png";
import Button from "../../components/button/Button";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const { theme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const styles = clsx(
    "w-full max-w-7xl mx-auto py-5 sm:px-7 md:px-14 flex items-center justify-between relative",
    {
      "bg-zinc-100 text-black": theme === "light",
      "bg-zinc-900 text-zinc-100": theme === "dark",
    }
  );
  return (
    <div className={styles}>
      <div className="font-montalt">
        <Link to="home" className="cursor-pointer">
          <h2 className="text-2xl flex items-center space-x-2">
            <img src={Logo} alt="logo" width={36} />
            <span className="font-montalt">| habiola</span>
          </h2>
        </Link>
      </div>
      <div className="flex items-center sm:hidden lg:flex">
        <MenuItem />
        <Link to="contact">
          <Button className="ml-7 py-2 px-7 rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50">
            Get in Touch
          </Button>
        </Link>
      </div>
      {<Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />}
      <AiOutlineMenu
        className="text-zinc-200 font-semibold lg:hidden"
        size={24}
        onClick={toggleOpen}
      />
    </div>
  );
};

export default Header;
