import type { ProjectContent } from "../../types";

export default {
  title: "Foodlyos – Food-Plattform",
  theme: "dark",
  tags: ["flutter", "firebase", "fullstack"],
  videoBorder: false,
  description:
    "Foodlyos ist eine Bestell- und Lieferplattform für Lebensmittel — Kunden entdecken Restaurants, bestellen und verfolgen ihre Lieferung.<br/><br/>Bestell-Experience über Mobile und Web: Restaurant-Suche, Warenkorb und Checkout, Payments und Live-Order-Tracking.",
  live: "https://foodlyos.com/",
  components: [
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Restaurant-Suche:</strong> Speisekarten entdecken und Restaurants in der Nähe finden.",
          "<strong>Bestellung & Payments:</strong> Warenkorb, Checkout und integrierte Zahlungsflüsse.",
          "<strong>Live-Order-Tracking:</strong> Bestellungen von der Küche bis zur Haustür verfolgen.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
