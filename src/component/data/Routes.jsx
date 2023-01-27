import React from "react";
import Home from "../Home"
import About from "../About"
import Contact from "../Contact"
import Project from "../Projects"

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    exact: true,
    path: "/about",
    main: () => <About />,
  },
  {
    exact: true,
    path: "/projects",
    main: () => <Project />,
  },
  {
    path: "/contact",
    main: () => <Contact />,
  },
];

export default Routes;
