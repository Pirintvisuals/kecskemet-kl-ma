import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kecskemetklima.hu"),
  title: {
    default: "Kecskemét Klíma – Klímaszerelés, karbantartás és javítás Kecskeméten",
    template: "%s | Kecskemét Klíma",
  },
  description:
    "Prémium klímaszerelés Kecskeméten és 30 km-es körzetében. Klíma telepítés, karbantartás, tisztítás, javítás és beüzemelés – garanciával és számlával. Gyors kiszállás, átlátható ár.",
  keywords: [
    "klímaszerelés Kecskemét",
    "klíma telepítés",
    "klíma karbantartás",
    "klíma tisztítás",
    "klíma javítás",
    "légkondicionáló Kecskemét",
    "klíma beüzemelés",
  ],
  authors: [{ name: "Polyák Zoltán" }],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    title: "Kecskemét Klíma – Klímaszerelés, amire számíthat",
    description:
      "Klíma telepítés, karbantartás, javítás és beüzemelés Kecskeméten. Garancia + számla minden munkára. Hívjon: +36 30 260 57 56",
    siteName: "Kecskemét Klíma",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        {/* Safety net: if JS never runs, reveal all animated (opacity:0) content. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-foreground">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
