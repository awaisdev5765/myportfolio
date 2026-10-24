import pos0 from "../../../assets/images/projects/pos/pos-0.png";
import pos1 from "../../../assets/images/projects/pos/pos-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Premium Lite POS",
  theme: "dark",
  tags: ["flutter", "kotlin", "payments"],
  videoBorder: false,
  description:
    "A smart and lightweight point-of-sale solution for cashiers and small businesses, live on Google Play.<br/><br/>Designed and developed the full POS experience: sales and inventory management, complex billing calculations, receipt printing on Sunmi devices, and stakeholder-driven requirement gathering and implementation.",
  live: "https://play.google.com/store/apps/details?id=com.atgpos.pos",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pos0,
        alt: "Premium Lite POS screenshot",
        caption: "Premium Lite POS – smart point-of-sale for small businesses",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pos1,
        alt: "Premium Lite POS screenshot",
        caption: "Sales & inventory management",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features & Architecture",
        items: [
          "<strong>Receipt Printing:</strong> Added Sunmi devices for physical receipt printing directly from the app.",
          "<strong>Billing Engine:</strong> Built complex calculations for taxes, discounts, and multi-currency checkout.",
          "<strong>Lightweight UX:</strong> Easy-to-use interface designed for cashiers to manage sales and stock with minimal training.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
