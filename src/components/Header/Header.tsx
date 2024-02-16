"use client";
import HeaderBtn from "./HeaderBtn";
import HeaderNav from "./HeaderNav";
import { usePathname } from "next/navigation";
export default function Header() {
  const path = usePathname();
  if (path.includes("/register") || path.includes("/login")) return;
  return (
    <header className="z-30 h-12 w-[1310px] fixed pt-5 flex items-center justify-between">
      <h1 className=" font-bold font-size-40px text-white">Artopia</h1>
      <HeaderNav />
      <HeaderBtn />
    </header>
  );
}
