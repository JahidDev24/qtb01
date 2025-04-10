"use client";

import { motion } from 'framer-motion';

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
    mywidth? : string; 
};

const AnimationContainer2 = ({ children, className, reverse, delay , mywidth }: AnimationContainerProps) => {
    return (
        <motion.div
        className={className}
  initial={{ opacity: 0, y: reverse ? -20 : 20, width: "75%" }}
  whileInView={{ opacity: 1, y: 0, width: mywidth }}
  viewport={{ once: false }}
  transition={{
    duration: 0.8,
    delay: delay,
    ease: [0.25, 0.1, 0.25, 1],
    type: "tween"
  }}// tween gives smoother interpolation than spring
     
      >
        {children}
      </motion.div>
    )
};

export default AnimationContainer2