"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Box, Tooltip } from "@mui/material";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setActiveSection } from "@/app/store/slices/navigationSlice";
import { useLenis } from "@/app/ui/components/SmoothScroll";

const SECTIONS = [
  { id: "hero", name: "Início" },
  { id: "pilares", name: "Abordagem" },
  { id: "vivencias", name: "Vivências" },
  { id: "trajetoria", name: "Trajetória" },
  { id: "formacao", name: "Formação" },
  { id: "contato", name: "Contato" },
];

export default function ScrollNavigationButton() {
  const dispatch = useAppDispatch();
  const { prefersReducedMotion } = useAppSelector((state) => state.performance);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [nextSectionName, setNextSectionName] = useState("Abordagem");
  const { scrollTo: lenisScrollTo } = useLenis();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest);

      // Check if user is near the bottom of the page
      const atBottom =
        latest >= 0.92 ||
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(atBottom);

      if (atBottom) {
        setNextSectionName("Voltar ao topo");
        dispatch(setActiveSection("contato"));
        return;
      }

      // Determine next section based on current scroll position
      const currentScroll = window.scrollY + 120;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop > currentScroll) {
          setNextSectionName(SECTIONS[i].name);
          if (i > 0) {
            dispatch(setActiveSection(SECTIONS[i - 1].id));
          }
          return;
        }
      }
      setNextSectionName("Voltar ao topo");
    });

    return () => unsubscribe();
  }, [scrollYProgress, dispatch]);

  const handleNavigation = () => {
    if (isAtBottom) {
      lenisScrollTo(0, { duration: 1.4 });
      return;
    }

    const currentScroll = window.scrollY + 120;
    for (let i = 0; i < SECTIONS.length; i++) {
      const el = document.getElementById(SECTIONS[i].id);
      if (el && el.offsetTop > currentScroll) {
        lenisScrollTo(el, { duration: 1.2 });
        return;
      }
    }

    // If at the end, scroll to top
    lenisScrollTo(0, { duration: 1.4 });
  };

  // Circular progress calculations
  const size = 52;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, sm: 28 },
        right: { xs: 20, sm: 28 },
        zIndex: 40,
      }}
    >
      <Tooltip
        title={isAtBottom ? "Voltar ao início" : `Próxima seção: ${nextSectionName}`}
        placement="left"
        arrow
      >
        <Box
          component={motion.button}
          type="button"
          onClick={handleNavigation}
          aria-label={isAtBottom ? "Voltar ao topo da página" : "Rolar para próxima seção"}
          whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          sx={{
            position: "relative",
            width: size,
            height: size,
            borderRadius: "50%",
            bgcolor: "#ffffff",
            p: 0,
            cursor: "pointer",
            border: "none",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 8px 24px -4px rgba(5, 150, 105, 0.22), 0 2px 6px rgba(0,0,0,0.06)",
            "&:focus-visible": {
              outline: "2px solid #059669",
              outlineOffset: "3px",
            },
          }}
        >
          {/* Circular Progress SVG */}
          <svg
            width={size}
            height={size}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "rotate(-90deg)",
              pointerEvents: "none",
            }}
          >
            {/* Background track circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="rgba(228, 228, 231, 0.9)"
              strokeWidth={strokeWidth}
            />
            {/* Animated progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#059669"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.15s ease-out",
              }}
            />
          </svg>

          {/* Animated Arrow Icon */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#059669",
            }}
          >
            <AnimatePresence mode="wait">
              {isAtBottom ? (
                <motion.div
                  key="arrow-up"
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 450, damping: 28 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="arrow-down"
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 450, damping: 28 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <ArrowDown size={20} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
