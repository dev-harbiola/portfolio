import MyPics from "../../../assets/AB1.jpg";

const ImgBox = () => {
  return (
    <div className="hidden md:flex w-[350px] box-border overflow-hidden rounded-lg">
      <img src={MyPics} alt="abiola fasanya" />
    </div>
  );
};

export default ImgBox;
