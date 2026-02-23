import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/Starfield";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETERNA — Blueprint $1T",
  description:
    "Longevidad · Space Biology · AI · Transhumanismo. El protocolo de longevidad personalizado más riguroso del mundo.",
  openGraph: {
    title: "AETERNA — Blueprint $1T",
    description:
      "Longevidad · Space Biology · AI · Transhumanismo. La Tierra es el laboratorio. El Espacio es la prueba.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jetbrains.variable} ${outfit.variable}`}
    >
      <body className={outfit.className}>
        <Starfield />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
