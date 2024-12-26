import React from "react";
import Decks from "./Decks";

export default function Main() {
  return (
    <div className="p-6">
      <div className="text-[2.5rem] mb-4">Dashboard</div>
      <div className="p-6">
        <div className="text-[2rem] font-thin">Decks</div>
        <div className="flex justify-center my-4 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div>
        <Decks />
      </div>
    </div>
  );
}
