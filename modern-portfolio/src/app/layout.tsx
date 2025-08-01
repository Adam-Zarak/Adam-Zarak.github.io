import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Zarak - Mechanical Engineer",
  description: "Mechanical Engineer specializing in Control Systems, GNC, and Autonomous Systems Development",
  keywords: ["mechanical engineer", "control systems", "GNC", "autonomous systems", "rocketry"],
  authors: [{ name: "Adam Zarak" }],
  openGraph: {
    title: "Adam Zarak - Mechanical Engineer",
    description: "Specializing in Control Systems, GNC, and Autonomous Systems Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
