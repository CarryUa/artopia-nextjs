import Image from "next/image";
import MainImg1 from "./static/MainPageImg1.jpg";
import MainImg2 from "./static/MainPageImg2.jpg";
export default function HeroImages() {
  return (
    <div className="flex justify-center z-10 gap-[3vw] lg:gap-4  ">
      <Image
        className="w-[40vw] h-[45vh] sm:w-[40vh] sm:h-[60vh] lg:w-[35vh] "
        src={MainImg1}
        height={565}
        width={270}
        alt="HeroImgleft"
      />
      <Image
        className="w-[40vw] h-[45vh] sm:w-[40vh] sm:h-[60vh] lg:w-[35vh]"
        src={MainImg2}
        height={565}
        width={270}
        alt="HeroImgRight"
      />
    </div>
  );
}
