export const social = [
  { url: "mailto:awaisdev5765@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/awais-rehman-6b898022a/", name: "linkedin" },
  { url: "https://github.com/awaisdev5765", name: "github" },
  { url: "https://play.google.com/store/apps/developer?id=Airtech+Solution", name: "playstore" },
  { url: "https://medium.com/@awaiscs", name: "medium" },
  { url: "https://codecanyon.net/user/awaisdev5765/portfolio", name: "codecanyon" },
  { url: "https://www.youtube.com/@awaisrehman6855", name: "youtube" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" | "playstore" | "medium" | "codecanyon" | "youtube" }[];
