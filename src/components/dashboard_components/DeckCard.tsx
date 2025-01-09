import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLayoutContext } from "@/context/LayoutContext";
import DeckModal from "./DeckModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

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

  const handleViewDeck = () => {};

  return (
    <div
      className={
        isGridLayout ? "flex flex-col gap-4 aspect-auto" : "flex flex-col gap-4"
      }
    >
      <Card
        className={
          isGridLayout
            ? "flex flex-wrap border border-solid hover:bg-[#fbfcff] p-5 rounded-lg justify-between text-gray-600 h-full w-full overflow-auto"
            : "border border-solid hover:bg-[#edf1ff] p-4 rounded-lg items-center justify-between text-gray-600"
        }
      >
        <div className={isGridLayout ? "" : "w-full pl-4 pt-4 pb-4"}>
          <div className="text-black pb-4 text-[1rem] font-medium sm:text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2rem] 2xl:font-normal overflow-hidden">
            {deckTitle}
          </div>
          <div className="flex overflow-hidden text-ellipsis">
            {deckDescription}
          </div>
        </div>
        <div className={
          isGridLayout 
            ? "flex flex-col justify-end w-full"
            : "flex justify-end items-center gap-[2rem]"
          }>
          <Button
            onClick={handleOpenDeck}
            variant="secondary"
            className={isGridLayout
              ? "hover:bg-[rgba(218,224,248,1)] mt-[1rem] w-[100px]"
              : "hover:bg-[rgba(218,224,248,1)] ml-[1rem] w-[100px]"
            }
          >
            Preview
          </Button>
          <div
            className={
              isGridLayout
                ? "flex flex-wrap w-full items-end gap-8 justify-between mt-4"
                : "flex w-full items-center gap-8 justify-end mt-4 pl-4"
            }
          >
            <div className="text-[1rem]">{cardCount} Cards</div>
            {/* <div className="w-[2px] py-6 bg-gray-400 rounded-lg"></div> */}
            <div className={isGridLayout ? "" : "pr-4"}>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BsThreeDotsVertical size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="text-[16px]">
                    Start Session
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-[16px]"
                    onClick={handleViewDeck}
                  >
                    View Deck
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Card>
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
