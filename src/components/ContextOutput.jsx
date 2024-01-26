"use client";
import { NumContext } from "@/context/num";
import { useContext } from "react";

export function ContextOutput() {
  const { num } = useContext(NumContext);
  return <p className="text-white">{num}</p>;
}
