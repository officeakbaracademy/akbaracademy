import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

// Poppins — the official Akbar Academy brand typeface.
const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Akbar Academy | Better Grades Need a Better System",
    template: "%s | Akbar Academy",
  },
  description: site.description,
  keywords: [
    "IGCSE tuition",
    "A-Level tuition",
    "GCSE tuition",
    "Physics tuition",
    "Chemistry tuition",
    "Biology tuition",
    "Maths tuition",
    "English tuition",
    "Kuwait",
    "GCC",
    "Cambridge",
    "Edexcel",
    "AQA",
    "online tutoring",
  ],
  openGraph: {
    type: "website",
    title: "Akbar Academy | Better Grades Need a Better System",
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Academy | Better Grades Need a Better System",
    description: site.description,
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
