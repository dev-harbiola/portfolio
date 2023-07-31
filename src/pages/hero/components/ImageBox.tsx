import MyPics from "../../../assets/profile-pic (8).png";

const ImageBox = () => {
  return (
    <div className="rounded-full border-2 box-border w-full max-w-[250px] max-h-[250px] overflow-hidden">
      <img
        src={MyPics}
        alt="abiola fasanya"
        className="w-full h-full object-cover object-center p-2"
      />
    </div>
  );
};

export default ImageBox;
