import React from "react";
import Decks from "./decks";

export default function MyDecks() {
  return (
    <div className="p-6">
      <div className="text-[2.5rem] mb-4">All Decks</div>
      <Decks/>
    </div>
  );
}
