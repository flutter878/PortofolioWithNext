import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className={jetBrainsMono.variable} suppressHydrationWarning>
      <body className="font-jetbrains">
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `,
        }} />
        <ThemeProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
