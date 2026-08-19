export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  result: string;
  stack: string[];
  highlights: string[];
  category: "featured" | "lab";
  status: "Producció" | "En desenvolupament" | "Experimental";
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "immobles-priorat",
    name: "Immobles Priorat",
    eyebrow: "Plataforma immobiliària",
    category: "featured",
    status: "Producció",
    description:
      "Web immobiliària completa per a un negoci real, amb catàleg, filtres, usuaris, favorits, administració d'immobles, imatges i contingut multidioma.",
    result:
      "Producte desplegat i operatiu, construït per resoldre necessitats comercials i de gestió d'una immobiliària.",
    stack: ["Python", "Flask", "MySQL", "JavaScript", "Jinja", "CSS"],
    highlights: [
      "CRUD complet d'immobles i usuaris",
      "Gestió i optimització d'imatges",
      "Favorits i missatgeria per immoble",
      "Català, castellà i anglès",
      "Panell d'administració",
      "Desplegament en producció",
    ],
  },

  {
    slug: "salaryapp",
    name: "SalaryApp",
    eyebrow: "Aplicació mòbil + API REST",
    category: "featured",
    status: "Producció",
    description:
      "Aplicació per organitzar empreses, conceptes salarials i períodes i obtenir una estimació clara del salari mensual.",
    result:
      "Arquitectura multiusuari amb autenticació, persistència al núvol i separació estricta de dades per usuari.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Neon",
    ],
    highlights: [
      "Autenticació JWT i Argon2",
      "API REST amb TypeScript",
      "Base de dades PostgreSQL",
      "Gestió de múltiples empreses",
      "Conceptes salarials personalitzables",
      "Aplicació Android amb Expo",
    ],
  },

  {
    slug: "localplayer-tv",
    name: "LocalPlayer TV",
    eyebrow: "Software per Samsung TV",
    category: "featured",
    status: "En desenvolupament",
    description:
      "Reproductor multimèdia local per a televisors Samsung Tizen orientat a reproduir contingut directament des de dispositius USB.",
    result:
      "Projecte que combina una interfície web per a Tizen amb un motor desenvolupat en C++ i compilat a WebAssembly.",
    stack: [
      "C++",
      "WebAssembly",
      "Tizen",
      "JavaScript",
      "FFmpeg",
    ],
    highlights: [
      "Aplicació nativa per a Samsung Tizen",
      "Motor desenvolupat en C++",
      "Compilació a WebAssembly",
      "Detecció de dispositius USB",
      "Exploració del sistema de fitxers",
      "Integració amb reproducció multimèdia",
    ],
  },

  {
    slug: "chess-engine",
    name: "Chess Engine",
    eyebrow: "Motor de joc",
    category: "lab",
    status: "Experimental",
    description:
      "Motor d'escacs desenvolupat per permetre que un jugador s'enfronti contra una màquina.",
    result:
      "Projecte enfocat a treballar amb lògica algorítmica, representació d'estats, moviments i presa automatitzada de decisions.",
    stack: [
      "Algoritmes",
      "Lògica de joc",
      "IA",
    ],
    highlights: [
      "Motor de joc funcional",
      "Jugador contra màquina",
      "Validació de moviments",
      "Gestió de l'estat del tauler",
      "Lògica de presa de decisions",
    ],
  },

  {
    slug: "lucy",
    name: "Lucy",
    eyebrow: "Experiment d'intel·ligència artificial",
    category: "lab",
    status: "Experimental",
    description:
      "Sistema experimental d'intel·ligència artificial amb una arquitectura inspirada en els conceptes d'Id, Ego i Superego.",
    result:
      "Exploració d'una arquitectura pròpia per separar generació d'impulsos, control, presa de decisions i memòria persistent.",
    stack: [
      "C#",
      ".NET",
      "Entity Framework",
      "PostgreSQL",
    ],
    highlights: [
      "Arquitectura modular",
      "Id, Ego i Superego",
      "Sistema de memòria Atlas",
      "Persistència amb PostgreSQL",
      "Entity Framework Core",
    ],
  },

  {
    slug: "contacontes",
    name: "ContaContes",
    eyebrow: "Aplicació infantil",
    category: "lab",
    status: "En desenvolupament",
    description:
      "Plataforma pensada com una biblioteca digital de contes perquè les famílies puguin tenir històries disponibles des del mòbil.",
    result:
      "Producte en desenvolupament orientat a combinar una experiència de lectura senzilla amb una arquitectura preparada per créixer.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
    ],
    highlights: [
      "Aplicació mòbil",
      "Biblioteca de contes",
      "Experiència pensada per a famílies",
      "Frontend amb React Native",
      "Backend amb Node.js",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}