"use client";

import { usePathname } from "next/navigation";
import Container from "common/Container";
import Link from "next/link";
import NavBar from "./NavBar";
import SignIn from "./SignInButton";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoginContext } from "components/context/login";
import { useState } from "react";
import { Cart } from "components/Header/Cart";
import { AvatarPopover } from "./AvatarPopover";
import { NotificationPopover } from "./NotificationPopover";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const [avatar, setAvatar] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const { state, changeState } = useLoginContext();

  if (
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification")
  )
    return;

  return (
    <>
      <header className="fixed z-50 w-full bg-black-500">
        <Container>
          <div className={"py-4 flex items-center justify-between"}>
            <Link href={"/"} className=" font-bold text-[40px] text-white">
              Artopia
            </Link>
            <NavBar />
            <SignIn className={clsx(state && "hidden")} />
            <div
              className={clsx("flex items-center gap-8", !state && "hidden")}
            >
              <IoMdSearch
                className={"w-9 h-9 hover:text-_violet-500 transition-colors"}
              />
              <button onClick={() => setIsOpen(true)}>
                <MdOutlineShoppingCart
                  className={"w-9 h-9 hover:text-_violet-500 transition-colors"}
                />
              </button>
              <AvatarPopover image={avatar} />
              <NotificationPopover
                notifications={[
                  "Notification 1",
                  "Notification 2",
                  "Notification 3",
                ]}
              />
            </div>
          </div>
        </Container>
      </header>
      <Cart
        artsToBuy={[]}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
}
