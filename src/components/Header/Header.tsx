"use client";

import { usePathname } from "next/navigation";
import Container from "common/Container";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import SignIn from "./SignInButton";
import avatar from "/public/PopularAvatar.png";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAuth } from "components/context/login";
import { useState } from "react";
import { Cart } from "components/Header/Cart";
import { AvatarPopover } from "./AvatarPopover";
import { NotificationPopover } from "./NotificationPopover";
import clsx from "clsx";
import { BurgerMenu } from "./BurgerMenu";
import bars from "./static/burgerBars.svg";
export default function Header() {
  const pathname = usePathname();
  let [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, changeIsLoggedIn } = useAuth();

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
            {!isLoggedIn ? <SignIn /> : <AvatarPopover image={avatar} />}

            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <Image
                className="max-w-10 max-h-10"
                src={bars}
                alt="Burger Bars"
              />
            </button>
          </div>
        </Container>
      </header>
      <BurgerMenu open={isOpen} onClose={() => setIsOpen(false)} />
      <Cart />
    </>
  );
}
