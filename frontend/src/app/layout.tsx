import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import BotanikEffects from "@/components/common/BotanikEffects";
import "./styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Botani'K Afro — Le soin qui écoute vos boucles",
  description:
    "Soins capillaires naturels pour cheveux afro, bouclés, frisés et crépus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <BotanikEffects />
        {children}
      </body>
    </html>
  );
}
