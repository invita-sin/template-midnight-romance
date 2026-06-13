import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./theme-presets.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const title = "Midnight Romance — Undangan Pernikahan";

export const metadata: Metadata = {
  title,
  description:
    "Undangan pernikahan digital dengan tema Midnight Romance. Informasi acara, konfirmasi kehadiran, dan doa restu.",
  openGraph: {
    title,
    description:
      "Undangan pernikahan digital dengan tema Midnight Romance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Midnight Romance Wedding",
              description: "Pernikahan Midnight Romance",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-hidden">{children}</body>
    </html>
  );
}
