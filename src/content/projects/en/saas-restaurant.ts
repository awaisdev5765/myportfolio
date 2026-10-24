import type { ProjectContent } from "../../types";

export default {
  title: "SaaS Restaurant Platform",
  theme: "dark",
  tags: ["fullstack", "firebase", "payments"],
  videoBorder: false,
  description:
    "A multi-tenant SaaS restaurant management platform — each restaurant gets its own secured workspace with client-based sessions.<br/><br/>Built the full web application: tenant authentication with per-client sessions, menu and order management, and the operational dashboard restaurants use to run their day-to-day business. Hosted on Firebase.",
  live: "https://saasrestaurant-2ace9.web.app/#/login",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features & Architecture",
        items: [
          "<strong>Multi-Tenant SaaS:</strong> Client-based tenancy (client_id sessions) — every restaurant operates in its own isolated workspace.",
          "<strong>Secure Authentication:</strong> Session-based login flow with per-client routing.",
          "<strong>Operations Dashboard:</strong> Menu, orders, and restaurant management in one web console.",
          "<strong>Firebase Hosting:</strong> Fast, reliable delivery of the production web app.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
