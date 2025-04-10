"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
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

  // Generate random transform direction and range for each child
  const transforms = useMemo(() => {
    return children.map(() => {
      const axis = Math.random() > 0.5 ? "x" : "y";
      const amount = Math.floor(Math.random() * 200 + 100); // random 100–300 px
      const range = [0, 1];
      const output = [0, axis === "x" ? amount : -amount];
      return { axis, transform: useTransform(scrollYProgress, range, output) };
    });
  }, [children.length]);

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
          const style = axis === "x" ? { x: transform } : { y: transform };

          return (
            <motion.div style={style} key={`parallax-${idx}`}>
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
