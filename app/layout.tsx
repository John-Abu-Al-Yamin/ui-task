import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorAnimation from "./components/CursorAnimation";
import NavSticky from "./components/Sticky/NavSticky";
import BtnWathsApp from "./components/BtnWathsApp";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softwares | MachinaFusion",
  description:
    "MachinaFusion is a software development company that specializes in creating innovative and efficient software solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorAnimation />
          <NavSticky />
          {/* <BtnWathsApp /> */}

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
