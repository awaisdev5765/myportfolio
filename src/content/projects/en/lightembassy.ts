import le0 from "../../../assets/images/projects/lightembassy/lightembassy-0.png";
import le1 from "../../../assets/images/projects/lightembassy/lightembassy-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Light Embassy – Community App",
  theme: "dark",
  tags: ["kotlin", "firebase", "fullstack"],
  videoBorder: false,
  description:
    "A spiritual companion app for everyday growth — life-transforming teachings, sermons, podcasts, daily prayer support, and a welcoming community.<br/><br/>Built the full community experience: on-demand video messages, audio podcasts and live radio streaming, daily devotionals, and community features — all backed by Firebase services.",
  live: "https://play.google.com/store/apps/details?id=com.lightembassy.android",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: le0,
        alt: "Light Embassy Community screenshot",
        caption: "Teachings, sermons & podcasts in one place",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: le1,
        alt: "Light Embassy Community screenshot",
        caption: "Live radio & community features",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>Media Library:</strong> Watch the latest messages, listen to podcasts on the go, and join live radio broadcasts.",
          "<strong>Daily Growth:</strong> Daily prayer support and devotionals to keep the community engaged every day.",
          "<strong>Community:</strong> A welcoming space for members to connect and grow together.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
