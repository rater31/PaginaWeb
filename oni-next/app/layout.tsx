
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Ico from "../lib/public/favicon.ico";

const mont = Montserrat({ subsets: ["latin"], weight: ["400","600","700","800"], variable: "--font-mont", display: "swap" });

export const metadata: Metadata = {
  title: "Oni Solutions — Mantenimiento y Seguridad IT | Córdoba",
  description: "Mantenimiento y Seguridad IT en Córdoba. Optimización, limpieza, upgrades SSD, eliminación de malware e instalaciones. Diagnósticos claros.",
  themeColor: "#121212",
  icons: [{ rel: "icon", url: `../lib/public/favicon.ico` }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-black text-white">
      <body className={`${mont.variable} font-mont antialiased`}>{children}</body>
    </html>
  );
}
