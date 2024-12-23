import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

export default function Navbar() {
  return (
    <div>
      <div className="p-4 flex justify-evenly gap-[1rem]">
        <div className="flex items-center text-base bg-[rgba(243,243,243,1)] w-[85%] rounded-lg font-semibold">
          <div className="text-gray-500 pl-4">
            <IoSearch size="1.15rem" />
          </div>
          <input
            className="bg-[rgba(243,243,243,1)] w-[85%] p-4 outline-none"
            placeholder="Search decks, cards, tags.."
          />
        </div>
        <div>
          <button className="flex items-center justify-center min-w-[6rem] max-w-[6rem] bg-[rgba(218,224,248,1)] hover:bg-[rgb(201,211,252)] text-[rgba(77,110,213,1)] w-[15%] p-4 rounded-lg font-semibold">
            <IoIosAdd size="2rem" />
            New
          </button>
        </div>
      </div>
      <div className="flex justify-center my-4 mx-6 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div>
    </div>
  );
}
