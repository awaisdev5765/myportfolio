import prismChat from "../../../assets/thumbnails/prism-chat.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Prism – AI Chat App",
  theme: "dark",
  tags: ["flutter", "ai", "fullstack"],
  videoBorder: false,
  description:
    "Eine wunderschöne Open-Source-AI-Chat-App mit Flutter, angetrieben von der Prism-Paketfamilie.<br/><br/>Ein provider-agnostischer Streaming-Client für AI-Chat-Completions — funktioniert mit OpenAI, Ollama und weiteren Providern, mit Streaming-Antworten, Markdown-Rendering und Konversationsverlauf.",
  live: "https://github.com/awaisdev5765/prism_chat_app",
  source: "https://github.com/awaisdev5765/prism_chat_app",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: prismChat,
        alt: "Prism AI Chat App",
        caption: "Open-Source-AI-Chat-App auf dem Prism SDK",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen & Architektur",
        items: [
          "<strong>Provider-agnostischer Kern (prism_ai):</strong> Ein schlanker Dart-Streaming-Client für AI-Chat-Completions mit OpenAI, Ollama und mehr hinter einer Schnittstelle.",
          "<strong>Adaptive UI:</strong> Adaptive Chat-UI auf Basis des Prism-Widget-Ökosystems — Toasts, Banner, State-Views und Markdown-Rendering.",
          "<strong>Open Source:</strong> Vollständig quelloffen auf <a href=\"https://github.com/awaisdev5765\" target=\"_blank\" rel=\"noopener\">GitHub</a> mit einer wachsenden Paketfamilie auf pub.dev für Chat, Images, Pagination, Forms und Settings.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
