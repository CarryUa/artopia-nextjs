import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
type CategoriesCardProps = {
  image: StaticImageData;
  text: string;
  href: string | URL;
};

export default function CategoriesCard({
  image,
  text,
  href,
}: CategoriesCardProps) {
  return (
    <Link className="relative max-w-[300] max-h-[355] bg-zinc-700" href={href}>
      <Image height={300} width={350} src={image} alt=""></Image>
    </Link>
  );
}
