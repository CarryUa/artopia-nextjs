"use client";

import { useNumContext } from "@/context/num";
import { useRef } from "react";

export function ContextInput() {
  const ref = useRef(null);
  const { changeNum } = useNumContext();
  function onSubmit(e) {
    e.preventDefault();
    changeNum(ref.current.value);
    ref.current.value = 0;
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="number" ref={ref} />
      <button className="text-white" type="submit">
        Change context
      </button>
    </form>
  );
}
