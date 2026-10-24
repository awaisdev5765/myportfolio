import apricart0 from "../../../assets/images/projects/apricart/apricart-0.png";
import apricart1 from "../../../assets/images/projects/apricart/apricart-1.png";
import apricart2 from "../../../assets/images/projects/apricart/apricart-2.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Apricart – B2B-Großhandel",
  theme: "dark",
  tags: ["flutter", "firebase", "payments", "reactnative"],
  videoBorder: false,
  description:
    "Eine smarte B2B-Bestellplattform für den Großhandel mit Lebensmitteln, live auf Google Play.<br/><br/>Komplette Bestell-Experience: Produktkatalog, Warenkorb und Checkout, HBL-Payment-Gateway, Google Maps, Firebase-Authentifizierung und Push-Benachrichtigungen.",
  live: "https://play.google.com/store/apps/details?id=com.apricartpak.app",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: apricart0,
        alt: "Apricart App Screenshot",
        caption: "Apricart – B2B-Großhandelsplattform",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: apricart1,
        alt: "Apricart App Screenshot",
        caption: "Produktkatalog & Bestellprozess",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: apricart2,
        alt: "Apricart App Screenshot",
        caption: "Checkout & Lieferverfolgung",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen & Architektur",
        items: [
          "<strong>Payments:</strong> Implementierung des HBL-Payment-Gateways und Integration von Drittanbieter-Services.",
          "<strong>Location Services:</strong> Google Maps-Integration für Lieferverfolgung und Filialsuche.",
          "<strong>Backend-Services:</strong> Firebase für Authentifizierung und Firebase Messaging für Benachrichtigungen.",
          "<strong>B2B-Fokus:</strong> Vereinfachte Großhandelsbeschaffung von Lebensmitteln für Geschäftskunden.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
