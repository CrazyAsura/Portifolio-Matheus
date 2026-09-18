"use client";

import React, { useEffect } from "react";
import { getGPUTier } from "detect-gpu";
import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  setPerformanceState,
  setReducedMotion,
  PerformanceState,
} from "@/app/store/slices/performanceSlice";

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    async function evaluatePerformance() {
      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const prefersReducedMotion = reducedMotionQuery.matches;

      const cores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 4 : 4;
      const memory =
        typeof navigator !== "undefined"
          ? (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4
          : 4;

      try {
        const gpuTier = await getGPUTier();
        if (!isMounted) return;

        const isMobile =
          gpuTier.isMobile || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const isLowPower =
          prefersReducedMotion || gpuTier.tier <= 1 || cores <= 2 || memory <= 2;

        dispatch(
          setPerformanceState({
            isLowPower,
            prefersReducedMotion,
            tier: gpuTier.tier,
            isMobile: !!isMobile,
            fps: gpuTier.fps,
            ready: true,
          })
        );
      } catch (err) {
        console.warn("GPU detection fallback:", err);
        if (!isMounted) return;

        dispatch(
          setPerformanceState({
            isLowPower: prefersReducedMotion || cores <= 2,
            prefersReducedMotion,
            tier: 2,
            isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
            ready: true,
          })
        );
      }

      const handleChange = (e: MediaQueryListEvent) => {
        dispatch(setReducedMotion(e.matches));
      };

      reducedMotionQuery.addEventListener("change", handleChange);
      return () => {
        reducedMotionQuery.removeEventListener("change", handleChange);
      };
    }

    evaluatePerformance();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return <>{children}</>;
}

export function useDevicePerformance(): PerformanceState {
  return useAppSelector((state) => state.performance);
}
