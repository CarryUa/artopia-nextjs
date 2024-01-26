import HeaderBtn from "./HeaderBtn";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="Header fixed mt-5 flex items-center justify-between">
      <h1 className=" font-bold font-size-40px text-white">Artopia</h1>
      <HeaderNav />
      <HeaderBtn />
    </header>
  );
}
