import Button from "../../../components/button/Button";
import { Link } from "react-scroll";

const BriefIntro = () => {
  return (
    <div className="flex flex-col sm:items-center md:items-start">
      <div className="w-full sm:text-center md:text-left">
        <h5 className="text-xl">Hello, I'm</h5>
        <h2 className="sm:text-3xl md:text-4xl lg:text-6xl font-semibold font-montalt">
          Abiola Fasanya
        </h2>
      </div>
      <h4 className="md:text-xl text-emerald-500">
        Software Engineer
      </h4>
      <Link to="contact">
        <Button
          id="contact"
          className="w-fit mt-5 py-2 px-7 rounded-lg border-2 border-solid border-emerald-500 hover:bg-emerald-500 hover:text-emerald-50"
        >
          Let's Talk
        </Button>
      </Link>
    </div>
  );
};

export default BriefIntro;
