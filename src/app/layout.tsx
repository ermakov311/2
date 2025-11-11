import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "АвтоГарантСити - Специализированный автоцентр Toyota и Lexus",
  description: "Профессиональное обслуживание автомобилей Toyota и Lexus в Москве. Оригинальные запчасти, современное оборудование, гарантия качества. Онлайн-запись на услуги.",
  keywords: "автосервис, Toyota, Lexus, Москва, ремонт автомобилей, ТО, диагностика, оригинальные запчасти",
  authors: [{ name: "АвтоГарантСити" }],
  openGraph: {
    title: "АвтоГарантСити - Специализированный автоцентр Toyota и Lexus",
    description: "Профессиональное обслуживание автомобилей Toyota и Lexus в Москве. Оригинальные запчасти, современное оборудование, гарантия качества.",
    type: "website",
    locale: "ru_RU",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
