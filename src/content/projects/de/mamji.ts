import mamji0 from "../../../assets/images/projects/mamji/mamji-0.png";
import mamji1 from "../../../assets/images/projects/mamji/mamji-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Mamji Hospital App",
  theme: "dark",
  tags: ["flutter", "firebase", "uiux"],
  videoBorder: false,
  description:
    "Die offizielle App des Mamji Hospital — ein 100-Betten-Krankenhaus in Karachi mit modernem Gebäude und engagiertem Team.<br/><br/>Patienten-Experience: Arztauswahl, Terminbuchung, Abteilungsinformationen und Krankenhaus-Services an einem Ort.",
  live: "https://play.google.com/store/apps/details?id=com.hospital_mamji",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mamji0,
        alt: "Mamji Hospital App Screenshot",
        caption: "Mamji Hospital – 100 Betten, moderne Einrichtung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mamji1,
        alt: "Mamji Hospital App Screenshot",
        caption: "Ärzte, Abteilungen & Services",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Patienten-Portal:</strong> Arztauswahl, Terminbuchung und Abteilungsinformationen.",
          "<strong>Krankenhaus-Services:</strong> Übersicht von Einrichtungen, Zeiten und Kontaktwegen.",
          "<strong>Clean UX:</strong> Zugängliches Design für Patienten jeden Alters.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
