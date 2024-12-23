import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { PiCardsThreeFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FcMindMap } from "react-icons/fc";
import Link from "next/link";

interface SidebarProps {
  onChangeSection: (
    sections: "myDashboard" | "myDecks" | "mySettings" | "logout"
  ) => void;
}

export default function Sidebar({ onChangeSection }: SidebarProps) {
  return (
    <div className="pl-2">
      <Link href="/">
        <h1 className="flex items-center ml-4 mt-6">
          <span className="font-bold">Better</span>
          <span>Anki</span>
          <span className="ml-2">
            <FcMindMap size="1.5rem" />
          </span>
        </h1>
      </Link>
      <div className="w-[100px] bg-[rgba(218,224,248,1)] h-[100px] rounded-full m-8 border-4 border-solid border-white flex items-center justify-center text-center text-[3rem] text-[rgba(77,110,213,1)]">
        H
      </div>
      <div>
        <div className="text-[rgba(165,165,165,1)] mx-4 my-2 text-[11px] font-semibold">
          STUDY
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onChangeSection("myDashboard")}
              className="flex items-center gap-1 hover:bg-[rgba(233,233,233,1)] mx-4 px-4 py-2 rounded-lg text-left font-medium"
            >
              <BiSolidDashboard />
              Dashboard
            </button>
            <button
              onClick={() => onChangeSection("myDecks")}
              className="flex items-center gap-1 hover:bg-[rgba(233,233,233,1)] mx-4 px-4 py-2 rounded-lg text-left font-medium"
            >
              <PiCardsThreeFill />
              My Decks
            </button>
            <button
              onClick={() => onChangeSection("mySettings")}
              className="flex items-center gap-1 hover:bg-[rgba(233,233,233,1)] mx-4 px-4 py-2 rounded-lg text-left font-medium"
            >
              <IoMdSettings />
              Settings
            </button>
            <button
              onClick={() => onChangeSection("logout")}
              className="hover:bg-[rgba(233,233,233,1)] mx-4 px-4 py-2 rounded-lg text-left font-medium"
            >
              <Link href="/" className="flex items-center gap-1">
                <TbLogout2 />
                Logout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
