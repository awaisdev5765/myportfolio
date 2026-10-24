import streamflix0 from "../../../assets/images/projects/streamflix/streamflix-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Streamflix Pro – IPTV Player",
  theme: "dark",
  tags: ["flutter", "fullstack"],
  videoBorder: false,
  description:
    "A premium IPTV player built for fast, smooth, and reliable streaming of live TV, movies, and series.<br/><br/>Developed the complete playback experience with a fast interface, stable streaming, and support for live channels, movies, and series in one app.",
  live: "https://play.google.com/store/apps/details?id=com.iptvstramflix",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streamflix0,
        alt: "Streamflix Pro screenshot",
        caption: "Streamflix Pro – live TV, movies & series",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>Live TV & VOD:</strong> Live channels, movies, and series in a single player.",
          "<strong>Streaming Performance:</strong> Built for fast start-up times and smooth, reliable playback.",
          "<strong>Polished UI:</strong> Premium interface optimized for both phones and TV-like layouts.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
