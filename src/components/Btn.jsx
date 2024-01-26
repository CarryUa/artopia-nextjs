"use client";
import { useState } from "react";

export default function Btn() {
  const [signedIn, setSignedIn] = useState(false);
  let text = "";
  function func() {
    setSignedIn(!signedIn);
    if (signedIn) {
      text = "Sign In";
    } else {
      text = "Signed Out";
    }
  }
  return (
    <button className="text-white" onClick={func} type="button">
      {text}
    </button>
  );
}
