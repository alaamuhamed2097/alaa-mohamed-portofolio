import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alaa Mohamed | Senior .NET Developer & Team Lead",
    short_name: "Alaa Mohamed",
    description:
      "Portfolio of Alaa Mohamed, Senior .NET Developer and Team Lead specializing in clean backend architecture, DDD, and scalable systems",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
