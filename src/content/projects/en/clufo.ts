import clufo0 from "../../../assets/images/projects/clufo/ios-0.png";
import clufo1 from "../../../assets/images/projects/clufo/ios-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "CluFo – Club Management Platform",
  theme: "dark",
  tags: ["swift", "swift", "fullstack"],
  videoBorder: false,
  description:
    "The mobile companion app for the CluFo club platform — built for members, parents, and administrators of sports clubs and associations (Switzerland).<br/><br/>One platform for members, events, inventory, finances, and sponsors — with AI-assisted features. Developed the iOS companion app covering member self-service, event management, and admin tooling.",
  live: "https://clufo.ch/",
  appstore: "https://apps.apple.com/us/app/clufo/id6792288157",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: clufo0,
        alt: "CluFo iOS screenshot",
        caption: "CluFo iOS – member home overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: clufo1,
        alt: "CluFo iOS screenshot",
        caption: "Events, inventory & finances in one place",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>All-in-One Club Platform:</strong> Members, events, inventory, finances, and sponsors unified in one system.",
          "<strong>iOS Companion App:</strong> Native app for members, parents, and club administrators.",
          "<strong>AI-Powered:</strong> Benefits from integrated AI features to reduce administrative work.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
