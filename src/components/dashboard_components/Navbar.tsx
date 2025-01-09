import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FaGripHorizontal } from "react-icons/fa";
import { LuStretchHorizontal } from "react-icons/lu";
import { useLayoutContext } from "@/context/LayoutContext";
import useIsMobile from "@/utils/useIsMobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcMindMap } from "react-icons/fc";

export default function Navbar() {
  const { isGridLayout, toggleLayout } = useLayoutContext();
  const isMobile = useIsMobile();
  // const handleLayout = () => {
  //   if (isGridLayout == true) setIsGridLayout(false);
  //     else setIsGridLayout(true);
  // }
  return (
    <div>
      <div className="p-4 flex justify-evenly gap-[1rem]">
        {isMobile && (
          <div className="ml-2 flex items-center">
            <FcMindMap size="1.8rem" />
          </div>
        )}
        <div className="flex items-center text-base bg-[rgba(243,243,243,1)] w-[85%] rounded-lg font-semibold">
          <div className="text-gray-500 pl-4">
            <IoSearch size="1.15rem" />
          </div>
          <input
            className="bg-[rgba(243,243,243,1)] w-[85%] p-4 outline-none"
            placeholder={isMobile ? "Search" :"Search decks, cards, tags.."}
          />
        </div>
        {!isMobile && (
          <div className="flex items-center" onClick={toggleLayout}>
            {isGridLayout ? (
              <button>
                <FaGripHorizontal size="1.5rem" />
              </button>
            ) : (
              <button>
                <LuStretchHorizontal size="1.5rem" />
              </button>
            )}
          </div>
        )}
        <div>
          <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center min-w-[6rem] max-w-[6rem] bg-[rgba(218,224,248,1)] hover:bg-[rgb(201,211,252)] text-[rgba(77,110,213,1)] w-[15%] p-4 rounded-lg font-semibold">
                <IoIosAdd size="2rem" />
                New
              </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel className="text-[16px]">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/> */}
              <DropdownMenuItem className="text-[16px]">
                New Deck
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-center my-4 mx-6 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div>
    </div>
  );
}
