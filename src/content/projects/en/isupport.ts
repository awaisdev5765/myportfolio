import isupport0 from "../../../assets/images/projects/isupport/isupport-0.png";
import isupport1 from "../../../assets/images/projects/isupport/isupport-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "iSupport – IT Products & Services",
  theme: "dark",
  tags: ["flutter", "swift", "firebase"],
  videoBorder: false,
  description:
    "Your complete destination for IT products and services — buy the latest technology or get professional IT assistance, live on Google Play.<br/><br/>Handled end-to-end development including Apple authentication, App Store publication, performance optimization, analytics integration, and iterative improvements from user testing.",
  live: "https://play.google.com/store/apps/details?id=com.itservicesupport",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: isupport0,
        alt: "iSupport app screenshot",
        caption: "iSupport – IT products & services marketplace",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: isupport1,
        alt: "iSupport app screenshot",
        caption: "Professional IT assistance & support",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features & Architecture",
        items: [
          "<strong>iOS & App Store:</strong> Implemented Apple authentication and published the application on the Apple Store.",
          "<strong>Performance & Analytics:</strong> Optimized app performance and implemented analytics tools to track user behavior.",
          "<strong>Quality & Compliance:</strong> Conducted user testing, code reviews, and ensured compliance with industry standards and regulations.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
