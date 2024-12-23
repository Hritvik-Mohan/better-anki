import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import DeckModal from './deckModal';

interface DeckCardProps {
  deckTitle: string;
  deckDescription: string;
  cardCount: number;
}

const DeckCard: React.FC<DeckCardProps> = ({ deckTitle, deckDescription, cardCount }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDeck = () => setOpen(true);
  const handleCloseDeck = () => setOpen(false);

  return (
    <div className="flex flex-col gap-4">
      <div 
        className="flex bg-[rgba(201,211,252)] p-4 rounded-lg items-center justify-between text-gray-600"
        onClick={handleOpenDeck}
      >
        <div className="pl-4">
          <div className="text-black">{deckTitle}</div>
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
      {open && <DeckModal closeModal={handleCloseDeck} />}
    </div>
  );
};

export default DeckCard;
