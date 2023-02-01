import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdOutlineAttachEmail } from 'react-icons/md';
import HTML from '../../asset/html-5-svgrepo-com.svg';
import CSS from '../../asset/css-3-svgrepo-com.svg';
import Bootstrap from '../../asset/bootstrap-svgrepo-com.svg';
import TailwindCss from '../../asset/tailwindcss-svgrepo-com.svg';
import TypeScript from '../../asset/typescript-official-svgrepo-com.svg';
import NodeJs from '../../asset/nodejs-svgrepo-com.svg';
import ReactImage from '../../asset/reactjs-svgrepo-com.svg';
import Laravel from '../../asset/laravel-svgrepo-com.svg';

const Social = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/harbiola78',
    icon: BsFacebook,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/harbiola78',
    icon: BsTwitter,
  },
  { name: 'Github', url: 'https://github.com/fastbeetech', icon: BsGithub },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/abiola-fasanya',
    icon: BsLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:harbiola78@gmail.com?Let_discuss_business',
    icon: MdOutlineAttachEmail,
  },
];

export default Social;

export const skills = [
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'TailwindCss', image: TailwindCss },
  { name: 'Bootstrap', image: Bootstrap },
  { name: 'NodeJs', image: NodeJs },
  { name: 'Typescript', image: TypeScript },
  { name: 'React', image: ReactImage },
  { name: 'Laravel', image: Laravel },
];
