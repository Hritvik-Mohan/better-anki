import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Decks() {
  return (
    <div className="p-6">
      <div className="text-[2.5rem] mb-4">Decks</div>
      <div className="flex flex-col gap-4">
        <div className="flex bg-[rgba(201,211,252)] p-4 rounded-lg items-center justify-between text-gray-600">
          <div className="pl-4">
            <div className=" text-black">Deck 1</div>
            <div>Description</div>
          </div>
          <div className="flex items-center gap-8 justify-evenly">
            <div className="text-[1rem]">123 Cards</div>
            <div className="w-[2px] py-6 bg-gray-400 rounded-lg"></div>
            <div className="pr-4">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
