import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SnowfallEffect from "./components/snowfall";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "openQuanta",
  description: "Publish your research on-chain, create authorship NFT with metadata, earn recognition without gatekeepers, and join a global community redefining publishing collaboration.",
  icons: {
    icon: "/icons/siteicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className={`${montserrat.className} ${montserrat.variable} antialiased tracking-tighter`}>
        <SnowfallEffect />
        {children}
      </body>
    </html>
  );
}
