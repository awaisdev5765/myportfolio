import apricart0 from "../../../assets/images/projects/apricart/apricart-0.png";
import apricart1 from "../../../assets/images/projects/apricart/apricart-1.png";
import apricart2 from "../../../assets/images/projects/apricart/apricart-2.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Apricart – B2B Wholesale Ordering",
  theme: "dark",
  tags: ["flutter", "firebase", "payments", "reactnative"],
  videoBorder: false,
  description:
    "A smart B2B wholesale ordering platform for groceries and food procurement, live on Google Play.<br/><br/>Built the complete ordering experience end to end: product catalog, cart and checkout flows, HBL payment gateway integration, Google Maps location services, Firebase authentication, and push notifications via Firebase Messaging.",
  live: "https://play.google.com/store/apps/details?id=com.apricartpak.app",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: apricart0,
        alt: "Apricart app screenshot",
        caption: "Apricart – B2B Wholesale Food Ordering Platform",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: apricart1,
        alt: "Apricart app screenshot",
        caption: "Product catalog & ordering flow",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: apricart2,
        alt: "Apricart app screenshot",
        caption: "Checkout & delivery tracking",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features & Architecture",
        items: [
          "<strong>Payments:</strong> Implemented the HBL payment gateway and integrated third-party services.",
          "<strong>Location Services:</strong> Integrated Google Maps for delivery tracking and store discovery.",
          "<strong>Backend Services:</strong> Utilized Firebase for authentication and Firebase Messaging for notifications.",
          "<strong>B2B Focus:</strong> Streamlined wholesale procurement of groceries and food for business customers.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
