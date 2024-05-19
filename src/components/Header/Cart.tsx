import { Transition, Popover } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { TbX } from "react-icons/tb";

type Art = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

// type CartProps = {
//   isOpen: boolean;
//   closeModal: () => void;
//   artsToBuy: Art[] | [];
// };

export const Cart = () => {
  return (
    <Popover>
      <span className={""}></span>
    </Popover>
  );
};

export function ArtCard(art: Art) {
  return (
    <div>
      <button>
        <TbX />
      </button>
      <div className={"relative"}>
        <Image
          src={art.image}
          alt={art.title}
          fill
          className={"object-cover"}
        />
      </div>
      <div>
        <h3>{art.title}</h3>
        <p>{art.description}</p>
        <span>{art.price}</span>
      </div>
    </div>
  );
}
