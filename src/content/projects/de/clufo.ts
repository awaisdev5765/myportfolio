import clufo0 from "../../../assets/images/projects/clufo/ios-0.png";
import clufo1 from "../../../assets/images/projects/clufo/ios-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "CluFo – Vereinsplattform",
  theme: "dark",
  tags: ["swift", "swift", "fullstack"],
  videoBorder: false,
  description:
    "Die mobile Companion-App der CluFo-Vereinsplattform — für Mitglieder, Eltern und Administratoren von Sportvereinen und Verbänden (Schweiz).<br/><br/>Eine Plattform für Mitglieder, Events, Inventar, Finanzen und Sponsoren — mit KI-gestützten Funktionen. Entwicklung der iOS-Companion-App für Mitgliederservice, Eventmanagement und Admin-Tools.",
  live: "https://clufo.ch/",
  appstore: "https://apps.apple.com/us/app/clufo/id6792288157",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: clufo0,
        alt: "CluFo iOS Screenshot",
        caption: "CluFo iOS – Mitglieder-Übersicht",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: clufo1,
        alt: "CluFo iOS Screenshot",
        caption: "Events, Inventar & Finanzen an einem Ort",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>All-in-One-Vereinsplattform:</strong> Mitglieder, Events, Inventar, Finanzen und Sponsoren in einem System.",
          "<strong>iOS-Companion-App:</strong> Native App für Mitglieder, Eltern und Vereinsadministratoren.",
          "<strong>KI-gestützt:</strong> Integrierte KI-Funktionen reduzieren den administrativen Aufwand.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
