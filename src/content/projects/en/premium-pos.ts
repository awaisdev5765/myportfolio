import type { ProjectContent } from "../../types";

export default {
  title: "Premium POS – Retail Software",
  theme: "dark",
  tags: ["flutter", "kotlin", "payments", "fullstack"],
  videoBorder: false,
  description:
    "Premium POS is point-of-sale software built on a smart interface that any retail company can use without difficulty — designed for busy retailers.<br/><br/>Contributed across the product suite: the retail POS platform, its mobile companion apps (iOS & Android), and the web presence — covering sales, inventory, and customer management.",
  live: "https://premium-pos.com/",
  appstore: "https://apps.apple.com/pk/developer/atg-middle-east-company-w-l-l/id1764554258",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>Smart Retail Interface:</strong> A POS any retail company can operate without difficulty.",
          "<strong>Mobile Companion Apps:</strong> iOS and Android apps published under ATG Middle East.",
          "<strong>Retail Operations:</strong> Sales, inventory, and customer management for busy retailers.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
