import Image from "next/image";
import MainImg1 from "./static/MainPageImg1.jpg";
import MainImg2 from "./static/MainPageImg2.jpg";
export default function HeroImages() {
  return (
    <div className="flex justify-center z-10 gap-[3vw] lg:gap-4  ">
      <div className="relative w-[40vw] h-[45vh] sm:w-[40vh] sm:h-[60vh] lg:w-[35vh]">
        <Image fill className="object-cover" src={MainImg1} alt="HeroImgleft" />
      </div>
      <div className="relative w-[40vw] h-[45vh] sm:w-[40vh] sm:h-[60vh] lg:w-[35vh]">
        <Image
          fill
          className=" object-cover"
          src={MainImg2}
          alt="HeroImgRight"
        />
      </div>
    </div>
  );
}
