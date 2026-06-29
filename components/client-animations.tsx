"use client"

import dynamic from "next/dynamic"

// Content-bearing wrappers are server-rendered so their text is present in the
// static HTML for search engine crawlers. The animations still run on the client
// after hydration. Only the purely decorative, canvas/window-based backgrounds
// keep SSR disabled.
export const AnimatedText = dynamic(() => import("@/components/animated-text").then((mod) => mod.AnimatedText))
export const AnimatedSection = dynamic(() => import("@/components/animated-section").then((mod) => mod.AnimatedSection))
export const AnimatedCard = dynamic(() => import("@/components/animated-card").then((mod) => mod.AnimatedCard))
export const ClientMotion = dynamic(() => import("framer-motion").then((mod) => mod.motion.div))
export const ParticleBackground = dynamic(
  () => import("@/components/particle-background").then((mod) => mod.ParticleBackground),
  { ssr: false },
)
export const AnimatedGradientBackground = dynamic(
  () => import("@/components/ui/animated-gradient-background").then((mod) => mod.AnimatedGradientBackground),
  { ssr: false },
)
