import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://voiqu.com"),
  title: {
    default: "Growth Marketing for B2B SaaS & E-commerce | Voiqu",
    template: "%s | Voiqu",
  },
  description:
    "Elevate your brand with data-driven growth. Horațiu Voicu is a Senior Growth Consultant blending AI, SEO, and automation to build scalable growth engines.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voiqu.com",
    siteName: "Voiqu",
    title: "Growth Marketing for B2B SaaS & E-commerce | Voiqu",
    description:
      "Elevate your brand with data-driven growth. Horațiu Voicu is a Senior Growth Consultant blending AI, SEO, and automation to build scalable growth engines.",
    images: [
      {
        url: "/h-voiqu.webp",
        alt: "Voiqu - Growth Hacker",
        width: 1200,
        height: 630,
      },
    ],
  }, // <-- Aici se închide obiectul openGraph. Pune virgula!
  other: {
    "og:logo": "https://voiqu.com/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Marketing for B2B SaaS & E-commerce | Voiqu",
    description:
      "Elevate your brand with data-driven growth. Horațiu Voicu is a Senior Growth Consultant blending AI, SEO, and automation to build scalable growth engines.",
    images: ["/h-voiqu.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5TJBP7');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          rel="preload"
          href="https://cdn-cookieyes.com/assets/images/revisit.svg"
          as="image"
          type="image/svg+xml"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.className} bg-[#0D0D0D] text-white`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TJBP7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
