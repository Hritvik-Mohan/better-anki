import React, { useEffect, useState, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface DeckModalProps {
  closeModal: () => void; // Function to close the modal
  title: string; // Deck title
  description: string; // Deck description
  cardCount: number; // Number of cards
}

const DeckModal: React.FC<DeckModalProps> = ({
  closeModal,
  title,
  description,
  cardCount,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setTimeout(() => setIsVisible(true), 10);

    // Handle clicks outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClose = () => {
    setIsVisible(false); // Start the fade-out animation
    setTimeout(closeModal, 300); // Close the modal after the animation duration
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <div className="flex justify-between items-baseline">
          <h2 className="text-[2rem] mb-4">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoCloseCircleOutline size='2rem'/>
          </button>
        </div>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Number of Cards:</strong> {cardCount}
        </p>
      </div>
    </div>
  );
};

export default DeckModal;
