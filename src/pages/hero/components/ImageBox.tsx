// import MyPics from "../../../assets/profile-pic (8).png";
import MyPics from "../../../assets/pp.png";

const ImageBox = () => {
  return (
    <div className="w-full max-w-[250px] max-h-[250px] overflow-hidden">
      <img
        src={MyPics}
        alt="abiola fasanya"
        className="w-full h-full object-cover object-center p-2 rounded-full"
      />
    </div>
  );
};

export default ImageBox;
