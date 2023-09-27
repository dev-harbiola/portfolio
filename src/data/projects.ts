import porchplus from "../assets/porchplus.png";
import lms from "../assets/kodeinpired.png";
import countries from "../assets/countries.png";
import fastbier from "../assets/fastbier.png";
import lendsqr from "../assets/lendsqr.png";
import tourism from "../assets/tourism.png";

const projects = [
  {
    id: 1,
    name: "KodeInspired LMS",
    description:
      "KodeInspired is an intuitive learning management system with user-friendly navigation, offering features like assessments, tasks, courses, and a communication section for interacting with tutors and peers.",
    link: {
      preview: "https://kodeinspired.vercel.app/",
      github: "https://github.com/abiolafasanya/lms-system",
    },
    stack: "NextJs, Prisma, MongoDB, Clerk",
    image: lms,
  },

  {
    id: 2,
    name: "Porchplus",
    description:
      "Porchplus is a real estate platform for landlords to list and manage properties, connecting them with potential renters to secure apartments.",
    link: {
      preview: "https://porchplus.com/",
      github: "#",
    },
    stack: "NextJs, MongoDb, ExpressJs, TailwindCss",
    image: porchplus,
  },

  {
    id: 3,
    name: "Countries API",
    description:
      "Frontend Mentor Challenge, On Listing Countries, Implemented with HTML5, CSS and JavaScript",
    link: {
      preview: "https://abiolafasanya.github.io/country-api/",
      github: "https://github.com/abiolafasanya/country-api",
    },
    stack: "HTML, CSS and JavaScript",
    image: countries,
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
