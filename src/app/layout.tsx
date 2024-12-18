import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/navbar"
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Figma Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        
      <Navbar />
      {children}
      <Footer/>
      </body>
    </html>
  )
}

