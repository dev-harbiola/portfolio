import { Outlet } from "react-router-dom";
import useApp from "../hooks/useApp";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Header from "../ui/header/Header";
import Footer from "../ui/footer/Footer";
import Loader from "../ui/loader/Loader";

interface Props {
  variant?: "light" | "dark" | "outline" | "plain";
}

const Layout = ({ variant }: Props) => {
  const { dark } = useApp();
  const [theme, setTheme] = useState<typeof variant>();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
    const current = true ? "dark" : "light";
    setTheme(current);
  }, [dark]);
  const styles = clsx("w-full relative max-w-[1920px] font-montserrat", {
    "bg-zinc-100 text-black": theme === "light",
    "bg-zinc-900 text-zinc-100": theme === "dark",
  });
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles}>
          <div className="fixed top-0 z-50 w-full bg-zinc-900">
            <Header />
          </div>
          <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
