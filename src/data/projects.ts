import bitmovie from "../assets/bitmovies.png";
import lms from "../assets/lms.png";
import eshop from "../assets/eshop.png";
import fastbier from "../assets/fastbier.png";
import lendsqr from "../assets/lendsqr.png";
import tourism from "../assets/tourism.png";

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

  {
    id: 4,
    name: "Fastbier Home",
    description:
      "Real Estate, property business, dealing with buying or renting a house",
    link: {
      preview: "https://fastbier.vercel.app/",
      github: "https://github.com/abiolafasanya/fastbier",
    },
    stack: "NextJs, Tailwindcss, Javascript",
    image: fastbier,
  },

  {
    id: 5,
    name: "Lendsqr user detail application",
    description: "Lendsqr App: Access Mock User Details with Ease",
    link: {
      preview: "https://abiola-fasanya-lendsqr-fe-test.netlify.app/",
      github: "https://github.com/abiolafasanya/lendsqr-fe-test",
    },
    stack: "ReactJs, Sass, Typescript, Mock Api",
    image: lendsqr,
  },


  {
    id: 6,
    name: "Tourism App",
    description: "Travel Odyssey App: Serendipitously Unearthing Fascinating Science and Technology Events",
    link: {
      preview: "https://tourism-jnc726k2r-fastbeetech.vercel.app/",
      github: "https://github.com/abiolafasanya/tourism/",
    },
    stack: "ReactJs, Sass, Typescript, Mock Api",
    image: tourism,
  },
];

const techStack = (stack: string) => {
  const stackArray = stack.split(", ");
  return stackArray;
};

export { projects, techStack };
