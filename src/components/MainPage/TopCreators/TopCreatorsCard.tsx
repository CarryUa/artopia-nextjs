import Image, { StaticImageData } from "next/image";
import { Barlow } from "next/font/google";
type TopCreatorsCardProps = {
  avatar: StaticImageData;
  name: string;
  totalSales: number;
};
export default function TopCreatorsCard({
  avatar,
  name,
  totalSales,
}: TopCreatorsCardProps) {
  return (
    <div className="max-w-[230px] max-h-[230px] flex flex-col bg-_grey-500 p-5 pt-3 rounded-2xl items-center gap-2 relative ">
      <Image
        className="max-w-[120px] max-h-[120px] "
        src={avatar}
        alt="avatar"
      />
      <h3 className="text-center font-semibold text-2xl">{name}</h3>
      <div className="flex">
        <p className="text-_grey-200">Total Sales: </p>
        <p className="font-[Barlow]">{totalSales + " USD"}</p>
      </div>
    </div>
  );
}
