import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomClerkProvider } from "@/providers";
import Toaster from "@/toaster";
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Alegreya, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";


const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Alegreya({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Sonic",
    template: "%s | Sonic"
  },
  description: "AI-powered text-to-speech, speech-to-text and voice-cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomClerkProvider >
      <html lang="en">
        <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </CustomClerkProvider>
  );
}