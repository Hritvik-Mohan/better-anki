import React, { createContext, useContext, useState } from 'react';

interface LayoutContextProps {
    isGridLayout: boolean;
    toggleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [isGridLayout, setIsGridLayout] = useState(true);
    const toggleLayout = () => setIsGridLayout((prev) => !prev);
  return (
    <LayoutContext.Provider value={{ isGridLayout, toggleLayout }}>
        {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if (!context) throw new Error("useLayoutContext must be used within a LayoutProvider");
    return context;
}
