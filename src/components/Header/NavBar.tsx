"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
const links = [
  {
    url: "/discover",
    title: "Discover",
  },
  {
    url: "/discover",
    title: "Discover",
  },
  {
    url: "/discover",
    title: "Discover",
  },
  {
    url: "/discover",
    title: "Discover",
  },
];
export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-16">
      <Link
        href={"/discover"}
        className={clsx(
          "text-[22px] font-semibold hover:border-b transition border-_violet-500",
          {
            "text-_violet-500": pathname === "/discover",
          }
        )}
      >
        Discover
      </Link>
      <Link
        href={"/forum"}
        className={clsx(
          "text-[22px] font-semibold hover:border-b transition border-_violet-500",
          {
            "text-_violet-500": pathname === "/forum",
          }
        )}
      >
        Forum
      </Link>
      <Link
        href={"/news"}
        className={clsx(
          "text-[22px] font-semibold hover:border-b transition border-_violet-500",
          {
            "text-_violet-500": pathname === "/news",
          }
        )}
      >
        News
      </Link>
      <Link
        href={"/blog"}
        className={clsx(
          "text-[22px] font-semibold hover:border-b transition border-_violet-500",
          {
            "text-_violet-500": pathname === "/blog",
          }
        )}
      >
        Blog
      </Link>
    </nav>
  );
}
