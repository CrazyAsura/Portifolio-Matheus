"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Play,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { WhatsAppIcon } from "@/app/ui/components/BrandIcons";
import ThreeSynapse from "../components/ThreeSynapse";
import { PERSONAL_INFO } from "@/app/lib/data";

// Interactive preview slides for the floating card
const PREVIEW_SLIDES = [
  {
    id: "estagio-clinico",
    title: "Clínica Fenomenológica",
    tag: "Clínica-Escola",
    img: "/estagio.jpeg",
    caption: "Atendimento supervisionado focado na experiência singular.",
  },
  {
    id: "at-escolar",
    title: "Acompanhamento no TEA",
    tag: "Mediação & Inclusão",
    img: "/estagio2.jpeg",
    caption: "Manejo socioemocional e fomento à autonomia escolar.",
  },
  {
    id: "pesquisa-producao",
    title: "Pesquisa & Rigor Ético",
    tag: "Produção Contínua",
    img: "/descoberta.jpeg",
    caption: "Constante atualização bibliográfica e compromisso científico.",
  },
  {
    id: "psicoeducacao",
    title: "Comunicação Acessível",
    tag: "Saúde Mental",
    img: "/producao.jpeg",
    caption: "Tradução de temas da psicologia para uma linguagem humana.",
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % PREVIEW_SLIDES.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + PREVIEW_SLIDES.length) % PREVIEW_SLIDES.length);
  };

  const activeSlide = PREVIEW_SLIDES[currentSlideIndex];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 30,
        bounce: 0.1,
      },
    },
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 14, sm: 16, lg: 16 },
        pb: { xs: 8, lg: 10 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "#08090c",
        color: "#f8fafc",
        overflow: "hidden",
        /* Smooth radial aura in emerald tones behind the subject */
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(5, 150, 105, 0.22) 0%, rgba(4, 120, 87, 0.08) 35%, transparent 68%),
          radial-gradient(circle at 85% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 15% 30%, rgba(6, 78, 59, 0.15) 0%, transparent 40%)
        `,
      }}
    >
      {/* Background Subtle Three.js Neural Synapse */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.55,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <ThreeSynapse />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Grid: 3-column / 3-zone Editorial Layout inspired by reference */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 1fr",
              lg: "3.8fr 4.2fr 4fr",
            },
            alignItems: "center",
            gap: { xs: 5, md: 4, lg: 3 },
          }}
        >
          {/* ============================================================== */}
          {/* ZONE 1 (LEFT COLUMN): Editorial Pitch, Preview Card & CTA      */}
          {/* ============================================================== */}
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: { xs: 3.5, lg: 4 },
              order: { xs: 2, lg: 1 },
              zIndex: 2,
            }}
          >
            {/* Top Pitch */}
            <Box component={motion.div} variants={fadeUpVariants}>
              <Chip
                icon={<Sparkles size={14} color="#34d399" />}
                label="9º Período • UniNassau Aracaju"
                sx={{
                  bgcolor: "rgba(5, 150, 105, 0.15)",
                  color: "#a7f3d0",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  py: 0.5,
                  px: 0.75,
                  mb: 2.5,
                  borderRadius: "9999px",
                  backdropFilter: "blur(12px)",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#cbd5e1",
                  fontSize: { xs: "0.95rem", sm: "1.025rem", lg: "1.05rem" },
                  lineHeight: 1.65,
                  maxWidth: 420,
                  letterSpacing: "-0.01em",
                }}
              >
                Através da escuta atenta, ética e rigor acadêmico, uno ciência psicológica e sensibilidade humana para compreender vivências e cultivar autonomia.
              </Typography>
            </Box>

            {/* Middle Floating Interactive Preview Card */}
            <Box
              component={motion.div}
              variants={fadeUpVariants}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              sx={{
                width: { xs: "100%", sm: 320, lg: 300 },
                p: 1.25,
                borderRadius: "24px",
                border: "1.5px dashed rgba(255, 255, 255, 0.28)",
                bgcolor: "rgba(18, 20, 26, 0.65)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(52, 211, 153, 0.55)",
                  boxShadow: "0 24px 48px -10px rgba(5,150,105,0.25), inset 0 1px 0 0 rgba(255,255,255,0.2)",
                },
              }}
            >
              {/* Image Window */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 190,
                  borderRadius: "18px",
                  overflow: "hidden",
                  bgcolor: "#11141c",
                }}
              >
                <AnimatePresence mode="wait">
                  <Box
                    key={activeSlide.id}
                    component={motion.div}
                    initial={{ opacity: 0, x: slideDirection > 0 ? 30 : -30, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: slideDirection > 0 ? -30 : 30, scale: 0.97 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    sx={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={activeSlide.img}
                      alt={activeSlide.title}
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Subtle scrim */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%)",
                      }}
                    />
                  </Box>
                </AnimatePresence>

                {/* Tag Pill in Upper-Left */}
                <Box sx={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
                  <Chip
                    label={activeSlide.tag}
                    size="small"
                    sx={{
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(8px)",
                      color: "#34d399",
                      border: "1px solid rgba(52, 211, 153, 0.3)",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      height: 22,
                    }}
                  />
                </Box>

                {/* Central Frosted Glass Play Button Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "rgba(255, 255, 255, 0.22)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: 3 }} />
                  </Box>
                </Box>

                {/* Slide Caption / Title on Bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    left: 10,
                    right: 10,
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: "0.785rem",
                      lineHeight: 1.2,
                      display: "block",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {activeSlide.title}
                  </Typography>
                </Box>
              </Box>

              {/* Bottom Controls Row: Dashes + Arrows */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pt: 1.25,
                  px: 0.5,
                }}
              >
                {/* Pagination Dashes */}
                <Stack direction="row" spacing={0.75} alignItems="center">
                  {PREVIEW_SLIDES.map((slide, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <Box
                        key={slide.id}
                        onClick={() => {
                          setSlideDirection(idx > currentSlideIndex ? 1 : -1);
                          setCurrentSlideIndex(idx);
                        }}
                        sx={{
                          height: 3,
                          width: isActive ? 24 : 12,
                          borderRadius: 2,
                          bgcolor: isActive ? "#34d399" : "rgba(255, 255, 255, 0.25)",
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          "&:hover": {
                            bgcolor: isActive ? "#34d399" : "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      />
                    );
                  })}
                </Stack>

                {/* Interactive Arrows (← →) */}
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <IconButton
                    size="small"
                    onClick={prevSlide}
                    aria-label="Slide anterior"
                    sx={{
                      color: "#ffffff",
                      p: 0.5,
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.15)" },
                    }}
                  >
                    <ArrowLeft size={14} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={nextSlide}
                    aria-label="Próximo slide"
                    sx={{
                      color: "#ffffff",
                      p: 0.5,
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.15)" },
                    }}
                  >
                    <ArrowRight size={14} />
                  </IconButton>
                </Stack>
              </Box>
            </Box>

            {/* Bottom Row: CTA Button styled like reference "LET'S CONTACT •" */}
            <Box component={motion.div} variants={fadeUpVariants}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                <Box
                  component={motion.a}
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                    px: 3.25,
                    py: 1.6,
                    borderRadius: "12px",
                    bgcolor: "#ffffff",
                    color: "#090a0d",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: "0 10px 28px -6px rgba(255,255,255,0.2), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#f1f5f9",
                      boxShadow: "0 14px 32px -4px rgba(255,255,255,0.3)",
                    },
                  }}
                >
                  <WhatsAppIcon size={16} color="#059669" />
                  <span>VAMOS CONECTAR</span>
                  {/* Glowing Status Dot */}
                  <Box
                    component="span"
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      bgcolor: "#059669",
                      display: "inline-block",
                      boxShadow: "0 0 10px #10b981",
                    }}
                  />
                </Box>

                {/* Secondary Explore Button */}
                <Box
                  component={motion.a}
                  href="#vivencias"
                  whileTap={{ scale: 0.97 }}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    px: 2.5,
                    py: 1.4,
                    color: "#94a3b8",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#34d399" },
                  }}
                >
                  <span>Conhecer Vivências</span>
                  <ArrowDown size={14} />
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* ============================================================== */}
          {/* ZONE 2 (CENTER-RIGHT): Prominent Cutout / Framed Subject       */}
          {/* ============================================================== */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.15 }}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              order: { xs: 1, lg: 2 },
              zIndex: 1,
            }}
          >
            {/* Subtle Pulsing Ambient Emerald Glow Behind Portrait */}
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.75, 1, 0.75],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -20%)",
                width: { xs: 280, sm: 380, md: 440 },
                height: { xs: 280, sm: 380, md: 440 },
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(5, 150, 105, 0.5) 0%, rgba(16, 185, 129, 0.18) 45%, transparent 70%)",
                filter: "blur(30px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Editorial Portrait Frame */}
            <Box
              sx={{
                position: "relative",
                width: { xs: 280, sm: 360, md: 400, lg: 430 },
                height: { xs: 360, sm: 470, md: 530, lg: 570 },
                borderRadius: { xs: "32px", lg: "44px 44px 0 0" },
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                bgcolor: "#0f1218",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                zIndex: 1,
              }}
            >
              <Image
                src="/profile.jpeg"
                alt="Matheus Mendonça Trindade — Estudante de Psicologia"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 430px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 22%",
                }}
              />

              {/* Bottom Gradient Fade to merge seamlessly with dark backdrop */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 55%, rgba(8, 9, 12, 0.5) 80%, rgba(8, 9, 12, 0.95) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Minimal floating name tag inside photo bottom */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  p: 1.5,
                  borderRadius: "16px",
                  bgcolor: "rgba(10, 12, 16, 0.75)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "#f8fafc", fontSize: "0.8rem", display: "block" }}>
                    Matheus M. Trindade
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#34d399", fontSize: "0.685rem", fontWeight: 600 }}>
                    Clínica & Inclusão Escolar TEA
                  </Typography>
                </Box>
                <Chip
                  label="Aracaju • SE"
                  size="small"
                  sx={{
                    height: 22,
                    fontSize: "0.675rem",
                    fontWeight: 600,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "#e2e8f0",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* ============================================================== */}
          {/* ZONE 3 (RIGHT COLUMN): Massive Bold Architectural Typography   */}
          {/* ============================================================== */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28, delay: 0.2 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 3, lg: 3 },
              textAlign: { xs: "center", md: "left" },
              zIndex: 2,
            }}
          >
            {/* Massive 4-Line Architectural Headline */}
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
                fontWeight: 900,
                fontSize: {
                  xs: "2.75rem",
                  sm: "3.75rem",
                  md: "4.5rem",
                  lg: "4.75rem",
                  xl: "5.5rem",
                },
                lineHeight: { xs: 0.96, sm: 0.92, lg: 0.9 },
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                color: "#ffffff",
                m: 0,
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                userSelect: "none",
              }}
            >
              <Box component="span" sx={{ display: "block" }}>
                PSICOLOGIA
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#ffffff",
                  WebkitTextStroke: { xs: "none", lg: "1px rgba(255,255,255,0.2)" },
                }}
              >
                HUMANIZADA
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                QUE CONECTA
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#34d399",
                }}
              >
                E TRANSFORMA
              </Box>
            </Typography>

            {/* Subtle bottom caption on right */}
            <Typography
              variant="caption"
              sx={{
                color: "#64748b",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                mt: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="span"
                sx={{ width: 24, height: 1.5, bgcolor: "#34d399", display: "inline-block" }}
              />
              Abordagem Fenomenológico-Existencial & AT
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
