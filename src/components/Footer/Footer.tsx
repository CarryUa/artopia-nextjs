"use client";
import { FooterCopyright } from "./FooterCopyright";
import { FooterNavigation } from "./FooterNavigation";
import { FooterRegister } from "./FooterRegister";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  if (path.includes("/register") || path.includes("/login")) return;
  return (
    <footer className="flex flex-col gap-8 pl-10 text-white bg-[#504f4f74]">
      <div className=" pt-5 flex gap-[70px]">
        <FooterRegister />
        <FooterNavigation />
      </div>
      <FooterCopyright />
    </footer>
  );
}
