import Image from "next/image";
import MainPageImages from "./HeroImages";
import MainPageText from "./HeroText";
import HeroDecorPurpule from "./static/HeroDecorPurpule.svg";
import HeroDecorPink from "./static/HeroDecorPink.svg";
import HeroDecorWhite from "./static/HeroDecorWhite.png";
import Lines from "./static/HecoDecorLines.svg";
import Container from "common/Container";
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[80px] h-screen">
      <div className=" absolute opacity-50 bg-_violet-300 w-1/5 h-full top-0"></div>
      {/* left purpule background */}
      <Image
        width={700}
        height={700}
        src={HeroDecorPurpule}
        alt="Decor"
        className=" absolute bottom-0 left-0"
      ></Image>
      {/* right pink background */}
      <Image
        width={500}
        height={500}
        src={HeroDecorPink}
        alt="Decor"
        className=" absolute top-[-150px] right-[-200px]"
      ></Image>
      {/* left white background */}
      <Image
        src={HeroDecorWhite}
        width={500}
        height={350}
        alt="Decor"
        className="z-10 absolute left-[-150px] top-[30%]"
      />
      {/* left lines decoraton */}
      <Image
        src={Lines}
        width={115}
        height={50}
        alt="Decor Lines"
        className="z-10 absolute left-0 bottom-0"
      />
      <Container className="relative z-10 mx-auto px-4 max-w-screen-xl">
        <div className="flex justify-center  flex-col md:flex-row gap-12">
          <MainPageImages />
          <MainPageText />
        </div>
      </Container>
    </section>
  );
}
