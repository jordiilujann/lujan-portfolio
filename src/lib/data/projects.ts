export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  repo?: string;
  demo?: string;
  cover?: string;        // /projects/<slug>/cover.png
  images?: string[];     // /projects/<slug>/screen-1.png ...
  video?: string;        // /projects/<slug>/demo.mp4
  type: "dev" | "music";
};

export const projects: Project[] = [
  {
    slug: "solidarity-hub-visualization",
    title: "Solidarity Hub Visualization",
    summary:
      "Módulo web para visualizar recursos y personas afectadas en emergencias. Mapas, métricas y paneles con arquitectura organizada.",
    tech: [".NET", "Blazor", "PostgreSQL"],
    repo: "", // si es privado déjalo vacío
    cover: "/projects/solidarity-hub/cover.png",
    images: ["/projects/solidarity-hub/screen-1.png"],
    type: "dev",
  },
  {
    slug: "record",
    title: "Record",
    summary:
      "App con Angular + Node.js. Componentes reutilizables, formularios, guards y buenas prácticas frontend.",
    tech: ["Angular", "TypeScript", "Node.js"],
    repo: "",
    cover: "/projects/record/cover.png",
    type: "dev",
  },
  {
    slug: "lujan-dev",
    title: "Lujan.dev (portfolio)",
    summary:
      "Esta web: Astro + TS + Tailwind. One-page rápida, con audio player custom y secciones scroll.",
    tech: ["Astro", "TypeScript", "Tailwind"],
    repo: "https://github.com/jordiilujann/lujan-portfolio",
    cover: "/projects/lujan-dev/cover.png",
    type: "dev",
  },
];
