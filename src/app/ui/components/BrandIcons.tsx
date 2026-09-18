import React from "react";

export interface BrandIconProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * Ícone Oficial do WhatsApp
 */
export function WhatsAppIcon({ size = 24, className, color = "currentColor" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.277-.1-.478-.15-.679.15-.201.301-.78 1-.955 1.201-.176.201-.351.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.679-1.636-.93-2.242-.244-.59-.492-.51-.679-.52l-.578-.01c-.201 0-.527.075-.804.377-.276.301-1.055 1.03-1.055 2.513s1.08 2.915 1.23 3.116c.151.201 2.126 3.247 5.151 4.555.72.311 1.282.497 1.72.636.723.23 1.381.197 1.901.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.954.563 3.844 1.63 5.485L2 22l4.636-1.619a9.96 9.96 0 0 0 5.404 1.631h.004c5.524 0 10.012-4.488 10.012-10.012C22.056 6.488 17.568 2 12.04 2zm0 18.334h-.003a8.29 8.29 0 0 1-4.225-1.157l-.303-.18-3.14 1.095 1.098-3.057-.197-.314a8.31 8.31 0 0 1-1.272-4.709c0-4.582 3.728-8.31 8.313-8.31 2.22 0 4.307.865 5.876 2.434a8.27 8.27 0 0 1 2.43 5.876c0 4.583-3.729 8.312-8.297 8.312z" />
    </svg>
  );
}

/**
 * Ícone Oficial do LinkedIn
 */
export function LinkedInIcon({ size = 24, className, color = "currentColor" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.46c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z" />
    </svg>
  );
}

/**
 * Ícone Oficial do Instagram
 */
export function InstagramIcon({ size = 24, className, color = "currentColor" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/**
 * Ícone Oficial de E-mail / Mensagem Institucional
 */
export function MailIcon({ size = 24, className, color = "currentColor" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

