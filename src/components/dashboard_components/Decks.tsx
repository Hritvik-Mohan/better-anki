import React from "react";
import DeckCard from "./DeckCard";
import { useLayoutContext } from "@/context/LayoutContext";
import decksData from "@/utils/decksData";

export default function Decks({}) {
  const { isGridLayout } = useLayoutContext();

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isGridLayout
          ? "grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-8"
          : "flex flex-col gap-4"
      }`}
    >
      {decksData.map((deck) => (
        <DeckCard
          key={deck.id}
          deckTitle={deck.title}
          deckDescription={deck.description}
          cardCount={deck.cardCount}
        />
      ))}
    </div>
  );
}
