import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-zinc-200">
      <Link className="block text-white" to="mailto:harbiola78@gmail.com">
        harbiola78@gmail.com
      </Link>

      <Link className="block" to="tel:+2348102307473 ">
        +2348102307473
      </Link>
    </div>
  );
};

export default Contact;
