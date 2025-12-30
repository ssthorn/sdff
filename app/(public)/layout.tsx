import type { Metadata } from "next";
import { Rowdies, Racing_Sans_One, Istok_Web } from "next/font/google";
import "../globals.css";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold equivalents
  variable: "--font-rowdies",
});
const racingSans = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-racing-sans",
});

const istok = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-istok",
});
export const metadata: Metadata = {
  title: "San Diego Independent Film Festival",
  description: "San Diego Independent Film Festival – Official Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          rowdies.variable,
          racingSans.variable,
          istok.variable,
          "antialiased",
          // default body font: Arial/Istok/etc
          "font-sans",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
