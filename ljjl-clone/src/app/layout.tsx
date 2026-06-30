import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LJJL - Latam Jiu-Jitsu League",
  description:
    "Professionalizing, standardizing, and expanding Jiu-Jitsu practice in Latin America through a world-class competition platform.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "LJJL - Latam Jiu-Jitsu League",
    description:
      "Professionalizing, standardizing, and expanding Jiu-Jitsu practice in Latin America through a world-class competition platform.",
    images: ["/logo-ljjl.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
