import React from "react";
import HeatMap from "./headmap/HeatMap";
import decksData from "@/utils/decksData";
import DeckCard from "./DeckCard";
import { useLayoutContext } from "@/context/LayoutContext";
import { FaGripHorizontal } from "react-icons/fa";
import { LuStretchHorizontal } from "react-icons/lu";

export default function Main() {
  const { isGridLayout, toggleLayout } = useLayoutContext();
  return (
    <div className="p-6">
      <div className="text-[2.5rem] mb-4">Dashboard</div>
      <div className="p-6">
        <div className="text-[2rem] font-thin">Activity</div>
        <div className="flex justify-center my-4 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div>
        <HeatMap />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center pr-[2rem">
          <div className="text-[2rem] font-thin">Current working decks</div>
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
        <div className="flex justify-center my-4 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            isGridLayout
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              : "flex flex-col gap-4"
          }`}
        >
          {decksData.slice(0, 4).map((deck) => (
            <DeckCard
              key={deck.id}
              deckTitle={deck.title}
              deckDescription={deck.description}
              cardCount={deck.cardCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
