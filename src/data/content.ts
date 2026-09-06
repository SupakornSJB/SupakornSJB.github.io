export const profile = {
  handle: "SupakornSJB",
  name: "Supakorn Senlamai",
  nickname: "Tawan",
  title: "Junior Software Engineer & Master's Student — Full-Stack, Game & IoT Systems",
  location: "Pathum Thani, Thailand",
  tagline:
    "I build things across the whole stack — web apps, multiplayer games, and hardware-connected systems.",
  bio: [
    "I'm an ICE (Information & Communication Engineering) graduate from Chulalongkorn University, currently pursuing a Master's degree at the Asian Institute of Technology (AIT).",
    "Professionally, I've worked on a performance optimization team, tuning both frontend and backend paths — from SQL execution plan analysis to gRPC service call efficiency.",
    "I like projects that cross boundaries — wiring a physical button to a cloud pipeline that drives a Unity game, or turning a course assignment into something genuinely fun to use. Recent work spans full-stack web development, multiplayer game architecture, and IoT-to-cloud integration.",
    "Currently learning Rust (Bevy for games, Axum for web). Always happy to connect, regardless of whether it's about work.",
  ],
  github: "https://github.com/SupakornSJB",
  linkedin: "https://www.linkedin.com/in/supakorn-senlamai/",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    school: "Asian Institute of Technology (AIT)",
    degree: "Master's Degree — Information and Communication Technologies",
    period: "In progress",
  },
  {
    school: "Chulalongkorn University",
    degree: "B.Eng., Information and Communication Engineering (ICE)",
    period: "Aug 2020 – Jul 2024",
    detail: "GPA 3.63",
  },
];

// Non-work interests — shown as a small, casual counterweight to all the
// tech tags on the page.
export const interests = [
  { emoji: "🎬", label: "Anime" },
  { emoji: "🎲", label: "Gacha games (Genshin Impact, ZZZ)" },
  { emoji: "🔫", label: "FPS games" },
  { emoji: "🐎", label: "Horse racing" },
  { emoji: "🧵", label: "Cosplay" },
  { emoji: "🧴", label: "Skincare" },
  { emoji: "☕", label: "Coffee" },
];

// Canonical tag registry. Every skill pill and every project tech tag
// references one of these IDs, so "Unity3D" vs "Unity 6" or "Ethereum" vs
// "Web3" always collapse into the same clickable tag instead of drifting
// into near-duplicate strings.
export const TAGS = {
  typescript: "🔷 TypeScript",
  javascript: "🟨 JavaScript",
  csharp: "🟣 C#",
  python: "🐍 Python",
  java: "☕ Java",
  rust: "🦀 Rust",
  react: "⚛️ React",
  angular: "🅰️ Angular",
  tailwind: "💨 Tailwind CSS",
  daisyui: "🌼 DaisyUI",
  qwik: "⚡ Qwik",
  aspnet: "🌐 ASP.NET Core",
  nestjs: "🐱 NestJS",
  mongodb: "🍃 MongoDB",
  sql: "🗄️ SQL",
  neo4j: "🕸️ Neo4j / Graph DBs",
  websocket: "🔌 WebSocket",
  grpc: "📡 gRPC",
  unity: "🎮 Unity",
  unityCloud: "☁️ Unity Cloud",
  ngo: "🧩 Netcode for GameObjects",
  pygame: "👾 Pygame",
  mqtt: "📶 MQTT",
  mqttnet: "📦 MQTTnet",
  perfOptimization: "🚀 Performance Optimization",
  sqlTuning: "📊 SQL Execution Plan Tuning",
  git: "🐙 Git / GitHub",
  aws: "🧡 AWS",
  agile: "🏃 Agile / Scrum",
  blockchain: "⛓️ Ethereum / Blockchain",
  esp32: "📟 ESP32",
  micropython: "⚙️ MicroPython",
  multiplayerNetworking: "🔀 Multiplayer Networking",
  framerMotion: "🎞️ Framer Motion",
  pwa: "📲 Workbox / PWA",
  scss: "🎨 SCSS",
} as const;

export type TagId = keyof typeof TAGS;

export type SkillGroup = {
  label: string;
  skills: TagId[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["typescript", "javascript", "csharp", "python", "java", "rust"],
  },
  {
    label: "Frontend",
    skills: ["react", "angular", "tailwind", "daisyui", "qwik"],
  },
  {
    label: "Backend & Data",
    skills: ["aspnet", "nestjs", "mongodb", "sql", "neo4j", "websocket", "grpc", "perfOptimization", "sqlTuning"],
  },
  {
    label: "Game & Realtime",
    skills: ["unity", "unityCloud", "ngo", "pygame", "mqtt"],
  },
  {
    label: "Tools & Practices",
    skills: ["git", "aws", "agile", "blockchain"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  tech: TagId[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Quantium Technology",
    role: "Speed Optimization Team",
    period: "Jan 2025 – Present",
    current: true,
    description:
      "Working across both frontend and backend to track down and fix performance bottlenecks — profiling slow request paths, analyzing SQL execution plans, and tuning gRPC service calls.",
    tech: ["perfOptimization", "sqlTuning", "grpc", "sql"],
  },
];

export type ProjectCategory = "game" | "web" | "iot";

export type Project = {
  title: string;
  period: string;
  description: string;
  tech: TagId[];
  links: { label: string; url: string }[];
  categories: ProjectCategory[];
  featured?: boolean;
};

export const projectFilters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "game", label: "Game" },
  { key: "web", label: "Web" },
  { key: "iot", label: "IoT" },
];

export const projects: Project[] = [
  {
    title: "IoT Physical Multiplayer Game Controller",
    period: "AIT coursework",
    categories: ["game", "iot"],
    description:
      "A capstone system that turns any physical button into a multiplayer game controller. MicroPython firmware on ESP32 devices reads buttons, knobs, and sensors and publishes presses over MQTT; an ASP.NET Core relay server resolves device-to-player identity and forwards resolved events to a Unity dedicated server over gRPC, which runs an authoritative multiplayer 'Flappy Bird' using Netcode for GameObjects. Designed as a clean, extensible architecture across four layers: physical, relay, game server, and client.",
    tech: ["esp32", "micropython", "mqtt", "mqttnet", "aspnet", "grpc", "unity", "ngo"],
    links: [{ label: "Architecture & docs", url: "https://github.com/SupakornSJB/ATITFinalProject" }],
    featured: true,
  },
  {
    title: "Mayhem Quartet (FPS Procedurally Generated Network-Multiplayer Game)",
    period: "Aug 2023 – Apr 2024",
    categories: ["game"],
    description:
      "A multiplayer procedural first-person shooter built in Unity, with cloud-hosted matchmaking and session management via Unity Cloud. Bachelor's senior capstone project at Chulalongkorn University.",
    tech: ["unity", "unityCloud", "csharp", "multiplayerNetworking"],
    links: [{ label: "GitHub", url: "https://github.com/Mifuu/Senior-2023" }],
    featured: true,
  },
  {
    title: "Milemap",
    period: "Jan 2023 – Apr 2023",
    categories: ["web"],
    description:
      "A task management web app with gamification mechanics to make productivity more engaging, built as an installable offline-capable PWA.",
    tech: ["react", "tailwind", "framerMotion", "pwa"],
    links: [{ label: "GitHub", url: "https://github.com/capdetat-ICE15capstone/roadmap-app-frontend" }],
  },
  {
    title: "TeleQueue Counter",
    period: "Full-stack project",
    categories: ["web"],
    description:
      "A full-stack queue and counter management system with real-time updates pushed to every connected client over WebSocket.",
    tech: ["typescript", "angular", "nestjs", "websocket", "tailwind", "daisyui"],
    links: [
      { label: "Frontend", url: "https://github.com/SupakornSJB/tele-queue-counter" },
      { label: "Backend", url: "https://github.com/SupakornSJB/tele-queue-counter-backend" },
    ],
  },
  {
    title: "N-Queens Visualizer",
    period: "Algorithms",
    categories: ["web"],
    description:
      "An interactive web UI built to explain and visualize algorithms for solving the classic N-Queens problem, step by step.",
    tech: ["typescript", "react"],
    links: [
      { label: "Live demo", url: "https://supakornsjb.github.io/nqueen/" },
      { label: "GitHub", url: "https://github.com/SupakornSJB/nqueen" },
    ],
  },
  {
    title: "Blockchain QR Stamper",
    period: "AIT coursework",
    categories: ["web"],
    description:
      "A small web application that stamps data onto the Ethereum blockchain and lets anyone verify it later by scanning a generated QR code.",
    tech: ["typescript", "blockchain"],
    links: [{ label: "GitHub", url: "https://github.com/SupakornSJB/atit-assignment-4" }],
  },
  {
    title: "Space Tourism",
    period: "Frontend Mentor challenge",
    categories: ["web"],
    description:
      "A multi-page space travel site built with Angular, focused on matching a detailed design across breakpoints and typography systems.",
    tech: ["angular", "scss"],
    links: [
      { label: "Live demo", url: "https://supakornsjb.github.io/frmt-space/" },
      { label: "GitHub", url: "https://github.com/SupakornSJB/frmt-space" },
    ],
  },
];

export type LiveSite = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const liveSites: LiveSite[] = [
  {
    title: "N-Queens Visualizer",
    description:
      "Watch four different algorithms solve the N-Queens puzzle step by step, with live complexity charts comparing them.",
    url: "https://supakornsjb.github.io/nqueen/",
    image: "/screenshots/nqueen.png",
  },
  {
    title: "Space Tourism",
    description:
      "A Frontend Mentor challenge — a multi-page space travel site built with Angular, focused on responsive layout and typography.",
    url: "https://supakornsjb.github.io/frmt-space/",
    image: "/screenshots/frmt-space.png",
  },
];

export const certifications = [
  { name: "Graph Data Modeling Fundamentals", issuer: "Neo4j", date: "Nov 2025" },
  { name: "AWS Cloud Technical Essentials", issuer: "Coursera", date: "Sep 2022" },
  { name: "Prototyping and Design", issuer: "University of Minnesota", date: "Dec 2023" },
  { name: "Introduction to Agile Development and Scrum", issuer: "Coursera", date: "May 2023" },
  { name: "The AI Ladder: Deploying AI in the Enterprise", issuer: "IBM", date: "Nov 2023" },
];
