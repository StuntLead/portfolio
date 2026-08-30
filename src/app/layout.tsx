import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    template: "%s | Fernando Darren Rachman",
    default: "Fernando Darren Rachman — Software Engineering, Full-Stack & AI",
  },
  description: "Computer Science student with hands-on experience across full-stack development, banking middleware, REST APIs, relational systems, and applied AI.",
  openGraph: {
    title: "Fernando Darren Rachman",
    description: "Computer Science student with hands-on experience across full-stack development, banking middleware, REST APIs, relational systems, and applied AI.",
    type: "website",
    siteName: "Fernando Darren Rachman",
    // OG Image is pending. Do not add fake image URLs.
  },
  twitter: {
    card: "summary", // Downgraded from summary_large_image until a real OG image is ready
    title: "Fernando Darren Rachman",
    description: "Computer Science student with hands-on experience across full-stack development, banking middleware, REST APIs, relational systems, and applied AI.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Darren Rachman",
    jobTitle: "IT Developer Intern",
    worksFor: {
      "@type": "Organization",
      name: "PT Bank Hibank Indonesia"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "BINUS University"
    },
    email: "fernando.rachman@binus.ac.id",
    sameAs: [
      "https://www.linkedin.com/in/fernando-darren-rachman"
    ]
  };

  if (SITE_URL) {
    jsonLd.url = SITE_URL;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
