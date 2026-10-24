import flutterLabs from "../../../assets/thumbnails/flutter-labs.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Flutter Labs – Pakete & Games",
  theme: "dark",
  tags: ["flutter", "kotlin", "fullstack"],
  videoBorder: false,
  description:
    "Eine Sammlung von Open-Source-Flutter-Paketen, Plugins und Apps auf GitHub und pub.dev.<br/><br/>Enthält eine komplette adaptive-UI-Paketsuite (Toasts, Banner, Dialogs, Scaffolds, Search, Settings, Master-Detail), ein natives Android-Storage-Plugin in Kotlin, Offline-POS-Software, ein Flutter Block-Puzzle-Game und mehr.",
  live: "https://github.com/awaisdev5765",
  source: "https://github.com/awaisdev5765",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: flutterLabs,
        alt: "Flutter Labs Pakete und Games",
        caption: "Open-Source-Flutter-Pakete, Plugins & Games",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "<strong>Adaptive-UI-Suite:</strong> 15+ Flutter-Pakete ohne Abhängigkeiten — adaptive Scaffolds, Dialogs, Toasts, Banners, Forms, Search, Settings, Pagination und State-Views.",
          "<strong>Native Plugins:</strong> shared-storage — ein Flutter-Plugin in Kotlin für Android External Storage.",
          "<strong>Apps & Games:</strong> Offline-Retail-POS-Software, ein Flutter Block-Puzzle-Game, Quiz-Apps und Browser-Experimente.",
          "<strong>Marketplace:</strong> Premium-App-Templates und Quellcode verfügbar auf <a href=\"https://codecanyon.net/user/awaisdev5765/portfolio\" target=\"_blank\" rel=\"noopener\">CodeCanyon</a>.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
