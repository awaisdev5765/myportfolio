import cafeela0 from "../../../assets/images/projects/cafeela/cafeela-0.png";
import cafeela1 from "../../../assets/images/projects/cafeela/cafeela-1.png";
import ios0 from "../../../assets/images/projects/cafeela/ios-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Cafeela – Restaurant App",
  theme: "dark",
  tags: ["flutter", "firebase", "uiux"],
  videoBorder: false,
  description:
    "The official app of Cafeela restaurant in Karachi — offering four cuisines to choose from: Chinese, Pakistani, Thai, or Seafood.<br/><br/>Built the full customer experience: menu browsing across four cuisines, online ordering, and delivery, with Firebase authentication and notifications.",
  live: "https://play.google.com/store/apps/details?id=com.cafeela",
  appstore: "https://apps.apple.com/pk/app/cafeela/id1593613165",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cafeela0,
        alt: "Cafeela app screenshot",
        caption: "Cafeela – four cuisines, one app",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cafeela1,
        alt: "Cafeela app screenshot",
        caption: "Menu & online ordering",
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
        title: "Key Features",
        items: [
          "<strong>Multi-Cuisine Menu:</strong> Chinese, Pakistani, Thai, and Seafood menus with rich imagery.",
          "<strong>Online Ordering:</strong> Cart, checkout, and delivery flow for restaurant customers.",
          "<strong>Backend Services:</strong> Firebase authentication and push notifications for order updates.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
