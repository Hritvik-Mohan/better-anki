import React from "react";
import Decks from "./Decks";
import { useLayoutContext } from "@/context/LayoutContext";
import { FaGripHorizontal } from "react-icons/fa";
import { LuStretchHorizontal } from "react-icons/lu";

export default function MyDecks() {
  const { isGridLayout, toggleLayout } = useLayoutContext();
  return (
    <div className="p-6">
      <div className="flex justify-between items-center pr-[2rem]">
        <div className="text-[2.5rem] mb-4">All Decks</div>
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
      </div>
      <Decks />
    </div>
  );
}
