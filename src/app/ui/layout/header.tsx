"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/app/ui/components/BrandIcons";
import CraftButton from "../components/CraftButton";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setIsScrolled, setMobileMenuOpen } from "@/app/store/slices/uiSlice";

const NAV_LINKS = [
  { name: "Início", href: "#hero" },
  { name: "Abordagem", href: "#pilares" },
  { name: "Vivências", href: "#vivencias" },
  { name: "Trajetória", href: "#trajetoria" },
  { name: "Formação", href: "#formacao" },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const { isScrolled, mobileMenuOpen } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setIsScrolled(window.scrollY > 24));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between pointer-events-auto px-4 sm:px-6 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_4px_20px_-4px_rgba(0,0,0,0.06)]"
              : "bg-[#0f1115]/80 border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_0_rgba(0,0,0,0.37)]"
          }`}
        >
          {/* Logo & Identity */}
          <Link
            href="#hero"
            className="flex items-center gap-3 no-underline text-inherit focus-visible:outline-2 focus-visible:outline-emerald-600 focus-visible:outline-offset-2 rounded-full"
          >
            <div className="w-8.5 h-8.5 rounded-[10px] bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 text-white flex items-center justify-center font-black text-[1.05rem] font-sans shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_2px_8px_rgba(5,150,105,0.3)] transition-transform duration-200 hover:scale-105">
              M
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold leading-tight text-[0.825rem] sm:text-[0.9rem] transition-colors duration-200 ${
                  isScrolled ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Matheus Mendonça
              </span>
              <span
                className={`font-semibold text-[0.675rem] tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-200 ${
                  isScrolled ? "text-emerald-700" : "text-emerald-400"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                9º Período • Psicologia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full font-medium text-[0.825rem] no-underline transition-all duration-150 ${
                  isScrolled
                    ? "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <CraftButton
                href="#contato"
                size="sm"
                variant="primary"
                rightIcon={<WhatsAppIcon size={14} color="#ffffff" />}
              >
                Conversar
              </CraftButton>
            </div>

            <button
              type="button"
              onClick={() => dispatch(setMobileMenuOpen(true))}
              aria-label="Abrir menu"
              className={`flex md:hidden p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-slate-900 hover:bg-zinc-100"
                  : "text-slate-100 hover:bg-white/10"
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto z-50"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-3 inset-x-3 sm:inset-x-6 max-w-lg mx-auto bg-white/98 backdrop-blur-2xl rounded-3xl border border-zinc-200 shadow-2xl p-6 pointer-events-auto z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-emerald-800 uppercase tracking-wider">
                  Navegação
                </span>
                <button
                  type="button"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  aria-label="Fechar menu"
                  className="p-1.5 rounded-full text-zinc-600 hover:bg-zinc-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-slate-800 font-semibold text-[0.95rem] hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} className="text-zinc-400" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100">
                <CraftButton
                  href="#contato"
                  size="md"
                  variant="primary"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  rightIcon={<WhatsAppIcon size={16} color="#ffffff" />}
                  className="w-full justify-center"
                >
                  Entrar em Contato
                </CraftButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
