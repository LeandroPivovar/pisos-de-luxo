import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Pisos de Luxo | Pisos e Acabamentos em Itajaí",
  description: "Venda e instalação de pisos vinílicos, laminados, rodapés e papel de parede em Itajaí e região.",
  keywords: ["pisos em Itajaí", "piso vinílico", "piso laminado", "rodapés", "papel de parede"],
  openGraph: {
    title: "Pisos de Luxo | Acabamentos que transformam",
    description: "Pisos e acabamentos instalados com precisão em Itajaí e região.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/assets/logo-pisos-de-luxo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
