import {
  github,
  laravel,
  linux,
  nextjs,
  node,
  postgres,
  reactLogo,
  sass,
  typescript,
  vscode,
} from "../data/skills";
const icons = [
  github,
  laravel,
  linux,
  nextjs,
  node,
  postgres,
  reactLogo,
  sass,
  typescript,
  vscode,
];
const Skills = () => {
  return (
    <article className="flex gap-16">
      {icons.map((icon, i) => (
        <img key={i} src={icon} alt="icon" />
      ))}
    </article>
  );
};

export default Skills;
