import { FooterCopyright } from "./FooterCopyright";
import { FooterNavigation } from "./FooterNavigation";
import { FooterRegister } from "./FooterRegister";
export default function Footer() {
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
