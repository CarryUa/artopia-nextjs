export default function Header() {
  return (
    <header className="Header fixed mt-5 flex items-center justify-between">
      <h1 className=" font-bold font-size-40px text-white">Artopia</h1>
      <nav className="flex gap-16">
        <a className="H-a" href="#">
          Discover
        </a>
        <a className="H-a" href="#">
          Forum
        </a>
        <a className="H-a" href="#">
          News
        </a>
        <a className="H-a" href="#">
          Blog
        </a>
      </nav>
      <button type="button" className=" w-52 h-16 bg-purple-500 text-white ">
        Sing In
      </button>
    </header>
  );
}
