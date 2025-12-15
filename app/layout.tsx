import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "The Last Lighthouse Keeper — Người Gác Đèn Cuối Cùng",
  description:
    "Một hành trình 45 năm của người gác đèn biển cuối cùng Việt Nam. Trải nghiệm kể chuyện tương tác đoạt giải với scroll animation độc đáo, khám phá câu chuyện cảm động về sự cô đơn, cống hiến và tình yêu biển cả.",
  generator: "Next.js",
  applicationName: "The Last Lighthouse Keeper",
  keywords: [
    "lighthouse keeper vietnam",
    "interactive storytelling",
    "scroll animation",
    "award winning design",
    "cinematic experience",
    "người gác đèn",
    "hải đăng việt nam",
    "immersive story",
    "webgl animation",
    "emotional journey",
  ],
  authors: [{ name: "Nguyễn Ngọc Tuấn Anh" }],
  creator: "Nguyễn Ngọc Tuấn Anh",
  publisher: "Nguyễn Ngọc Tuấn Anh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Last Lighthouse Keeper — Người Gác Đèn Cuối Cùng",
    description:
      "45 năm một mình giữa biển khơi. Khám phá hành trình cảm động về sự cống hiến, cô đơn và tình yêu biển cả qua trải nghiệm tương tác đột phá.",
    type: "website",
    locale: "vi_VN",
    siteName: "The Last Lighthouse Keeper",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Lighthouse Keeper",
    description: "45 năm một mình giữa biển khơi — Câu chuyện người gác đèn cuối cùng",
    creator: "@tuananh",
  },
  category: "Interactive Story",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d12" },
    { media: "(prefers-color-scheme: light)", color: "#0c0d12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
