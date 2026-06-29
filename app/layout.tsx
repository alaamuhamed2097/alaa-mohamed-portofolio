import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://alaa-mohamed.com"
const title = "Alaa Mohamed | Senior .NET Developer & Team Lead"
const description =
  "Senior .NET Developer & Team Lead — clean backend architecture, DDD, and scalable systems."

// These are public values (they appear in the page source anyway), so they are
// baked in as defaults and work on every build with no hosting config needed.
// An env var, if set, takes precedence.
// Google Search Console verification code (the "content" value of the meta tag).
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "uTSJKYos8erNqymBeR6GNTjOsX7BCu0S1DlBkVBfi74"
// Google Analytics 4 Measurement ID, e.g. "G-XXXXXXXXXX".
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? "G-NGNCXSTJXG"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alaa Mohamed",
  },
  description,
  applicationName: "Alaa Mohamed",
  authors: [{ name: "Alaa Mohamed", url: siteUrl }],
  creator: "Alaa Mohamed",
  publisher: "Alaa Mohamed",
  keywords: [
    "Alaa Mohamed",
    "Senior .NET Developer",
    "Team Lead",
    ".NET",
    "C#",
    "ASP.NET Core",
    "Backend Developer",
    "Software Engineer",
    "Domain-Driven Design",
    "DDD",
    "Clean Architecture",
    "Microservices",
    "Portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alaa Mohamed",
    locale: "en_US",
    title,
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alaa Mohamed — Senior .NET Developer & Team Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  other: {
    "geo.region": "EG-C",
    "geo.placename": "Cairo, Egypt",
    "geo.position": "30.0444;31.2357",
    ICBM: "30.0444, 31.2357",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alaa Mohamed",
  url: siteUrl,
  image: `${siteUrl}/images/profile.png`,
  jobTitle: "Senior .NET Developer & Team Lead",
  description,
  email: "contact@alaa-mohamed.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  worksFor: {
    "@type": "Organization",
    name: "ITLegend",
  },
  knowsAbout: [
    ".NET",
    "C#",
    "ASP.NET Core",
    "Backend Architecture",
    "Domain-Driven Design",
    "Clean Architecture",
    "Microservices",
    "Distributed Systems",
  ],
  sameAs: [
    "https://linkedin.com/in/alaa-mohamed-879966321",
    "https://github.com/alaamuhamed2097",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  )
}
