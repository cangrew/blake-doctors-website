import type { Metadata } from "next";
import { Archivo_Black, Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLAKE, MAKE THE APPOINTMENT: A Public Service Plea",
  description:
    "The brothers of Mu Eta Chapter of Phi Mu Alpha would like Blake to please schedule a doctor's appointment. Exhibit A has been entered into the record.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
