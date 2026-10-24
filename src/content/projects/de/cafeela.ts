import cafeela0 from "../../../assets/images/projects/cafeela/cafeela-0.png";
import cafeela1 from "../../../assets/images/projects/cafeela/cafeela-1.png";
import ios0 from "../../../assets/images/projects/cafeela/ios-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Cafeela – Restaurant-App",
  theme: "dark",
  tags: ["flutter", "firebase", "uiux"],
  videoBorder: false,
  description:
    "Die offizielle App des Cafeela-Restaurants in Karachi — vier Küchen zur Auswahl: Chinesisch, Pakistanisch, Thai oder Meeresfrüchte.<br/><br/>Komplette Customer-Experience: Speisekarten über vier Küchen, Online-Bestellung und Lieferung, mit Firebase-Authentifizierung und Benachrichtigungen.",
  live: "https://play.google.com/store/apps/details?id=com.cafeela",
  appstore: "https://apps.apple.com/pk/app/cafeela/id1593613165",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cafeela0,
        alt: "Cafeela App Screenshot",
        caption: "Cafeela – vier Küchen, eine App",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cafeela1,
        alt: "Cafeela App Screenshot",
        caption: "Speisekarte & Online-Bestellung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ios0,
        alt: "Cafeela iOS screenshot",
        caption: "Cafeela on iOS – App Store",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Multi-Cuisine-Speisekarten:</strong> Chinesisch, Pakistanisch, Thai und Meeresfrüchte mit reichhaltigen Bildern.",
          "<strong>Online-Bestellung:</strong> Warenkorb, Checkout und Lieferfluss für Restaurantgäste.",
          "<strong>Backend-Services:</strong> Firebase-Authentifizierung und Push-Benachrichtigungen zu Bestellungen.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
