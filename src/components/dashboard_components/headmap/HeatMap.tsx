import React from "react";
import HeatMapCell from "./HeatMapCell";

export default function HeatMap() {
  const cells = Array.from({ length: 365 }, (_, i) => i)
  return (
    <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-1 min-w-[800px] max-w-[800px] my-4 overflow-x-auto">
          {cells.map((cell, index) => (
            <HeatMapCell key={index}/>
          ))}
        </div>
    </div>
  );
}
