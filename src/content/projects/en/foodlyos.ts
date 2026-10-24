import type { ProjectContent } from "../../types";

export default {
  title: "Foodlyos – Food Platform",
  theme: "dark",
  tags: ["flutter", "firebase", "fullstack"],
  videoBorder: false,
  description:
    "Foodlyos is a food ordering and delivery platform — connecting customers with restaurants for browsing menus, ordering, and tracking deliveries.<br/><br/>Built the ordering experience across mobile and web: restaurant discovery, cart and checkout, payments, and live order tracking.",
  live: "https://foodlyos.com/",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>Restaurant Discovery:</strong> Browse menus and discover restaurants nearby.",
          "<strong>Ordering & Payments:</strong> Cart, checkout, and integrated payment flows.",
          "<strong>Live Order Tracking:</strong> Follow orders from kitchen to doorstep.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
