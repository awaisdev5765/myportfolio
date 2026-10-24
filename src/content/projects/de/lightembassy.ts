import le0 from "../../../assets/images/projects/lightembassy/lightembassy-0.png";
import le1 from "../../../assets/images/projects/lightembassy/lightembassy-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Light Embassy – Community-App",
  theme: "dark",
  tags: ["kotlin", "firebase", "fullstack"],
  videoBorder: false,
  description:
    "Eine spirituelle Begleit-App für das tägliche Wachstum — Lehren, Predigten, Podcasts, tägliches Gebetsangebot und eine einladende Community.<br/><br/>Komplette Community-Experience: Video-Botschaften on-demand, Audio-Podcasts und Live-Radio-Streaming, tägliche Andachten und Community-Features — alles auf Firebase-Services.",
  live: "https://play.google.com/store/apps/details?id=com.lightembassy.android",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: le0,
        alt: "Light Embassy Community Screenshot",
        caption: "Lehren, Predigten & Podcasts an einem Ort",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: le1,
        alt: "Light Embassy Community Screenshot",
        caption: "Live-Radio & Community-Features",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Mediathek:</strong> Aktuelle Botschaften ansehen, Podcasts unterwegs hören und Live-Radio miterleben.",
          "<strong>Tägliches Wachstum:</strong> Tägliche Andachten und Gebetsangebote für die Community.",
          "<strong>Community:</strong> Ein einladender Ort, an dem Mitglieder sich verbinden und gemeinsam wachsen.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
