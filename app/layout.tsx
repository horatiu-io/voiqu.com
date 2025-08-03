import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const meta Metadata = {
  title: "Growth Hacker - I Build Growth Engines for Ambitious Brands",
  description:
    "Leveraging data analytics, conversion rate optimization, and full-funnel marketing strategies to help you scale.",
  generator: "v0.dev",
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
      </head>
      <body className={`${inter.className} bg-[#0D0D0D] text-white`}>
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

        {/* Hidden form for Netlify bot detection */}
        <form 
          name="contact" 
          method="POST"
          {...{ "data-netlify": "true" }}
          {...{ "data-netlify-honeypot": "bot-field" }}
          style={{ display: "none" }}
        >
          <input type="text" name="fullName" />
          <input type="text" name="companyName" />
          <input type="email" name="workEmail" />
          <input type="tel" name="phoneNumber" />
          <textarea name="projectDescription"></textarea>
          <input type="text" name="interestedServices" />
          <input type="text" name="budgetRange" />
        </form>

        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
