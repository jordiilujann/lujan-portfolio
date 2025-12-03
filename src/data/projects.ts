// src/data/projects.ts

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;

  // Detalle extendido (opcional)
  descriptionLong?: string;

  // Metadatos opcionales
  role?: string;      // Rol en el proyecto (Frontend, Full-stack…)
  kind?: string;      // Tipo de proyecto (académico, personal…)
  year?: string;

  // Chips que mostramos en las tarjetas
  tags: string[];

  // Stack algo más detallado si quieres
  tech?: string[];

  // Enlaces opcionales
  repoUrl?: string;
  liveUrl?: string;

  // Capturas / gifs (puede estar vacío)
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "solidarity-hub",
    title: "Solidarity Hub Visualization",
    subtitle: "Frontend · Visualización de datos",
    description:
      "Módulo web para visualizar recursos y afectados en catástrofes.",
    descriptionLong: `
Este módulo forma parte de un sistema mayor utilizado para gestionar recursos
y personas afectadas en situaciones de emergencia. 

Desde este panel los ayuntamientos pueden consultar cuántos voluntarios y
afectados hay por zona, ver mapas, estadísticas y tablas comparativas, todo
conectado a una API compartida con otros módulos del sistema.
    `.trim(),
    role: "Frontend principal",
    kind: "Proyecto académico · Blazor Server",
    year: "2024",
    tags: ["Blazor", ".NET", "PostgreSQL"],
    tech: ["C#", "Blazor Server", "Entity Framework Core", "PostgreSQL"],
    images: [], // cuando tengas capturas, las añades aquí
  },
  {
    id: "record",
    title: "Record · Gestión de eventos",
    subtitle: "Full-stack académico",
    description:
      "Aplicación web para gestión de eventos y reservas con Angular y Node.js.",
    descriptionLong: `
Aplicación desarrollada como proyecto académico para gestionar eventos,
reservas y aforo. Incluye panel para administradores, gestión de usuarios
y comunicación con un backend en Node.js mediante APIs REST.
    `.trim(),
    role: "Full-stack",
    kind: "Proyecto académico",
    year: "2024",
    tags: ["Angular", "Node.js", "REST APIs"],
    tech: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB"],
    images: [],
  },
  {
    id: "lujan-dev",
    title: "Lujan.dev (esta web)",
    subtitle: "Diseño, desarrollo y audio",
    description:
      "Portfolio personal orientado a desarrollo web y producción musical.",
    descriptionLong: `
Portfolio construido con Astro, TypeScript y Tailwind, con reproductores de audio
personalizados, animaciones físicas y secciones centradas en frontend y música.
    `.trim(),
    role: "Diseño y desarrollo completo",
    kind: "Proyecto personal",
    year: "2025",
    tags: ["Astro", "TypeScript", "Tailwind", "Audio"],
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
    images: [],
  },
];

// Helper para obtener un proyecto por id
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
