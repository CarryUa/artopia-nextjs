import { Popover, Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

import NoAvatar from "./static/noavatar.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useAuth } from "components/context/login";
import clsx from "clsx";

type AvatarPopoverProps = {
  image: StaticImageData;
};

export const AvatarPopover = ({ image }: AvatarPopoverProps) => {
  const { isLoggedIn, changeIsLoggedIn } = useAuth();
  return (
    <Popover as={"div"} className="relative leading-none">
      {({ open }) => (
        <>
          <Popover.Button className={"flex gap-2"}>
            <span
              className={"w-9 h-9 rounded-full relative overflow-hidden block"}
            >
              <Image
                src={image ? image : NoAvatar}
                alt={"Avatar"}
                fill
                className={"object-cover"}
              />
            </span>
            <p className="text-2xl font-semibold">Profile</p>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute sm:right-0 -right-[50px] z-10 mt-3 max-w-[200px] transform px-4 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className=" bg-_grey-500 p-7 text-black-500 flex flex-col gap-3">
                  <Link
                    className="py-3 px-1 transition-all hover:bg-_violet-400"
                    href={"/profile"}
                  >
                    Profile
                  </Link>
                  <Link href={"/settings"}>Settings</Link>
                  <LogoutButton
                    className={clsx(
                      "bg-_violet-500 hover:bg-_violet-400",
                      !isLoggedIn && "hidden"
                    )}
                  ></LogoutButton>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
