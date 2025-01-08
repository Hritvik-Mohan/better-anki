import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export default function HeatMapCell() {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
      <div className='w-[10px] aspect-square bg-green-600 rounded-[2px]'></div>
      </TooltipTrigger>
      <TooltipContent>
        <p>3 new cards added and 12 cards reviewed on January 5th</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}
