import { services } from "../data/service";
import Card from "./Card";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service) => (
        <Card key={service.id} {...service} />
      ))}
    </div>
  );
};

export default ServiceCard;
