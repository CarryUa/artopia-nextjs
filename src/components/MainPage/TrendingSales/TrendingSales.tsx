import Container from "common/Container";
import TreandingSalesCards from "./TrendingSalesCards";
import NFT from "/public/NFTexample.png";
import avatar from "/public/PopularAvatar.png";
export default function TreandingSales() {
  return (
    <section>
      <Container>
        <div className="pb-12">
          <h3 className="text-white text-5xl font-semibold">Trending Sales</h3>
          <p className="text-[#777e90] text-xl">
            Checkout our weekly updated trending sales
          </p>
        </div>
        <div className="flex justify-between">
          <TreandingSalesCards
            creatorAvatar={avatar}
            price={"45.50 USD"}
            image={NFT}
            name="Da Viper"
            creator="John Doe"
          />
          <TreandingSalesCards
            creatorAvatar={avatar}
            price={"45.50 USD"}
            image={NFT}
            name="NFTexample"
            creator="John Doe"
          />
          <TreandingSalesCards
            creatorAvatar={avatar}
            price={"45.50 USD"}
            image={NFT}
            name="NFTexample"
            creator="John Doe"
          />
        </div>
      </Container>
    </section>
  );
}
