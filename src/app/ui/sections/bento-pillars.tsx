"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import {
  Brain,
  Accessibility,
  Briefcase,
  Activity,
  CheckCircle,
} from "lucide-react";
import { PILLARS } from "@/app/lib/data";
import { useDevicePerformance } from "@/app/lib/performance";

export default function BentoPillars() {
  const { prefersReducedMotion } = useDevicePerformance();

  const iconMap: Record<string, React.ReactNode> = {
    clinica: <Brain size={26} color="#059669" />,
    "at-inclusao": <Accessibility size={26} color="#047857" />,
    "visao-adm": <Briefcase size={26} color="#0f766e" />,
    "mente-corpo": <Activity size={26} color="#059669" />,
  };

  return (
    <Box
      component="section"
      id="pilares"
      sx={{
        py: { xs: 10, lg: 14 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "rgba(250, 250, 249, 0.6)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            maxWidth: 680,
            mx: { xs: "auto", lg: 0 },
            mb: 8,
            textAlign: { xs: "center", lg: "left" },
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
            }}
          >
            Eixos de Atuação & Metodologia
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
            Prática fundamentada na escuta, na ciência e no cuidado.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Cada área de formação e vivência se integra para oferecer um olhar completo sobre o ser humano, suas dores, potências e contextos.
          </Typography>
        </Box>

        {/* Bento Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
            gap: 3,
          }}
        >
          {PILLARS.map((pillar, index) => {
            const colSpan =
              index === 0
                ? { xs: "span 1", md: "span 7" }
                : index === 1
                ? { xs: "span 1", md: "span 5" }
                : index === 2
                ? { xs: "span 1", md: "span 5" }
                : { xs: "span 1", md: "span 7" };

            return (
              <Box
                key={pillar.id}
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                sx={{
                  gridColumn: colSpan,
                  height: "100%",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "32px",
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 2px 8px 0 rgba(0,0,0,0.03)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderColor: "rgba(5, 150, 105, 0.3)",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 12px 30px -8px rgba(5,150,105,0.08)",
                    },
                  }}
                >
                  <Box>
                    {/* Top Row: Icon and Tag */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "18px",
                          bgcolor: "#ecfdf5",
                          border: "1px solid #d1fae5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {iconMap[pillar.id]}
                      </Box>
                      <Chip
                        label={pillar.category}
                        size="small"
                        sx={{
                          bgcolor: "#f4f4f5",
                          color: "#3f3f46",
                          fontWeight: 600,
                          fontSize: "0.725rem",
                          borderRadius: "9999px",
                        }}
                      />
                    </Box>

                    {/* Title & Subtitle */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "var(--font-newsreader), Georgia, serif",
                        fontWeight: 700,
                        color: "#0f172a",
                        mb: 0.75,
                        fontSize: { xs: "1.3rem", sm: "1.45rem" },
                      }}
                    >
                      {pillar.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#047857",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        display: "block",
                        mb: 2,
                      }}
                    >
                      {pillar.subtitle}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475569",
                        lineHeight: 1.65,
                        fontSize: { xs: "0.875rem", sm: "0.925rem" },
                        mb: 3,
                      }}
                    >
                      {pillar.description}
                    </Typography>
                  </Box>

                  {/* Highlights Bullet List */}
                  <Stack
                    spacing={1.25}
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid #f4f4f5",
                    }}
                  >
                    {pillar.points.map((pt, i) => (
                      <Stack key={i} direction="row" spacing={1} alignItems="flex-start">
                        <CheckCircle size={15} color="#059669" style={{ flexShrink: 0, marginTop: 3 }} />
                        <Typography variant="caption" sx={{ color: "#334155", fontWeight: 500, fontSize: "0.825rem" }}>
                          {pt}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

