import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400","700"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: { default: "Silent Prototype Holdings", template: "%s — Silent Prototype" },
  description: "A privately held portfolio of companies. Legacy over noise.",
  metadataBase: new URL("https://silentprototype.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimson.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-ink text-bone antialiased">
        <div className="mx-auto max-w-6xl px-5">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
