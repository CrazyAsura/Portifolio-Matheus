"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import {
  Clock,
  Accessibility,
  Brain,
  UsersRound,
  Briefcase,
  Calendar,
  Building,
} from "lucide-react";
import { TRAJECTORY_EVENTS } from "@/app/lib/data";

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 70%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const iconMap: Record<string, React.ReactNode> = {
    "at-tea": <Accessibility size={18} color="#ffffff" />,
    "clinica-escola": <Brain size={18} color="#ffffff" />,
    "projeto-escolar": <UsersRound size={18} color="#ffffff" />,
    "tecnico-adm": <Briefcase size={18} color="#ffffff" />,
  };

  return (
    <Box
      component="section"
      id="trajetoria"
      ref={timelineRef}
      sx={{
        py: { xs: 10, lg: 16 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "rgba(250, 250, 249, 0.7)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          sx={{
            textAlign: "center",
            maxWidth: 640,
            mx: "auto",
            mb: { xs: 8, md: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            <Clock size={14} />
            Evolução Curricular & Prática
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.2rem" },
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Uma trajetória construída passo a passo.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Experiências práticas estruturadas que consolidam o preparo técnico, humano e ético.
          </Typography>
        </Box>

        {/* Alternating Timeline Wrapper */}
        <Box sx={{ position: "relative" }}>
          {/* Central Vertical Background Spine */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "rgba(228, 228, 231, 0.9)",
              left: { xs: 20, md: "50%" },
              transform: { xs: "none", md: "translateX(-50%)" },
            }}
          />

          {/* Dynamic Animated Scroll Progress Spine */}
          <Box
            component={motion.div}
            style={{
              scaleY,
              originY: 0,
            }}
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "2.5px",
              bgcolor: "#059669",
              left: { xs: 20, md: "50%" },
              transform: { xs: "none", md: "translateX(-50%)" },
              zIndex: 1,
              boxShadow: "0 0 12px rgba(5, 150, 105, 0.4)",
            }}
          />

          <Stack spacing={{ xs: 5, md: 8 }}>
            {TRAJECTORY_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <Box
                  key={event.id}
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: {
                      xs: "flex-start",
                      md: isEven ? "flex-start" : "flex-end",
                    },
                    width: "100%",
                  }}
                >
                  {/* Central Timeline Pin Node with spring hover */}
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    sx={{
                      position: "absolute",
                      top: { xs: 8, md: 24 },
                      left: { xs: 20, md: "50%" },
                      transform: "translate(-50%, 0)",
                      width: 36,
                      height: 36,
                      borderRadius: "9999px",
                      bgcolor: "#059669",
                      border: "4px solid #fafaf9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 10px rgba(5,150,105,0.3)",
                      zIndex: 3,
                    }}
                  >
                    {iconMap[event.id] || <Brain size={16} color="#ffffff" />}
                  </Box>

                  {/* Alternating Card Container */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: isEven ? -28 : 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 26,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -3 }}
                    sx={{
                      width: { xs: "calc(100% - 50px)", md: "calc(50% - 40px)" },
                      ml: { xs: "50px", md: isEven ? 0 : "auto" },
                      mr: { xs: 0, md: isEven ? "auto" : 0 },
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 3, sm: 3.5 },
                        borderRadius: "28px",
                        bgcolor: "#ffffff",
                        border: "1px solid rgba(228, 228, 231, 0.95)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 2px 8px 0 rgba(0,0,0,0.03)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderColor: "rgba(5, 150, 105, 0.35)",
                          boxShadow:
                            "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 12px 28px -6px rgba(5,150,105,0.08)",
                        },
                      }}
                    >
                      {/* Meta Top Line */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1.5,
                          mb: 1.5,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: "#065f46",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <Calendar size={13} color="#059669" />
                          {event.period}
                        </Typography>

                        {event.active && (
                          <Chip
                            label="Experiência em andamento"
                            size="small"
                            sx={{
                              height: 22,
                              fontSize: "0.685rem",
                              fontWeight: 700,
                              bgcolor: "#ecfdf5",
                              color: "#065f46",
                              border: "1px solid #a7f3d0",
                            }}
                          />
                        )}
                      </Box>

                      {/* Event Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "var(--font-newsreader), Georgia, serif",
                          fontWeight: 700,
                          color: "#0f172a",
                          fontSize: { xs: "1.25rem", sm: "1.45rem" },
                          mb: 0.5,
                        }}
                      >
                        {event.title}
                      </Typography>

                      {/* Subtitle & Institution */}
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{ mb: 2, color: "#64748b", fontSize: "0.825rem" }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "#047857", fontWeight: 600, fontSize: "0.825rem" }}
                        >
                          {event.subtitle}
                        </Typography>
                        {event.institution && (
                          <>
                            <Box component="span">•</Box>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <Building size={12} color="#94a3b8" />
                              <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.8rem" }}>
                                {event.institution}
                              </Typography>
                            </Stack>
                          </>
                        )}
                      </Stack>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#475569",
                          lineHeight: 1.65,
                          fontSize: { xs: "0.875rem", sm: "0.925rem" },
                          mb: 2.5,
                        }}
                      >
                        {event.description}
                      </Typography>

                      {/* Competency Chips */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                        {event.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: "#f4f4f5",
                              color: "#3f3f46",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              borderRadius: "9999px",
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
