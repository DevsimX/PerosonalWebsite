import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yutian Xia - Full-Stack Developer | Modern Portfolio",
  description: "Passionate full-stack developer specializing in React, Next.js, Django, and modern web technologies. Creating exceptional digital experiences that make a difference.",
  keywords: "Full-Stack Developer, React, Next.js, Django, TypeScript, JavaScript, Web Development, Portfolio, Melbourne, Australia",
  authors: [{ name: "Yutian Xia" }],
  creator: "Yutian Xia",
  openGraph: {
    title: "Yutian Xia - Full-Stack Developer",
    description: "Passionate full-stack developer creating exceptional digital experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yutian Xia - Full-Stack Developer",
    description: "Passionate full-stack developer creating exceptional digital experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
