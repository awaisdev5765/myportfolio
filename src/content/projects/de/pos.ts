import pos0 from "../../../assets/images/projects/pos/pos-0.png";
import pos1 from "../../../assets/images/projects/pos/pos-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Premium Lite POS",
  theme: "dark",
  tags: ["flutter", "kotlin", "payments"],
  videoBorder: false,
  description:
    "Eine smarte, leichte Point-of-Sale-Lösung für Kassierer und kleine Unternehmen, live auf Google Play.<br/><br/>Komplettentwicklung: Verkaufs- und Lagerverwaltung, komplexe Abrechnungen, Bon-Druck auf Sunmi-Geräten und anforderungsbasierte Umsetzung mit Stakeholdern.",
  live: "https://play.google.com/store/apps/details?id=com.atgpos.pos",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pos0,
        alt: "Premium Lite POS Screenshot",
        caption: "Premium Lite POS – smarte Kassenlösung für kleine Unternehmen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pos1,
        alt: "Premium Lite POS Screenshot",
        caption: "Verkaufs- & Lagerverwaltung",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen & Architektur",
        items: [
          "<strong>Bon-Druck:</strong> Anbindung von Sunmi-Geräten für den physischen Bon-Druck direkt aus der App.",
          "<strong>Abrechnungs-Engine:</strong> Komplexe Berechnungen für Steuern, Rabatte und Multi-Currency-Checkout.",
          "<strong>Leichte UX:</strong> Einfach zu bedienende Oberfläche für Kassierer ohne Schulungsaufwand.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
