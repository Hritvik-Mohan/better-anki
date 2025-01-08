import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  interface HeatMapCellProps {
    isActive: boolean;
  }

export default function HeatMapCell({isActive}: HeatMapCellProps) {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
      <div className={`w-[10px] aspect-square rounded-[2px] ${isActive ? "bg-green-600" : "bg-gray-200"}`}></div>
      </TooltipTrigger>
      <TooltipContent>
        <p>3 new cards added and 12 cards reviewed on January 5th</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}
