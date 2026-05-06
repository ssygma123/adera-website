import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://adera.design"),
  title: {
    default: "Adera — AI Ads that convert. Prompts that perform.",
    template: "%s · Adera"
  },
  description:
    "Adera is a modern AI advertising & prompt agency. We design AI-generated ads and sell battle-tested prompts for teams that ship.",
  openGraph: {
    title: "Adera — AI Ads that convert. Prompts that perform.",
    description:
      "Modern AI advertising & prompt agency. AI-generated ads and prompt packs for teams that ship.",
    url: "https://adera.design",
    siteName: "Adera",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adera",
    description: "AI Ads that convert. Prompts that perform."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
