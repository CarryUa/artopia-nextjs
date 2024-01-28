import MainPageBG from "./MainPageBG";
import MainPageImages from "./MainPageImages";
import MainPageText from "./MainPageText";

export default function MainPage() {
  return (
    <main className="first-on-page relative flex gap-10">
      <MainPageBG />
      <MainPageImages />
      <MainPageText />
    </main>
  );
}
