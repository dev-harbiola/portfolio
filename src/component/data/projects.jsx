const Projects = [
  
  {
    id: 1,
    title: 'Decentralized Library',
    description:
      'This is blockchain project that upload files to a decentralized library',
    image:
      'https://res.cloudinary.com/fastbeetech/image/upload/v1655427234/l6zo4cdsydsg18dcljwu.png',
    link: 'https://tdas-library.netlify.app/',
    github: 'https://github.com/',
    color: 'bg-amber-100 hover:bg-amber-300 dark:bg-gray-700 dark:text-gray-100',
  },

  {
    id: 2,
    title: 'Learning Mangement System',
    description:
      'This web application features include, assessment, course options, exam portal, library, post, etc ',
    image:
      'https://res.cloudinary.com/fastbeetech/image/upload/v1675262053/my-uploads/Screenshot_from_2023-02-01_15-30-07_njzs22.png',
    link: 'https://lms-next-typescript.vercel.app',
    github: '',
    color:
      'bg-indigo-100 hover:bg-indigo-300  dark:bg-gray-700 dark:text-gray-100',
  },
  {
    id: 3,
    title: 'School Management System',
    description:
      'This is a school management system for assignments, grades, and more',
    image:
      'https://res.cloudinary.com/fastbeetech/image/upload/v1675312149/my-uploads/Screenshot_from_2023-02-02_05-28-25_ee3vfs.png',
    link: 'https://submission-portal.herokuapp.com/',
    github: '',
    color:
      'bg-blue-100 hover:bg-blue-300  dark:bg-gray-600 dark:text-gray-100',
  },
  
  {
    id: 4,
    title: 'Fast Ecommerce',
    description: 'This is a fashion and clothing e-commerce system',
    image:
      'https://res.cloudinary.com/fastbeetech/image/upload/v1675262055/my-uploads/Screenshot_from_2023-02-01_15-31-54_wyaz5e.png',
    link: 'https://next-ecommerce-tau-liard.vercel.app/',
    github: '',
    color:
      'bg-orange-100 hover:bg-orange-300  dark:bg-gray-600 dark:text-gray-100',
  },
  
];

export default Projects;

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

