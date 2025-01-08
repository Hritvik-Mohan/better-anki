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
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
