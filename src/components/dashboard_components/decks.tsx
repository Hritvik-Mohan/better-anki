import React from "react";
import DeckCard from "./deck_card";

export default function Decks() {

  // const [selectedDeck, setSelectedDeck] = useState<{
  //   id: number;
  //   title: string;
  //   description: string;
  //   cardCount: number;
  // } | null>(null);

  const decks = [
    {
      id: 1,
      title: "Deck 1",
      description: "Introduction to React",
      cardCount: 20,
    },
    { id: 2, title: "Deck 2", description: "Advanced React", cardCount: 15 },
    { id: 3, title: "Deck 3", description: "React Hooks", cardCount: 30 },
  ];

  // const handleDeckClick = (deck: typeof decks[0]) => {
  //   console.log(deck);
  //   setSelectedDeck(deck);
  //   setOpen(true);
  // }

  // console.log(selectedDeck);

  return (
    <div className="p-6">
      <div className="text-[2.5rem] mb-4">Decks</div>
      <div className="flex flex-col gap-4">
        {decks.map((deck) => (
          <DeckCard
            key={deck.id}
            deckTitle={deck.title}
            deckDescription={deck.description}
            cardCount={deck.cardCount}
          />
        ))}
      </div>
    </div>
  );
}
