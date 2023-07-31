import { Socials } from "../../../../data/socials";
import { Link } from "react-router-dom";

type SocailType = (typeof Socials)[0];

const Social = () => {
  return (
    <div className={"flex gap-x-2"}>
      {Socials.map((social) => (
        <SocialPlatform {...social} />
      ))}
    </div>
  );
};

const SocialPlatform = ({ name, url, ...props }: SocailType) => {
  return (
    <Link key={name} to={url} about={name}>
      <props.icon
        name={name}
        className="text-zinc-200 hover:text-emerald-500"
        size={24}
      />
    </Link>
  );
};

export default Social;
