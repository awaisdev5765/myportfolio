import type { ProjectContent } from "../../types";

export default {
  title: "ReplyLion – AI Review Replies",
  theme: "dark",
  tags: ["ai", "fullstack"],
  videoBorder: false,
  description:
    "A SaaS product that connects to your Google Business Profile and uses AI to draft professional replies to every review automatically.<br/><br/>Built the full product end to end: Google Business Profile integration, AI reply generation tuned for local businesses, and a self-serve subscription flow — start free, no credit card required.",
  live: "https://replylion.com/",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>AI Reply Generation:</strong> Professional, on-brand replies to every Google review — drafted automatically.",
          "<strong>Google Business Profile Integration:</strong> Connects directly and monitors incoming reviews.",
          "<strong>SaaS Subscription:</strong> Self-serve plans with a free start — no credit card required.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
