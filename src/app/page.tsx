"use client";
import Brands from "components/MainPage/Brands/Brands";
import Categories from "components/MainPage/Categories/Categories";
import Hero from "components/MainPage/Hero/Hero";
import TopCreators from "components/MainPage/TopCreators/TopCreators";
import TreandingSales from "components/MainPage/TrendingSales/TrendingSales";
import Container from "common/Container";
import avatar from "/public/PopularAvatar.png";
import avatar2 from "/public/NFTexample.png";
import { FormEvent, useState } from "react";
import { useRef } from "react";
import ImageComponent from "components/ImageComponent";
import Image from "next/image";
export default function Home() {
  const [state, changeState] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  // function onSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   console.log(state);
  //   const input = ref.current!;
  //   console.log(input.value);
  // }
  return (
    <>
      <Hero />
      <Brands />
      <TreandingSales />
      <TopCreators />
      <Categories />
      {/* <div className="w-[200px]">
        <ImageComponent alt="image" image={avatar} />
      </div>
      <div>
        <Image className="aspect-[1/7] object-cover" alt="" src={avatar2} />
      </div> */}
      {/* <form
        onSubmit={onSubmit}
        className=" max-w-64 flex flex-col gap-5 p-2 text-black"
      >
        <input
          type="text"
          name="StateInput"
          id="StateInput"
          placeholder="State Input"
          onChange={(e) => {
            changeState(e.target.value);
          }}
        />
        <input
          type="text"
          name="RefInput"
          id="RefInput"
          placeholder="Ref Input"
          ref={ref}
        />
        <button className="text-white bg-_violet-500" type="submit">
          Submit
        </button>
      </form> */}
    </>
  );
}
