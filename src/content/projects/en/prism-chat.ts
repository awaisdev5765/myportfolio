import prismChat from "../../../assets/thumbnails/prism-chat.svg";
import type { ProjectContent } from "../../types";

export default {
  title: "Prism – AI Chat App",
  theme: "dark",
  tags: ["flutter", "ai", "fullstack"],
  videoBorder: false,
  description:
    "A beautiful open-source AI chat application built with Flutter, powered by the Prism package family.<br/><br/>A provider-agnostic streaming client for AI chat completions — works with OpenAI, Ollama, and other providers out of the box, with streaming responses, markdown rendering, and conversation history.",
  live: "https://github.com/awaisdev5765/prism_chat_app",
  source: "https://github.com/awaisdev5765/prism_chat_app",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: prismChat,
        alt: "Prism AI Chat App",
        caption: "Open-source AI chat app built on the Prism SDK",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features & Architecture",
        items: [
          "<strong>Provider-Agnostic Core (prism_ai):</strong> A lean Dart streaming client for AI chat completions supporting OpenAI, Ollama, and more behind one interface.",
          "<strong>Adaptive UI:</strong> Beautiful adaptive chat UI built on the Prism widget ecosystem — toasts, banners, state views, and markdown rendering.",
          "<strong>Open Source:</strong> Fully open-source on <a href=\"https://github.com/awaisdev5765\" target=\"_blank\" rel=\"noopener\">GitHub</a> with a growing package family on pub.dev powering chat, images, pagination, forms, and settings.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
