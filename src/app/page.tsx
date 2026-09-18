"use client";

import React from "react";
import { Box } from "@mui/material";
import Hero from "@/app/ui/sections/hero";
import BentoPillars from "@/app/ui/sections/bento-pillars";
import VerticalScrollCarousel from "@/app/ui/sections/vertical-scroll-carousel";
import Timeline from "@/app/ui/sections/timeline";
import Courses from "@/app/ui/sections/courses";
import Social from "@/app/ui/sections/social";
import ScrollNavigationButton from "@/app/ui/components/ScrollNavigationButton";

export default function Page() {
  return (
    <Box component="main" sx={{ width: "100%", overflow: "clip", position: "relative" }}>
      <Hero />
      <BentoPillars />
      <VerticalScrollCarousel />
      <Timeline />
      <Courses />
      <Social />
      <ScrollNavigationButton />
    </Box>
  );
}
