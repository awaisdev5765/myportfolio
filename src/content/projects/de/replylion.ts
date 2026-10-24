import type { ProjectContent } from "../../types";

export default {
  title: "ReplyLion – KI-Rezensionsantworten",
  theme: "dark",
  tags: ["ai", "fullstack"],
  videoBorder: false,
  description:
    "Ein SaaS-Produkt, das sich mit dem Google Business Profile verbindet und mit KI automatisch professionelle Antworten auf jede Rezension erstellt.<br/><br/>Komplettentwicklung: Google-Business-Profile-Integration, KI-Antwortgenerierung für lokale Unternehmen und ein Self-Service-Abo-Flow — kostenlos starten, keine Kreditkarte nötig.",
  live: "https://replylion.com/",
  components: [
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>KI-Antwortgenerierung:</strong> Professionelle, markenkonforme Antworten auf jede Google-Rezension — automatisch.",
          "<strong>Google-Business-Profile-Integration:</strong> Direkte Verbindung und Monitoring eingehender Rezensionen.",
          "<strong>SaaS-Abo:</strong> Self-Service-Tarife mit kostenlosem Start — keine Kreditkarte erforderlich.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
