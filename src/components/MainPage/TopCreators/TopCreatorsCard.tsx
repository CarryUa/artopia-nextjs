import Image, { StaticImageData } from "next/image";
import { Barlow } from "next/font/google";
type TopCreatorsCardProps = {
  avatar: StaticImageData;
  name: string;
  totalSales: number;
  number: number;
};
export default function TopCreatorsCard({
  avatar,
  name,
  totalSales,
  number,
}: TopCreatorsCardProps) {
  return (
    <div className=" min-w-[250px] w-full flex flex-col bg-_grey-500 p-5 pt-3 rounded-2xl items-center gap-6 relative mx-auto ">
      <Image
        className="max-w-[120px] max-h-[120px] "
        src={avatar}
        alt="avatar"
      />
      <div>
        <h3 className="text-center font-semibold text-2xl mb-1">{name}</h3>

        <div className="flex">
          <p className="text-_grey-200">Total Sales: </p>
          <p className="font-[Barlow]">{totalSales + " USD"}</p>
        </div>
      </div>
      <span className="absolute flex justify-center items-center left-3 top-3 w-9 h-9 text-lg text-gray-400  bg-zinc-800 rounded-full  ">
        {number}
      </span>
    </div>
  );
}
