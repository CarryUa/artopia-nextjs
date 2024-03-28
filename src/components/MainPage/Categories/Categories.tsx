import Container from "common/Container";
import CategoriesCard from "./CategoriesCard";
import DigitalArt from "./static/DigitalArt.jpg";
import PaintBrush from "./static/PaintBrush.svg";
export default function Categories() {
  return (
    <section>
      <Container>
        <CategoriesCard
          subImage={PaintBrush}
          alt="Digital Art Card"
          href={"/"}
          children="Digital Arts"
          image={DigitalArt}
        />
      </Container>
    </section>
  );
}
