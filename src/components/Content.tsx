import { handlee, poppins } from "./assets/fonts";
import Image from "next/image";
import play from "./assets/play-stroke.png";
const Content = () => {
  return (
    <div className="w-1/2 p-10 z-10">
      <div className={handlee.className}>
        {" "}
        <h1 className="text-[95px] text-[#305454] leading-[133px] mt-2 w-[862px] h-[266px] ml-[102px]">
          Explore Best 3D Illustrations
        </h1>
      </div>
      <div className={poppins.className}>
        <p className="text-[#404042] text-[19px] w-[570px] h-[102px] ml-[102px]">
          Immersive 3D Illustrations Web Design showcase, where creativity meets
          technology to redefine digital experiences. Prepare to embark on a
          journey.
        </p>
        <div className="flex items-center space-x-8 ml-[102px]">
          <button className="bg-[#4A7878] p-[10px] rounded-md">
            Start Free Trial
          </button>
          <div className="flex items-center space-x-2">
            <div className="bg-white h-[24px] w-[24px] rounded-full grid place-content-center">
              {" "}
              <Image src={play} width={14} height={15} alt="play-button" />
            </div>

            <p className="text-[#22343D] text-sm">Watch video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
