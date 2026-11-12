import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
  Mrs_Saint_Delafield,
} from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taxci.vercel.app"),
  title: {
    default: "Taxci | Find the Right Words",
    template: "%s | Taxci",
  },
  description:
    "Turn messy thoughts, voice notes, and rough drafts into clear, confident writing with Taxci.",
  icons: {
    icon: "/icons8-t-50.png",
    shortcut: "/icons8-t-50.png",
    apple: "/icons8-t-50.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${script.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
