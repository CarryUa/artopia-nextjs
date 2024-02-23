"use client";
import Hero from "components/MainPage/Hero";
import { useState } from "react";

export default function Home() {
  const [m, setMessage] = useState<string>("");
  return (
    <>
      <Hero />
      <div></div>
    </>
  );
}
