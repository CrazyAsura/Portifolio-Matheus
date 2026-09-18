import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, Geist_Mono } from "next/font/google";
import { Box } from "@mui/material";
import "./globals.css";
import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import StoreProvider from "./store/provider";
import { PerformanceProvider } from "./lib/performance";
import SmoothScroll from "./ui/components/SmoothScroll";
import Preloader from "./ui/components/Preloader";
import ScrollProgressBar from "./ui/components/ScrollProgressBar";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Matheus Mendonça Trindade — Psicologia & Humanização",
  description:
    "Portfólio acadêmico e profissional de Matheus Mendonça Trindade. Estudante de Psicologia (9º período - UniNassau), atuação clínica supervisionada, Acompanhamento Terapêutico (TEA) e formação técnica em Administração.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Matheus Mendonça Trindade — Psicologia & Humanização",
    description:
      "Estudante de Psicologia na UniNassau, atuação clínica supervisionada e Acompanhamento Terapêutico.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${newsreader.variable} ${inter.variable} ${geistMono.variable} font-sans bg-[#fafaf9] text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <PerformanceProvider>
            <Preloader />
            <ScrollProgressBar />
            <SmoothScroll>
              <Header />
              <Box sx={{ flex: 1 }}>{children}</Box>
              <Footer />
            </SmoothScroll>
          </PerformanceProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

