"use client";
import Image from "next/image";
import { useState, useRef } from "react";
// import { Btn } from "@/components/Btn";
export default function Home() {
  const ref = useRef(0);
  const [state, setState] = useState(0);
  function func(e) {
    setState(state + 1);
    ref.current++;
    console.log("ref:", ref.current);
    console.log("state:", state);
    console.log(e);
  }
  return (
    <main>
      <p className="first-on-page text-white">Count: {ref.current}</p>
      <button onClick={func} className="text-white" type="button">
        Button
      </button>
      {/* <Btn></Btn>
      <p className="text-white">Signed in</p> */}
    </main>
  );
}
