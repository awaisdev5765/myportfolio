import isupport0 from "../../../assets/images/projects/isupport/isupport-0.png";
import isupport1 from "../../../assets/images/projects/isupport/isupport-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "iSupport – IT-Produkte & Services",
  theme: "dark",
  tags: ["flutter", "swift", "firebase"],
  videoBorder: false,
  description:
    "Die zentrale Anlaufstelle für IT-Produkte und Services — aktuelle Technik kaufen oder professionelle IT-Unterstützung erhalten, live auf Google Play.<br/><br/>End-to-End-Entwicklung inklusive Apple-Authentifizierung, App-Store-Veröffentlichung, Performance-Optimierung, Analytics und iterativen Verbesserungen aus Nutzertests.",
  live: "https://play.google.com/store/apps/details?id=com.itservicesupport",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: isupport0,
        alt: "iSupport App Screenshot",
        caption: "iSupport – IT-Produkte & Services",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: isupport1,
        alt: "iSupport App Screenshot",
        caption: "Professionelle IT-Unterstützung",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen & Architektur",
        items: [
          "<strong>iOS & App Store:</strong> Implementierung der Apple-Authentifizierung und Veröffentlichung im Apple Store.",
          "<strong>Performance & Analytics:</strong> Performance-Optimierung und Analytics-Tools zum Tracking des Nutzerverhaltens.",
          "<strong>Qualität & Compliance:</strong> Nutzertests, Code-Reviews und Einhaltung von Industriestandards.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
