import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type ImageComponentProps = {
  alt: string;
  className?: string;
  image: string | StaticImageData;
};
export default function ImageComponent({
  className,
  image,
  alt,
}: ImageComponentProps) {
  return (
    <div className={clsx("pb-[100%] relative", className)}>
      <Image fill className="object-cover" src={image} alt={alt}></Image>
    </div>
  );
}
