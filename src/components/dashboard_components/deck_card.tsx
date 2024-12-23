import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

interface DeckCardProps {
  onClick: () => void; // Function triggered on click
  deckTitle: string; // Title of the deck
  deckDescription: string; // Description of the deck
  cardCount: number; // Number of cards in the deck
}


const DeckCard: React.FC<DeckCardProps> = ({
  // deckId, 
  deckTitle,
  deckDescription,
  cardCount}) => {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex bg-[rgba(201,211,252)] p-4 rounded-lg items-center justify-between text-gray-600">
      <div className="pl-4">
        <div className=" text-black">{deckTitle}</div>
        <div>{deckDescription}</div>
      </div>
      <div className="flex items-center gap-8 justify-evenly">
        <div className="text-[1rem]">{cardCount} Cards</div>
        <div className="w-[2px] py-6 bg-gray-400 rounded-lg"></div>
        <div className="pr-4">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  </div>
  )
}

export default DeckCard;
