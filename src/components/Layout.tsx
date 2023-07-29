import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../ui/header/Header";
import Footer from "../ui/footer/Footer";
import Loader from "../ui/loader/Loader";

const Layout = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full relative max-w-[1920px] font-montserrat bg-zinc-900 text-zinc-100">
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
