import Image, { StaticImageData } from "next/image";
type TreandingSalesCardProps = {
  creator: string;
  creatorAvatar: StaticImageData;
  name: string;
  image: StaticImageData;
  price: number | string;
};
export default function TreandingSalesCards({
  creator,
  creatorAvatar,
  name,
  image,
  price,
}: TreandingSalesCardProps) {
  return (
    <div className="w-[320px] h-[400px] relative rounded-3xl overflow-hidden">
      <Image fill src={image} alt="NFT"></Image>
      <div className="absolute bottom-0 w-full h-1/4 bg-opacity-95 flex flex-col gap-2 bg-[#343c3c] p-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex gap-3">
          <Image
            width={42}
            height={42}
            src={creatorAvatar}
            alt="Creator Avatar"
          />
          <div>
            <p className=" text-[#777e90]  text-xs">Creator</p>
            <h4 className="text-lg ">{creator}</h4>
          </div>
          <div className="absolute right-10">
            <p className=" text-[#777e90]  text-xs">Cost</p>
            <h4 className="text-lg ">{price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
