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
import { GraduationCap, CheckCircle2, Award, Clock } from "lucide-react";
import { COURSES_DATA } from "@/app/lib/data";
import { useDevicePerformance } from "@/app/lib/performance";

export default function Courses() {
  const { prefersReducedMotion } = useDevicePerformance();

  return (
    <Box
      component="section"
      id="formacao"
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
            textAlign: "center",
            maxWidth: 620,
            mx: "auto",
            mb: 8,
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
            <GraduationCap size={15} />
            Qualificação Acadêmica
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
            Formação Acadêmica
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Instituições de ensino que fundamentam minha formação acadêmica com rigor teórico, científico e visão multidisciplinar.
          </Typography>
        </Box>

        {/* Credentials Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3.5,
          }}
        >
          {COURSES_DATA.map((course, index) => (
            <Box
              key={course.id}
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 28,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              sx={{ height: "100%" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "30px",
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(228, 228, 231, 0.95)",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 2px 8px 0 rgba(0,0,0,0.03)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderColor: "rgba(5, 150, 105, 0.3)",
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 10px 28px -6px rgba(5,150,105,0.08)",
                  },
                }}
              >
                <Box>
                  {/* Status Chip & Icon */}
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
                        width: 48,
                        height: 48,
                        borderRadius: "16px",
                        bgcolor: "#ecfdf5",
                        border: "1px solid #d1fae5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GraduationCap size={24} color="#059669" />
                    </Box>
                    <Chip
                      icon={
                        course.completed ? (
                          <CheckCircle2 size={13} color="#059669" />
                        ) : (
                          <Clock size={13} color="#d97706" />
                        )
                      }
                      label={course.status}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.725rem",
                        bgcolor: course.completed ? "#ecfdf5" : "#fffbeb",
                        color: course.completed ? "#065f46" : "#b45309",
                        border: `1px solid ${course.completed ? "#a7f3d0" : "#fde68a"}`,
                        borderRadius: "9999px",
                      }}
                    />
                  </Box>

                  {/* Course Title & School */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontWeight: 700,
                      color: "#0f172a",
                      fontSize: { xs: "1.3rem", sm: "1.5rem" },
                      mb: 0.5,
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#047857",
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: "0.9rem",
                    }}
                  >
                    {course.institution}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#64748b",
                      fontWeight: 500,
                      display: "block",
                      mb: 3,
                    }}
                  >
                    {course.period}
                  </Typography>
                </Box>

                {/* Highlights List */}
                <Stack
                  spacing={1.25}
                  sx={{
                    pt: 2.5,
                    borderTop: "1px solid #f4f4f5",
                  }}
                >
                  {course.highlights.map((item, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                      <Award size={14} color="#059669" style={{ flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: "#334155", fontWeight: 500, fontSize: "0.825rem" }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

