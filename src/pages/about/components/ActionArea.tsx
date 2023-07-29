import { Socials } from "../../../data/socials";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface ActionProps {
  reduceStep: () => void;
  increaseStep: () => void;
}

const ActionArea = ({ increaseStep, reduceStep }: ActionProps) => {
  return (
    <div className={"mt-4 flex items-center justify-between"}>
      <article className={"flex gap-x-2"}>
        {Socials.map((social) => (
          <Link key={social.name} to={social.url} about={social.name}>
            <social.icon
              name={social.name}
              className="hover:text-emerald-500"
              size={24}
            />
          </Link>
        ))}
      </article>
      <div>
        <Button className="py-2 px-5" onClick={() => reduceStep()}>
          <MdNavigateBefore size={24} className="text-emerald-500" />
        </Button>
        <Button className="py-2 px-5" onClick={() => increaseStep()}>
          <MdNavigateNext size={24} className="text-emerald-500" />
        </Button>
      </div>
    </div>
  );
};

export default ActionArea;
