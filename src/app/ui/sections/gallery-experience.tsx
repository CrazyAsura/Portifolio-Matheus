"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  ButtonBase,
  Chip,
  Stack,
} from "@mui/material";
import { Camera } from "lucide-react";
import { GALLERY_ITEMS } from "@/app/lib/data";
import { useDevicePerformance } from "@/app/lib/performance";

export default function GalleryExperience() {
  const { prefersReducedMotion } = useDevicePerformance();
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", "Clínica", "Acadêmico", "Prática", "Comunicação", "Pesquisa"];

  const filteredItems =
    activeCategory === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <Box
      component="section"
      id="vivencias"
      sx={{
        py: { xs: 10, lg: 14 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "#ffffff",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            maxWidth: 720,
            mb: { xs: 3.5, md: 4.5 },
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#047857",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Camera size={14} />
            Vivências Acadêmicas
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Vivências que contribuem para minha formação.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Vivências acadêmicas, práticas supervisionadas, pesquisa científica e atividades de divulgação do conhecimento.
          </Typography>
        </Box>

        {/* Category Filter Pills — Dedicated Shelf with Generous Spacing */}
        <Box
          sx={{
            mb: { xs: 5, md: 6 },
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            py: 0.5,
            /* Ocultar barra de rolagem mantendo a fluidez */
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              p: 0.75,
              borderRadius: "9999px",
              bgcolor: "rgba(244, 244, 245, 0.9)",
              border: "1px solid rgba(228, 228, 231, 0.95)",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <ButtonBase
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    position: "relative",
                    px: 2.75,
                    py: 1,
                    borderRadius: "9999px",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: isActive ? "#ffffff" : "#52525b",
                    transition: "color 0.2s ease",
                    "&:hover": { color: isActive ? "#ffffff" : "#18181b" },
                  }}
                >
                  {isActive && (
                    <Box
                      component={motion.div}
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        bgcolor: "#059669",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.3)",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
                    {cat}
                  </Box>
                </ButtonBase>
              );
            })}
          </Paper>
        </Box>

        {/* Gallery Cards Grid */}
        <Box
          component={motion.div}
          layout
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <Box
                component={motion.article}
                layout
                key={item.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                }}
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
                sx={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "28px",
                    overflow: "hidden",
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(228, 228, 231, 0.95)",
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 2px 8px 0 rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderColor: "rgba(5, 150, 105, 0.35)",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 12px 28px -6px rgba(5,150,105,0.1)",
                      "& .photo-img": { transform: "scale(1.05)" },
                    },
                  }}
                >
                  {/* Photo Container */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 240, sm: 270 },
                      width: "100%",
                      overflow: "hidden",
                      bgcolor: "#f4f4f5",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="photo-img"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)",
                        opacity: 0.6,
                      }}
                    />
                    <Box sx={{ position: "absolute", top: 14, left: 14 }}>
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          bgcolor: "rgba(255, 255, 255, 0.92)",
                          backdropFilter: "blur(8px)",
                          color: "#065f46",
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#047857",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "var(--font-newsreader), Georgia, serif",
                          fontWeight: 700,
                          color: "#0f172a",
                          mb: 1,
                          fontSize: "1.2rem",
                          lineHeight: 1.25,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#475569",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}

