import Image from "next/image";
import Avatar from "./static/artist-avatar.png";
import Link from "next/link";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

type ProfileProps = {
  id?: string;
};

export default function Profile({ id }: ProfileProps) {
  return (
    <div className={"flex flex-col items-center -translate-y-[67px]"}>
      <div
        className={
          "relative rounded-full overflow-hidden w-[134px] h-[134px] mb-6"
        }
      >
        <Image
          src={Avatar}
          alt={"Avatar Image"}
          fill
          className={"object-cover"}
        />{" "}
      </div>

      <h4 className={"font-semibold text-2xl mb-3"}>John Doe</h4>
      <p className={"text-xl mb-2"}>3d artist and modeler</p>
      <p className={"text-[15px] flex gap-4 items-center mb-2.5"}>
        <Link href={"#"} className="flex">
          Portfolio <PiLinkSimpleBold />
        </Link>
      </p>
      <Link
        href={
          "https://www.google.pl/maps/place/%D0%94%D1%83%D0%B1%D0%B0%D0%B9+-+%D0%94%D1%83%D0%B1%D0%B0%D1%97+-+%D0%9E%D0%B1'%D1%94%D0%B4%D0%BD%D0%B0%D0%BD%D1%96+%D0%90%D1%80%D0%B0%D0%B1%D1%81%D1%8C%D0%BA%D1%96+%D0%95%D0%BC%D1%96%D1%80%D0%B0%D1%82%D0%B8/@25.0760224,55.2274879,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?entry=ttu"
        }
      >
        <p className={"flex items-center gap-3 mb-6"}>
          Dubai, United Arab Emirates{" "}
          <span>
            <IoLocationOutline />
          </span>
        </p>
      </Link>

      <button
        className={
          "flex hover:bg-_violet-700 transition-colors gap-4 font-medium justify-center items-center px-[52px] py-3 bg-_violet-950 rounded mb-10"
        }
      >
        <FiUserCheck />
        <span>Follow</span>
      </button>
      <div
        className={
          "flex gap-2 justify-between py-4 border-t border-b w-full mx-1.5 mb-7"
        }
      >
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>46</span>
          <span className={"font-medium text-sm"}>Followers</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>27</span>
          <span className={"font-medium text-sm"}>Following</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>142</span>
          <span className={"font-medium text-sm"}>Items</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>342</span>
          <span className={"font-medium text-sm"}>Likes</span>
        </div>
      </div>
      <Link
        href={`/artist/${id}/upload`}
        className={
          "flex gap-4 font-medium items-center hover:bg-_violet-700 transition-colors justify-center px-[52px] py-3 bg-_violet-950 rounded mb-10 w-full"
        }
      >
        <FiUpload />
        <span>Upload Product</span>
      </Link>
    </div>
  );
}
