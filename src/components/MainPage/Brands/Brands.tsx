import Image from "next/image";
import BethesdaLogo from "./static/BethesdaLogo.svg";
import BiowareLogo from "./static/BioWareLogo.svg";
import CryptonewsLogo from "./static/CryptonewsLogo.svg";
import EnsembleLogo from "./static/EnsembleStudiosLogo.svg";
import Container from "common/Container";
export default function Brands() {
  return (
    <section>
      <Container>
        <div className="flex justify-around py-9 border-y border-gray-600">
          <Image src={BethesdaLogo} alt="Bethesda Logo"></Image>
          <Image src={BiowareLogo} alt="Bioware Logo"></Image>
          <Image src={CryptonewsLogo} alt="Cryptonews Logo"></Image>
          <Image src={EnsembleLogo} alt="Ensemble Studios Logo"></Image>
          <Image src={EnsembleLogo} alt="Ensemble Studios Logo 2"></Image>
        </div>
      </Container>
    </section>
  );
}
