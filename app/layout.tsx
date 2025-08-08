import type { Metadata } from "next";
import { Montserrat, Fira_Code } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CJD Services",
  description: "Professional services for your business needs",
  icons: {
    icon: '/Icon.ico',
  },
  openGraph: {
    images: ['/Horizontal Logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
