"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setPreloaderActive, setPreloaderProgress } from "@/app/store/slices/uiSlice";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();
  const { preloaderActive: isLoading, preloaderProgress: progress } = useAppSelector(
    (state) => state.ui
  );

  useEffect(() => {
    setMounted(true);
    // Disable body scroll while preloading
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1400; // 1.4s smooth load time

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(Math.round((elapsed / duration) * 100), 100);
      dispatch(setPreloaderProgress(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          dispatch(setPreloaderActive(false));
          document.body.style.overflow = "";
        }, 300);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [dispatch]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#090b0e] text-white select-none pointer-events-auto"
        >
          {/* Subtle Ambient Emerald Glow in background */}
          <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -top-10" />
          <div className="absolute w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none -bottom-10" />

          {/* Central Logo & Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated M Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 p-0.5 shadow-2xl shadow-emerald-950/60 ring-1 ring-white/15 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-[#0c1015] flex items-center justify-center relative overflow-hidden">
                  {/* Subtle inner reflection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />

                  {/* SVG Monogram M */}
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-500"
                  >
                    <defs>
                      <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 22 78 L 22 24 L 50 60 L 78 24 L 78 78"
                      stroke="url(#preloader-grad)"
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Name and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] text-zinc-200 uppercase">
                Matheus Mendonça
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-400/90 tracking-[0.15em] uppercase font-mono mt-1">
                Psicologia & Humanização
              </p>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-56 flex flex-col items-center gap-2">
              <div className="w-full h-1 bg-zinc-800/80 rounded-full overflow-hidden p-[1px] ring-1 ring-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_10px_#10b981]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="flex justify-between w-full px-0.5 text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-500 uppercase tracking-widest text-[10px]">Carregando</span>
                <span className="text-emerald-400 font-semibold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom subtle detail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-8 text-[11px] text-zinc-600 font-mono tracking-wider"
          >
            UniNassau • CRP em Formação
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
