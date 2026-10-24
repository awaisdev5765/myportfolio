import type { ProjectContent } from "../../types";

export default {
  title: "SaaS Restaurant-Plattform",
  theme: "dark",
  tags: ["fullstack", "firebase", "payments"],
  videoBorder: false,
  description:
    "Eine Multi-Tenant-SaaS-Plattform für Restaurantmanagement — jedes Restaurant erhält seinen eigenen geschützten Workspace mit client-basierten Sessions.<br/><br/>Komplettentwicklung der Web-App: Tenant-Authentifizierung mit pro-Client-Sessions, Menü- und Bestellverwaltung sowie das operative Dashboard für den Restaurantalltag. Gehostet auf Firebase.",
  live: "https://saasrestaurant-2ace9.web.app/#/login",
  components: [
    {
      type: "list",
      props: {
        title: "Kernfunktionen & Architektur",
        items: [
          "<strong>Multi-Tenant-SaaS:</strong> Client-basierte Tenancy (client_id-Sessions) — jedes Restaurant arbeitet in einem isolierten Workspace.",
          "<strong>Sichere Authentifizierung:</strong> Session-basierter Login-Flow mit pro-Client-Routing.",
          "<strong>Operations-Dashboard:</strong> Menü, Bestellungen und Restaurantverwaltung in einer Web-Konsole.",
          "<strong>Firebase Hosting:</strong> Schnelle, zuverlässige Auslieferung der Produktions-App.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
