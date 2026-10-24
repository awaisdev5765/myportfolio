import flutterLabs from "../../../assets/thumbnails/flutter-labs.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Flutter Labs – Packages & Games",
  theme: "dark",
  tags: ["flutter", "kotlin", "fullstack"],
  videoBorder: false,
  description:
    "A collection of open-source Flutter packages, plugins, and apps published on GitHub and pub.dev.<br/><br/>Includes a complete adaptive UI package suite (toasts, banners, dialogs, scaffolds, search, settings, master-detail), a native Android storage plugin in Kotlin, offline POS software, a Flutter block-puzzle game, and more.",
  live: "https://github.com/awaisdev5765",
  source: "https://github.com/awaisdev5765",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: flutterLabs,
        alt: "Flutter Labs packages and games",
        caption: "Open-source Flutter packages, plugins & games",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "<strong>Adaptive UI Suite:</strong> 15+ zero-dependency Flutter packages — adaptive scaffolds, dialogs, toasts, banners, forms, search, settings, pagination, and state views.",
          "<strong>Native Plugins:</strong> shared-storage — a Flutter plugin in Kotlin for Android external storage access.",
          "<strong>Apps & Games:</strong> Offline retail POS software, a Flutter block-puzzle game, quiz apps, and browser-based experiments.",
          "<strong>Marketplace:</strong> Premium app templates and source code available on <a href=\"https://codecanyon.net/user/awaisdev5765/portfolio\" target=\"_blank\" rel=\"noopener\">CodeCanyon</a>.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
