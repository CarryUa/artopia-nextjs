import Container from "common/Container";
import CategoriesCard from "./CategoriesCard";
import DigitalArt from "./static/DigitalArt.jpg";
export default function Categories() {
  return (
    <section>
      <Container>
        <CategoriesCard href={"/"} text="Digital Atr" image={DigitalArt} />
      </Container>
    </section>
  );
}
