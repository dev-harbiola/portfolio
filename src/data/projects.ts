import bitmovie from "../assets/bitmovies.png";
import lms from "../assets/lms.png";
import eshop from "../assets/eshop.png";

const projects = [
  {
    id: 1,
    name: "TSCAPP",
    description:
      "Tscapp is a learning management system, with features like assessment, courses, tasks, and much more cool stuffs",
    link: {
      preview: "https://lms-next-typescript.vercel.app/",
      github: "#",
    },
    stack: "NextJs, Prisma, MongoDB, NextAuth",
    image: lms,
  },

  {
    id: 2,
    name: "BitMovies",
    description:
      "Bit Movies is a movie listing application that lists movies, series, actors details and much more",
    link: {
      preview: "http://bitmovie.netlify.app/",
      github: "https://github.com/dev-harbiola/bitmovie/",
    },
    stack: "React, Sass, TMDB API",
    image: bitmovie,
  },

  {
    id: 3,
    name: "Estore Ecommerce",
    description:
      "Ecommerce service that provides products details, add to cart and  checkout functionality",
    link: {
      preview: "http://eshop-fashion.netlify.app/",
      github: "github.com/dev-harbiola/estore",
    },
    stack: "React, Sass, Express, MongoDB",
    image: eshop,
  },
];

const techStack = (stack: string) => {
  const stackArray = stack.split(", ");
  return stackArray;
};

export { projects, techStack };
