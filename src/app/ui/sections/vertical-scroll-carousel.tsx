"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
  ButtonBase,
  IconButton,
} from "@mui/material";
import {
  Camera,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  HeartHandshake,
  Share2,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

interface CarouselCardData {
  id: string;
  step: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  badge: string;
  takeaways: string[];
  tags: string[];
}

const CAROUSEL_CARDS: CarouselCardData[] = [
  {
    id: "clinica-escola",
    step: "01",
    category: "Estágio Supervisionado",
    icon: <HeartHandshake size={20} color="#059669" />,
    title: "Estágio Clínico Supervisionado — Clínica-Escola",
    subtitle: "Clínica-Escola de Psicologia — UniNassau",
    description:
      "Experiência acadêmica em atendimentos psicoterapêuticos individuais realizados no contexto da Clínica-Escola de Psicologia da UNINASSAU, sob supervisão docente contínua fundamentada na Fenomenologia Existencial.",
    img: "/estagio.jpeg",
    badge: "9º Período • Estágio Ativo",
    takeaways: [
      "Escuta acolhedora orientada pelos princípios éticos da Psicologia",
      "Supervisão docente semanal e prontuários acadêmicos",
      "Foco na singularidade e autonomia da pessoa atendida",
    ],
    tags: ["Fenomenologia", "Supervisão", "Clínica-Escola", "Ética"],
  },
  {
    id: "at-escolar-tea",
    step: "02",
    category: "Inclusão Escolar & Autonomia",
    icon: <Sparkles size={20} color="#059669" />,
    title: "Experiência em Inclusão Escolar",
    subtitle: "Mediação Pedagógica & Promoção de Autonomia no Contexto do TEA",
    description:
      "Experiência supervisionada em contexto educacional, envolvendo estratégias de acolhimento, mediação pedagógica, promoção da autonomia e fortalecimento das interações com a comunidade escolar.",
    img: "/estagio2.jpeg",
    badge: "Contexto Educacional",
    takeaways: [
      "Mediação pedagógica com estímulo à autonomia",
      "Estratégias de organização da rotina e promoção da autonomia",
      "Comunicação integrada com equipe pedagógica e família",
    ],
    tags: ["Inclusão", "Autonomia", "Mediação", "Psicologia Escolar"],
  },
  {
    id: "pesquisa-academica",
    step: "03",
    category: "Rigor & Produção Científica",
    icon: <GraduationCap size={20} color="#059669" />,
    title: "Pesquisa Acadêmica & Produção Teórica",
    subtitle: "Artigos, Simpósios e Literatura Especializada",
    description:
      "Compromisso rigoroso com a formação continuada. Participação em grupos de estudo, leitura de autores existenciais e elaboração de pesquisas aplicadas à saúde mental contemporânea.",
    img: "/descoberta.jpeg",
    badge: "Compromisso Científico",
    takeaways: [
      "Atualização bibliográfica permanente em psicologia",
      "Apresentação de artigos em simpósios e congressos",
      "Articulação sólida entre teoria e prática acadêmica",
    ],
    tags: ["Pesquisa", "Metodologia", "Epistemologia", "Artigos"],
  },
  {
    id: "psicoeducacao-comunicacao",
    step: "04",
    category: "Divulgação & Saúde Coletiva",
    icon: <Share2 size={20} color="#059669" />,
    title: "Psicoeducação e Divulgação Científica",
    subtitle: "Democratização do Conhecimento Psicológico",
    description:
      "Compartilhamento ético de conteúdos sobre saúde emocional, disciplina e estilo de vida saudável. Tradução da linguagem técnica para um formato acessível, combatendo estigmas e promovendo informação de qualidade.",
    img: "/producao.jpeg",
    badge: "Comunicação Acessível",
    takeaways: [
      "Desmistificação de mitos sobre saúde mental",
      "Diálogo entre saúde integral e hábitos saudáveis",
      "Conteúdo orientado pelas referências éticas da formação em Psicologia",
    ],
    tags: ["Psicoeducação", "Comunicação", "Saúde Integral"],
  },
];

// Sub-component for individual card with cleanly isolated scroll keyframes
function DeckCardItem({
  card,
  index,
  scrollYProgress,
}: {
  card: CarouselCardData;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Stacking z-index: top card has highest z-index
  const zIndex = 10 - index;

  let yTransform: MotionValue<number>;
  let opacityTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;

  if (index === 0) {
    // Card 0: starts fully visible, then glides up cleanly
    yTransform = useTransform(scrollYProgress, [0, 0.12, 0.28], [0, 0, -80]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.15, 0.28], [1, 1, 0]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.15, 0.28], [1, 1, 0.94]);
  } else if (index === 1) {
    // Card 1: invisible at start, enters from bottom, stays docked, then exits
    yTransform = useTransform(scrollYProgress, [0.12, 0.26, 0.42, 0.58], [50, 0, 0, -80]);
    opacityTransform = useTransform(scrollYProgress, [0.12, 0.26, 0.44, 0.58], [0, 1, 1, 0]);
    scaleTransform = useTransform(scrollYProgress, [0.12, 0.26, 0.44, 0.58], [0.95, 1, 1, 0.94]);
  } else if (index === 2) {
    // Card 2: invisible until card 1 exits, enters, stays, then exits
    yTransform = useTransform(scrollYProgress, [0.42, 0.56, 0.72, 0.88], [50, 0, 0, -80]);
    opacityTransform = useTransform(scrollYProgress, [0.42, 0.56, 0.74, 0.88], [0, 1, 1, 0]);
    scaleTransform = useTransform(scrollYProgress, [0.42, 0.56, 0.74, 0.88], [0.95, 1, 1, 0.94]);
  } else {
    // Card 3 (last): invisible until card 2 exits, enters and stays docked at bottom
    yTransform = useTransform(scrollYProgress, [0.72, 0.86, 1.0], [50, 0, 0]);
    opacityTransform = useTransform(scrollYProgress, [0.72, 0.86, 1.0], [0, 1, 1]);
    scaleTransform = useTransform(scrollYProgress, [0.72, 0.86, 1.0], [0.95, 1, 1]);
  }

  return (
    <Box
      component={motion.div}
      style={{
        y: yTransform,
        opacity: opacityTransform,
        scale: scaleTransform,
        zIndex,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CardContent card={card} />
    </Box>
  );
}

// Inner card UI styled with Clean Architecture & Anti-AI Slop guidelines
function CardContent({ card }: { card: CarouselCardData }) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "28px",
        overflow: "hidden",
        bgcolor: "#ffffff",
        border: "1px solid rgba(228, 228, 231, 0.95)",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 20px 45px -12px rgba(15,23,42,0.1)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left Photo Window */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "45%" },
          height: { xs: 190, sm: 210, md: "100%" },
          bgcolor: "#f4f4f5",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={card.img}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        {/* Step Badges */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            alignItems: "center",
            gap: 1,
            zIndex: 2,
          }}
        >
          <Chip
            label={card.step}
            size="small"
            sx={{
              fontWeight: 800,
              fontSize: "0.75rem",
              bgcolor: "#059669",
              color: "#ffffff",
              boxShadow: "0 2px 8px rgba(5,150,105,0.4)",
            }}
          />
          <Chip
            label={card.badge}
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: "0.685rem",
              bgcolor: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(10px)",
              color: "#065f46",
              border: "1px solid rgba(255, 255, 255, 0.8)",
            }}
          />
        </Box>
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          p: { xs: 2.25, sm: 2.75, md: 3.25 },
          width: { xs: "100%", md: "55%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          gap: 1.25,
        }}
      >
        <Box>
          {/* Header Row */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.75 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "8px",
                bgcolor: "#ecfdf5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {card.icon}
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: "#047857",
                fontWeight: 700,
                fontSize: "0.725rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {card.category}
            </Typography>
          </Stack>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: { xs: "1.15rem", sm: "1.25rem" },
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 0.5,
            }}
          >
            {card.title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="caption"
            sx={{
              color: "#64748b",
              fontWeight: 600,
              fontSize: "0.775rem",
              display: "block",
              mb: 1.25,
            }}
          >
            {card.subtitle}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#475569",
              fontSize: "0.825rem",
              lineHeight: 1.5,
              mb: 1.75,
            }}
          >
            {card.description}
          </Typography>

          {/* Key Takeaways */}
          <Stack spacing={0.6} sx={{ pt: 1, borderTop: "1px solid #f1f5f9" }}>
            {card.takeaways.map((point, idx) => (
              <Stack key={idx} direction="row" spacing={1} alignItems="flex-start">
                <CheckCircle2
                  size={14}
                  color="#059669"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#334155", fontWeight: 500, fontSize: "0.775rem" }}
                >
                  {point}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Tags Row */}
        <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ gap: 0.5 }}>
          {card.tags.map((tag) => (
            <Chip
              key={tag}
              label={`#${tag}`}
              size="small"
              sx={{
                bgcolor: "#f4f4f5",
                color: "#52525b",
                fontWeight: 600,
                fontSize: "0.675rem",
                height: 22,
                borderRadius: "6px",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}

import { useLenis } from "@/app/ui/components/SmoothScroll";

export default function VerticalScrollCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { scrollTo: lenisScrollTo } = useLenis();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active index cleanly without sudden threshold pops
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActiveIndex(0);
    } else if (latest < 0.58) {
      setActiveIndex(1);
    } else if (latest < 0.88) {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
  });

  // Smooth jump to a specific card
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const progressTargets = [0.02, 0.35, 0.65, 0.94];
    const targetProgress = progressTargets[index];
    const targetScroll = containerTop + targetProgress * (containerHeight - window.innerHeight);
    lenisScrollTo(targetScroll, { duration: 1.2 });
  };

  const handleNext = () => {
    if (activeIndex < CAROUSEL_CARDS.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  return (
    <Box
      component="section"
      id="vivencias"
      ref={containerRef}
      style={{ position: "relative" }}
      sx={{
        /* Runway for fluid sticky scroll */
        minHeight: "340vh",
        bgcolor: "#fafaf9",
      }}
    >
      {/* Sticky Viewport that stays pinned on screen while user scrolls */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          py: 4,
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "4.5fr 7.5fr" },
              gap: { xs: 3, lg: 6 },
              alignItems: "center",
            }}
          >
            {/* Left Column: Section Pitch, Stepper & Quick Arrows */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                pr: { lg: 3 },
              }}
            >
              {/* Badge & Headlines */}
              <Box>
                <Chip
                  icon={<Camera size={14} color="#059669" />}
                  label="Vivências Formativas"
                  sx={{
                    bgcolor: "#ecfdf5",
                    color: "#065f46",
                    border: "1px solid #a7f3d0",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    py: 0.5,
                    px: 0.75,
                    borderRadius: "9999px",
                    mb: 1.5,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "var(--font-newsreader), Georgia, serif",
                    fontSize: { xs: "1.85rem", sm: "2.35rem", lg: "2.85rem" },
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    mb: 1.25,
                  }}
                >
                  Vivências que dão forma ao ofício.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#475569",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.6,
                    maxWidth: 480,
                  }}
                >
                  Vivências acadêmicas e experiências formativas que contribuíram para minha trajetória em Psicologia.
                </Typography>
              </Box>

              {/* Stepper Buttons & Arrow Controls */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                  gap: 1.5,
                  pt: 1.5,
                  borderTop: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#64748b",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.725rem",
                    }}
                  >
                    Card {activeIndex + 1} de {CAROUSEL_CARDS.length}
                  </Typography>

                  {/* Manual Arrow Controls */}
                  <Stack direction="row" spacing={0.75}>
                    <IconButton
                      size="small"
                      onClick={handlePrev}
                      disabled={activeIndex === 0}
                      aria-label="Card anterior"
                      sx={{
                        border: "1px solid rgba(228, 228, 231, 0.9)",
                        bgcolor: "#ffffff",
                        p: 0.5,
                        "&:hover": { bgcolor: "#f4f4f5" },
                      }}
                    >
                      <ArrowUp size={16} color={activeIndex === 0 ? "#cbd5e1" : "#0f172a"} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={handleNext}
                      disabled={activeIndex === CAROUSEL_CARDS.length - 1}
                      aria-label="Próximo card"
                      sx={{
                        border: "1px solid rgba(228, 228, 231, 0.9)",
                        bgcolor: "#ffffff",
                        p: 0.5,
                        "&:hover": { bgcolor: "#f4f4f5" },
                      }}
                    >
                      <ArrowDown size={16} color={activeIndex === CAROUSEL_CARDS.length - 1 ? "#cbd5e1" : "#0f172a"} />
                    </IconButton>
                  </Stack>
                </Box>

                <Stack spacing={0.75}>
                  {CAROUSEL_CARDS.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <ButtonBase
                        key={item.id}
                        onClick={() => scrollToCard(idx)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 1.75,
                          p: 1.1,
                          borderRadius: "14px",
                          textAlign: "left",
                          bgcolor: isActive ? "rgba(5, 150, 105, 0.08)" : "transparent",
                          border: "1px solid",
                          borderColor: isActive ? "rgba(5, 150, 105, 0.25)" : "transparent",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: "rgba(5, 150, 105, 0.05)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "8px",
                            bgcolor: isActive ? "#059669" : "#e4e4e7",
                            color: isActive ? "#ffffff" : "#71717a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {item.step}
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ? "#0f172a" : "#64748b",
                              fontSize: "0.85rem",
                              lineHeight: 1.2,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: isActive ? "#047857" : "#94a3b8",
                              fontSize: "0.725rem",
                              fontWeight: 500,
                            }}
                          >
                            {item.category}
                          </Typography>
                        </Box>
                      </ButtonBase>
                    );
                  })}
                </Stack>
              </Box>
            </Box>

            {/* Right Column: Fluid Sticky Deck Stage */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 700,
                mx: "auto",
                height: { xs: 540, sm: 480, md: 440 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {CAROUSEL_CARDS.map((card, idx) => (
                <DeckCardItem
                  key={card.id}
                  card={card}
                  index={idx}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
