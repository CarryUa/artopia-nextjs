import Image from "next/image";
import MainPageImages from "./MainPageImages";
import MainPageText from "./MainPageText";
import HeroDecor from "./static/HeroDecor.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[74px]">
      <div className="z-0 absolute bg-standart_violet-400 w-1/5 h-full top-0"></div>
      {/* <div className="z-20 absolute bg-standart_violet-400 left-[20%] top-[90%] size-10 rounded-full shadow-[0_0_300px] shadow-standart_violet-400"></div> */}
      <Image
        width={500}
        height={500}
        src={HeroDecor}
        alt="Decor"
        className=" absolute bottom-0 left-[10%]"
      ></Image>
      <div className="container relative z-10 mx-auto px-4 max-w-screen-xl">
        <div className="flex gap-10">
          <MainPageImages />
          <MainPageText />
        </div>
      </div>
    </section>
  );
}
