import Container from "common/Container";
import ViewRankingButton from "common/ui/Buttons/ViewRankingButton";
import TopCreatorsCard from "./TopCreatorsCard";
import avatar from "/public/PopularAvatar2.png";
const data = [
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
  {
    avatar: avatar,
    name: "Keepitreal",
    totalSales: 100,
  },
];
export default function TopCreators() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-4 justify-between">
            <div>
              <h3 className="text-4xl">Top Creators</h3>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <ViewRankingButton />
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row grid-cols-1">
            {data.map((card, i) => {
              return (
                <TopCreatorsCard
                  key={i}
                  number={i + 1}
                  name={card.name}
                  avatar={card.avatar}
                  totalSales={card.totalSales}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
