"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { AnimatedServiceCard } from "../home/ui/AnimatedServiceCard";

export const HoverLayoutGrid = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-2 mt-16 gap-4",
        className
      )}
    >
      {cards.map((item, idx) => (
        <div
          key={item?.id}
          className={cn(
            "relative block p-2 h-full w-full transition-all duration-300", 
            hoveredIndex === idx ? "scale-[1.02]" : ""
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div 
            className={cn(
              "absolute inset-2 rounded-[var(--borderRadius)] transition-all duration-100",
              hoveredIndex === idx ? "shadow-xl dark:shadow-[0_0_20px_rgba(80,80,80,0.4)]" : ""
            )}
          />
          <AnimatedServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};
