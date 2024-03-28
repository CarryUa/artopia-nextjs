import Container from "common/Container";
import ViewRankingButton from "common/ui/Buttons/ViewRankingButton";
import TopCreatorsCard from "./TopCreatorsCard";
import avatar from "/public/PopularAvatar2.png";
export default function TopCreators() {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-around">
          <div>
            <h3 className="text-4xl">Top Creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <ViewRankingButton />
        </div>
        <TopCreatorsCard avatar={avatar} name="abema negr" totalSales={100} />
      </Container>
    </section>
  );
}
