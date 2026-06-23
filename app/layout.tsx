import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://alaa-mohamed.com"
const title = "Alaa Mohamed | Senior .NET Developer & Team Lead"
const description =
  "Portfolio of Alaa Mohamed, Senior .NET Developer and Team Lead specializing in clean backend architecture, DDD, and scalable systems"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  generator: "v0.dev",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alaa Mohamed",
    title,
    description,
    images: [
      {
        url: "/images/profile.png",
        width: 1468,
        height: 1468,
        alt: "Alaa Mohamed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
