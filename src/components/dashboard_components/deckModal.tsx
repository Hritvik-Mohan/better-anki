import React from 'react';

interface DeckModalProps {
  closeModal: () => void; // Type for the `closeModal` prop
}

const DeckModal: React.FC<DeckModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button 
            onClick={closeModal} 
            className="text-red-500 hover:text-red-700"
          >
            Close
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Modal Contents</h2>
          <p>This is your modal content.</p>
        </div>
      </div>
    </div>
  );
};

export default DeckModal;
