import Image from "next/image";
import Link from "next/link";
import Rocket from "/public/RocketLaunch.svg";
export default function ViewRankingButton() {
  return (
    <Link
      href={"#"}
      className="flex text-nowrap py-4
       items-center px-10 gap-3 border border-_violet-400 w-full sm:w-auto justify-center  "
    >
      <Image alt="#" src={Rocket} className="size-5" />
      <p>View Rankings</p>
    </Link>
  );
}
