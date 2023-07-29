import MyPics from "../../../assets/Abiola-hd.jpg";

const ImageBox = () => {
  return (
    <div className="rounded-full border-2 box-border w-full max-w-[250px] max-h-[250px] overflow-hidden">
      <img
        src={MyPics}
        alt="abiola fasanya"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ImageBox;
