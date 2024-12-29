import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLayoutContext } from "@/context/LayoutContext";
import DeckModal from "./DeckModal";

interface DeckCardProps {
  deckTitle: string;
  deckDescription: string;
  cardCount: number;
}

const DeckCard: React.FC<DeckCardProps> = ({
  deckTitle,
  deckDescription,
  cardCount,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenDeck = () => setOpen(true);
  const handleCloseDeck = () => setOpen(false);

  const { isGridLayout } = useLayoutContext();

  return (
    <div
      className={
        isGridLayout
          ? "flex flex-col gap-4 aspect-square"
          : "flex flex-col gap-4"
      }
    >
      <div
        className={
          isGridLayout
            ? "flex flex-wrap bg-[rgba(201,211,252)] p-5 rounded-lg justify-between text-gray-600 h-full"
            : "flex bg-[rgba(201,211,252)] p-4 rounded-lg items-center justify-between text-gray-600"
        }
        onClick={handleOpenDeck}
      >
        <div className={isGridLayout ? "" : "pl-4 pt-4 pb-4"}>
          <div className="text-black text-[1.5rem]">
            {deckTitle}
          </div>
          <div className="flex flex-wrap text-ellipsis">{deckDescription}</div>
        </div>
        <div className={isGridLayout ? "flex w-full items-center gap-8 justify-between mt-4 pl-4": "flex w-full items-center gap-8 justify-end mt-4 pl-4"}>
          <div className="text-[1rem]">{cardCount} Cards</div>
          {/* <div className="w-[2px] py-6 bg-gray-400 rounded-lg"></div> */}
          <div className="pr-4">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      {open && (
        <DeckModal
          closeModal={handleCloseDeck}
          title={deckTitle}
          description={deckDescription}
          cardCount={cardCount}
        />
      )}
    </div>
  );
};

export default DeckCard;
