import type { ProjectContent } from "../../types";

export default {
  title: "Premium POS – Retail-Software",
  theme: "dark",
  tags: ["flutter", "kotlin", "payments", "fullstack"],
  videoBorder: false,
  description:
    "Premium POS ist Kassensoftware mit einem smarten Interface, das jedes Handelsunternehmen ohne Schwierigkeiten bedienen kann — gebaut für stark frequentierte Retailer.<br/><br/>Beitrag über die gesamte Produktsuite: die Retail-POS-Plattform, die mobilen Companion-Apps (iOS & Android) und die Web-Präsenz — inklusive Vertrieb, Lager und Kundenverwaltung.",
  live: "https://premium-pos.com/",
  appstore: "https://apps.apple.com/pk/developer/atg-middle-east-company-w-l-l/id1764554258",
  components: [
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Smartes Retail-Interface:</strong> Eine Kasse, die jedes Handelsunternehmen ohne Schulung bedienen kann.",
          "<strong>Mobile Companion-Apps:</strong> iOS- und Android-Apps unter ATG Middle East veröffentlicht.",
          "<strong>Retail-Operationen:</strong> Vertrieb, Lager und Kundenverwaltung für busy Retailer.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
