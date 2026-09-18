"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Paper,
  ButtonBase,
  Stack,
} from "@mui/material";
import {
  ArrowUpRight,
  ShieldAlert,
  Send,
} from "lucide-react";
import {
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
} from "@/app/ui/components/BrandIcons";
import { PERSONAL_INFO, CRP_ETHICS_STATEMENT } from "@/app/lib/data";
import { useDevicePerformance } from "@/app/lib/performance";

export default function Social() {
  const { prefersReducedMotion } = useDevicePerformance();

  const channels = [
    {
      name: "WhatsApp",
      subtitle: "Mensagem direta",
      description: "Canal ágil para dúvidas, diálogos e propostas acadêmicas.",
      href: PERSONAL_INFO.whatsappUrl,
      icon: <WhatsAppIcon size={24} color="#059669" />,
      accentBg: "#ecfdf5",
      cta: "Iniciar conversa",
    },
    {
      name: "LinkedIn",
      subtitle: "Rede Profissional",
      description: "Conexões profissionais, artigos e trajetória de carreira.",
      href: PERSONAL_INFO.linkedinUrl,
      icon: <LinkedInIcon size={24} color="#0a66c2" />,
      accentBg: "#eff6ff",
      cta: "Ver perfil",
    },
    {
      name: "Instagram",
      subtitle: "Psicoeducação & Rotina",
      description: "Conteúdos sobre saúde mental, rotina saudável e esportes.",
      href: PERSONAL_INFO.instagramUrl,
      icon: <InstagramIcon size={24} color="#e1306c" />,
      accentBg: "#fdf2f8",
      cta: "Acompanhar",
    },
    {
      name: "E-mail",
      subtitle: "matheusmt33@hotmail.com",
      description: "Para contatos institucionais e oportunidades de estágio.",
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <MailIcon size={24} color="#d97706" />,
      accentBg: "#fffbeb",
      cta: "Enviar e-mail",
    },
  ];

  return (
    <Box
      component="section"
      id="contato"
      sx={{
        py: { xs: 10, lg: 14 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "rgba(250, 250, 249, 0.7)",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
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
            <Send size={13} />
            Canais de Contato
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
            Vamos estabelecer uma conexão?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Estou à disposição para troca de experiências, projetos de intervenção, estágios e iniciativas em saúde mental.
          </Typography>
        </Box>

        {/* Contact Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
            mb: 6,
          }}
        >
          {channels.map((ch, index) => (
            <Box
              key={ch.name}
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 28,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              sx={{ height: "100%" }}
            >
              <Paper
                component="a"
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  borderRadius: "28px",
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(228, 228, 231, 0.95)",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 2px 8px 0 rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  color: "inherit",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderColor: "rgba(5, 150, 105, 0.35)",
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), 0 12px 28px -6px rgba(5,150,105,0.08)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #059669",
                    outlineOffset: "2px",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "16px",
                        bgcolor: ch.accentBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {ch.icon}
                    </Box>
                    <ArrowUpRight size={18} color="#94a3b8" />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontWeight: 700,
                      color: "#0f172a",
                      fontSize: "1.25rem",
                      mb: 0.25,
                    }}
                  >
                    {ch.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#047857",
                      fontWeight: 600,
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    {ch.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#475569",
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {ch.description}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  sx={{
                    pt: 2.5,
                    mt: 2.5,
                    borderTop: "1px solid #f4f4f5",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    {ch.cta}
                  </Typography>
                  <Box component="span">→</Box>
                </Stack>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Ethical CRP Academic Disclaimer Paper */}
        <Paper
          elevation={0}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{
            p: { xs: 3, sm: 3.5 },
            borderRadius: "24px",
            bgcolor: "rgba(236, 253, 245, 0.7)",
            border: "1px solid #a7f3d0",
            display: "flex",
            alignItems: "flex-start",
            gap: 2.5,
          }}
        >
          <ShieldAlert size={26} color="#047857" style={{ flexShrink: 0, marginTop: 2 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#065f46" }}>
              {CRP_ETHICS_STATEMENT.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#065f46", fontSize: "0.8rem", lineHeight: 1.65 }}>
              {CRP_ETHICS_STATEMENT.text}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

