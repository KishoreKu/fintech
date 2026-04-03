import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FinAnomaly AI | Anomaly Intelligence for Every Fintech",
  description: "Detect fraud, unusual spending, errors, and surprises in real time with FinAnomaly AI API. One simple API call, works with any stack.",
  keywords: ["FinTech", "AI", "Anomaly Detection", "Fraud Prevention", "API", "Banking", "SaaS"],
  authors: [{ name: "FinAnomaly AI" }],
  openGraph: {
    title: "FinAnomaly AI | Anomaly Intelligence for Every Fintech",
    description: "Catch fraud and weird transactions in real time with one simple API call.",
    type: "website",
    url: "https://finanomaly.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FinAnomaly AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinAnomaly AI | Anomaly Intelligence for Every Fintech",
    description: "One API call for real-time transaction anomaly detection.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
