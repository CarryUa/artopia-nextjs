"use client";

import {
  Transition,
  Dialog,
  Button,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AvatarPopover } from "./AvatarPopover";
import { NotificationPopover } from "./NotificationPopover";
import { useAuth } from "components/context/login";
import avatar from "/public/PopularAvatar.png";
import LogoutButton from "./LogoutButton";
import SignInButton from "./SignInButton";
export const BurgerMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { isLoggedIn, changeIsLoggedIn } = useAuth();
  const pathname = usePathname();
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter={"ease-out transition"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in transition"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div className={"fixed inset-0 z-[90] bg-astra-950/30"} aria-hidden />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter={"ease-out transition transform duration-500"}
          enterFrom={"translate-x-full"}
          enterTo={"translate-x-0"}
          leave={"ease-in transition transform"}
          leaveFrom={"opacity-100 translate-x-0"}
          leaveTo={"opacity-0 translate-x-full"}
        >
          <DialogPanel
            className={clsx(
              "fixed right-0 top-0 z-[100] h-full max-h-full min-w-80 max-w-full overflow-y-auto overflow-x-hidden bg-astra-950 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
            )}
          >
            <div
              className={
                "relative bg-_violet-300 h-full overflow-hidden px-3 py-14"
              }
            >
              <button
                className={"absolute right-4 top-5 outline-none"}
                onClick={onClose}
              >
                <FiX
                  className={
                    "size-6 transition-colors duration-300 hover:text-_grey-200"
                  }
                />
              </button>
              <div className={"flex flex-col gap-8"}>
                <div className="flex gap-2 items-center">
                  <IoMdSearch
                    className={
                      "w-9 h-9 hover:text-_violet-500 transition-colors"
                    }
                  />
                  <p className="text-2xl font-semibold">Search</p>
                </div>

                <Link className="flex gap-2" href={"/cart"} onClick={onClose}>
                  <MdOutlineShoppingCart
                    className={
                      "w-9 h-9 hover:text-_violet-500 transition-colors"
                    }
                  />
                  <p className="text-2xl font-semibold">Cart</p>
                </Link>

                <AvatarPopover image={avatar} />

                <NotificationPopover
                  notifications={[
                    "Notification 1",
                    "Notification 2",
                    "Notification 3",
                  ]}
                />
                {isLoggedIn ? <LogoutButton /> : <SignInButton />}
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};
