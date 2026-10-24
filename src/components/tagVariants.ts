export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "pandas"
  | "sql"
  | "powerbi"
  | "ai"
  | "figma"
  | "uiux"
  | "fullstack"
  | "flutter"
  | "reactnative"
  | "swift"
  | "kotlin"
  | "firebase"
  | "payments";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  pandas: "Pandas",
  sql: "SQL",
  powerbi: "Power BI",
  ai: "Generative AI",
  figma: "Figma",
  uiux: "UI/UX",
  fullstack: "Full-Stack",
  flutter: "Flutter",
  reactnative: "React Native",
  swift: "Swift",
  kotlin: "Kotlin",
  firebase: "Firebase",
  payments: "Payments",
} as const satisfies Record<TagVariant, string>;
