"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { Brain, ArrowUp } from "lucide-react";
import {
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
} from "@/app/ui/components/BrandIcons";
import { PERSONAL_INFO } from "@/app/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#ffffff",
        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        pt: { xs: 8, md: 10 },
        pb: 6,
        px: { xs: 2, sm: 3, lg: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Top Tier */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mb: 6 }}
        >
          {/* Brand */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "16px",
                bgcolor: "#059669",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.3)",
              }}
            >
              <Brain size={20} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                {PERSONAL_INFO.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#047857",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              >
                Estudante de Psicologia • UniNassau Aracaju
              </Typography>
            </Box>
          </Stack>

          {/* Social Icons & Scroll to Top */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component="a"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              sx={{
                color: "#64748b",
                "&:hover": { color: "#059669", bgcolor: "rgba(5, 150, 105, 0.08)" },
              }}
            >
              <WhatsAppIcon size={19} color="currentColor" />
            </IconButton>
            <IconButton
              component="a"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: "#64748b",
                "&:hover": { color: "#0a66c2", bgcolor: "rgba(10, 102, 194, 0.08)" },
              }}
            >
              <LinkedInIcon size={19} color="currentColor" />
            </IconButton>
            <IconButton
              component="a"
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{
                color: "#64748b",
                "&:hover": { color: "#e1306c", bgcolor: "rgba(225, 48, 108, 0.08)" },
              }}
            >
              <InstagramIcon size={19} color="currentColor" />
            </IconButton>
            <IconButton
              component="a"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="E-mail"
              sx={{
                color: "#64748b",
                "&:hover": { color: "#d97706", bgcolor: "rgba(217, 119, 6, 0.08)" },
              }}
            >
              <MailIcon size={19} color="currentColor" />
            </IconButton>
            <IconButton
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              sx={{
                color: "#64748b",
                border: "1px solid #e2e8f0",
                ml: 1,
                "&:hover": { color: "#047857", bgcolor: "rgba(5, 150, 105, 0.08)" },
              }}
            >
              <ArrowUp size={18} />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 4, borderColor: "#f1f5f9" }} />

        {/* Bottom Tier */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 500 }}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#94a3b8",
              textAlign: { xs: "center", sm: "right" },
              maxWidth: 480,
              fontSize: "0.725rem",
              lineHeight: 1.5,
            }}
          >
            Portfólio de apresentação acadêmica e curricular. Atividades práticas realizadas estritamente no âmbito de estágio supervisionado docente.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}