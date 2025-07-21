import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://helpengine.co"),
  title: "Neumorphism - NextJS",
  description:
    "Neumorphism is a design style that uses soft, rounded shapes and light shadows to create a modern and friendly interface.",
  keywords: [
    "neumorphism",
    "nextjs",
    "react",
    "tailwindcss",
    "typescript",
  ],
  authors: [{ name: "Neumorphism", url: "https://neumorphism.com" }],
  creator: "Neumorphism",
  openGraph: {
    type: "website",
    url: "https://neumorphism.com",
    title: "Neumorphism - NextJS",
    description:
      "Neumorphism is a design style that uses soft, rounded shapes and light shadows to create a modern and friendly interface.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of Neumorphism"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@neumorphism",
    title: "Neumorphism - NextJS",
    description:
      "Neumorphism is a design style that uses soft, rounded shapes and light shadows to create a modern and friendly interface.",
    images: ["/og-cover.png"]
  }
};

export const viewport = {
  themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
