"use client";

import Link from "next/link";

export default function HeaderBtn() {
  return (
    <Link
      href={"/register"}
      className=" w-52 h-16 bg-_violet-500 flex justify-center items-center"
    >
      <p>Sing in</p>
    </Link>
  );
}
