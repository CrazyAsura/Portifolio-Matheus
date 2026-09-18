"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[99999] pointer-events-none transform-gpu"
      style={{
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, #047857 0%, #059669 35%, #10b981 70%, #34d399 100%)",
        boxShadow: "0 1px 10px rgba(16, 185, 129, 0.5), 0 0 16px rgba(5, 150, 105, 0.35)",
      }}
    >
      <div className="absolute -right-1 -top-[2px] w-3 h-[7px] rounded-full bg-emerald-300 blur-[1px] shadow-[0_0_8px_#34d399]" />
    </motion.div>
  );
}
