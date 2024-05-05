import Image from "next/image";
import Flower from "./assets/Flower.png";
const Picture = () => {
  return (
    <div className="basis-[40%]">
      {" "}
      <div className="bg-cover">
        {" "}
        <Image className="mt-[30px]" src={Flower} alt="flower-image" />
      </div>
    </div>
  );
};

export default Picture;
