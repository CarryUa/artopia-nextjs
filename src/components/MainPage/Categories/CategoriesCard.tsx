import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
type CategoriesCardProps = {
  image: StaticImageData;
  subImage: StaticImageData;
  alt: string;
  children: string;
  href: string | URL;
};

export default function CategoriesCard({
  image,
  children,
  href,
  subImage,
  alt,
}: CategoriesCardProps) {
  return (
    <Link className="max-w-[300] max-h-[355] relative bg-zinc-700" href={href}>
      <Image className="" height={300} width={350} src={image} alt={alt} />
      <Image
        className="absolute left-[110px] top-[100px]"
        height={122}
        width={122}
        src={subImage}
        alt={alt + " Sub Image"}
      />
    </Link>
  );
}
