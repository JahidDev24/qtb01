/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useMemo } from "react";
import { cn } from "@/lib/util";

interface ParallaxScrollProps {
  children: React.ReactNode[];
  className?: string;
}

export const ParallaxScroll = ({ children, className }: ParallaxScrollProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  // Random axis + amount for each child
  const randomConfigs = useMemo(() => {
    return children.map(() => {
      const axis = Math.random() > 0.5 ? "x" : "y";
      const amount = Math.floor(Math.random() * 200 + 100); // 100–300px
      return { axis, amount };
    });
  }, [children]);

  // Call useTransform at top level, one for each child
  const transforms = randomConfigs.map(({ axis, amount }) => {
    const output = [0, axis === "x" ? amount : -amount];
    const transform = useTransform(scrollYProgress, [0, 1], output);
    return { axis, transform };
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[40rem] w-full overflow-y-auto scrollbar-hide",
        className
      )}
    >
      <div className="max-w-5xl mx-auto gap-1 py-10 px-5">
        {children.map((child, idx) => {
          const { axis, transform } = transforms[idx];

          return (
            <motion.div
              key={`parallax-${idx}`}
              {...(axis === "x" ? { style: { x: transform } } : { style: { y: transform } })}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
