"use client";

import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDevicePerformance } from "@/app/lib/performance";

const MotionMuiButton = motion.create(MuiButton);

interface CraftButtonProps extends Omit<MuiButtonProps, "variant" | "size"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export default function CraftButton({
  variant = "primary",
  size = "md",
  href,
  external = false,
  leftIcon,
  rightIcon,
  children,
  sx,
  ...props
}: CraftButtonProps) {
  const { prefersReducedMotion } = useDevicePerformance();

  const sizeStyles = {
    sm: { fontSize: "0.75rem", px: 2, py: 0.75, borderRadius: "9999px" },
    md: { fontSize: "0.875rem", px: 2.75, py: 1.25, borderRadius: "9999px" },
    lg: { fontSize: "1rem", px: 3.5, py: 1.5, borderRadius: "9999px" },
  };

  const variantStyles = {
    primary: {
      bgcolor: "#059669",
      color: "#ffffff",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.25), 0 2px 6px 0 rgba(5,150,105,0.2)",
      "&:hover": {
        bgcolor: "#047857",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.3), 0 4px 12px 0 rgba(5,150,105,0.25)",
      },
    },
    secondary: {
      bgcolor: "#ffffff",
      color: "#18181b",
      border: "1px solid rgba(228, 228, 231, 0.9)",
      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.8), 0 1px 2px 0 rgba(0,0,0,0.05)",
      "&:hover": {
        bgcolor: "#f4f4f5",
        borderColor: "#d4d4d8",
      },
    },
    outline: {
      bgcolor: "transparent",
      color: "#047857",
      border: "1px solid rgba(5, 150, 105, 0.6)",
      "&:hover": {
        bgcolor: "rgba(5, 150, 105, 0.05)",
        borderColor: "#059669",
      },
    },
    ghost: {
      bgcolor: "transparent",
      color: "#52525b",
      "&:hover": {
        bgcolor: "rgba(5, 150, 105, 0.06)",
        color: "#047857",
      },
    },
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25, bounce: 0.12 },
      };

  const combinedSx = {
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...sx,
  };

  if (href) {
    if (external) {
      return (
        <MotionMuiButton
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={leftIcon}
          endIcon={rightIcon}
          sx={combinedSx}
          {...motionProps}
          {...(props as any)}
        >
          {children}
        </MotionMuiButton>
      );
    }

    return (
      <MotionMuiButton
        component={Link}
        href={href}
        startIcon={leftIcon}
        endIcon={rightIcon}
        sx={combinedSx}
        {...motionProps}
        {...(props as any)}
      >
        {children}
      </MotionMuiButton>
    );
  }

  return (
    <MotionMuiButton
      startIcon={leftIcon}
      endIcon={rightIcon}
      sx={combinedSx}
      {...motionProps}
      {...(props as any)}
    >
      {children}
    </MotionMuiButton>
  );
}

