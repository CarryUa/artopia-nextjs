import Image from "next/image";
import Link from "next/link";
import Rocket from "/public/RocketLaunch.svg";
export default function ViewRankingButton() {
  return (
    <Link
      href={"#"}
      className="flex text-nowrap py-5
       items-center px-10 gap-3 border border-_violet-400 max-h-[40px] max-w-[230px]"
    >
      <Image height={20} width={20} alt="#" src={Rocket} className="size-5" />
      <p>View Rankings</p>
    </Link>
  );
}
