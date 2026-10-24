import streamflix0 from "../../../assets/images/projects/streamflix/streamflix-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Streamflix Pro – IPTV Player",
  theme: "dark",
  tags: ["flutter", "fullstack"],
  videoBorder: false,
  description:
    "Ein Premium-IPTV-Player für schnelles, flüssiges und zuverlässiges Streaming von Live-TV, Filmen und Serien.<br/><br/>Komplette Playback-Experience mit schneller Oberfläche, stabilem Streaming und Unterstützung für Live-Kanäle, Filme und Serien in einer App.",
  live: "https://play.google.com/store/apps/details?id=com.iptvstramflix",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streamflix0,
        alt: "Streamflix Pro Screenshot",
        caption: "Streamflix Pro – Live-TV, Filme & Serien",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "<strong>Live-TV & VOD:</strong> Live-Kanäle, Filme und Serien in einem Player.",
          "<strong>Streaming-Performance:</strong> Schnelle Startzeiten und flüssige, zuverlässige Wiedergabe.",
          "<strong>Premium-UI:</strong> Hochwertige Oberfläche für Smartphones und TV-Layouts.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
