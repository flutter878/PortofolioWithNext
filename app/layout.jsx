import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Portofolio",
  description: "Portofolio saya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <Header />
      <body className="font-jetbrains">{children}</body>
    </html>
  );
}
