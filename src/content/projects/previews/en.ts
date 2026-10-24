import thumbnailApricart from "../../../assets/images/projects/apricart/icon.png";
import thumbnailPos from "../../../assets/images/projects/pos/icon.png";
import thumbnailIsupport from "../../../assets/images/projects/isupport/icon.png";
import thumbnailCafeela from "../../../assets/images/projects/cafeela/icon.png";
import thumbnailMamji from "../../../assets/images/projects/mamji/icon.png";
import thumbnailStreamflix from "../../../assets/images/projects/streamflix/icon.png";
import thumbnailWordnest from "../../../assets/images/projects/wordnest/icon.png";
import thumbnailLightembassy from "../../../assets/images/projects/lightembassy/icon.png";
import thumbnailSaas from "../../../assets/thumbnails/saas-restaurant.svg";
import thumbnailClufo from "../../../assets/images/projects/clufo/ios-icon.png";
import thumbnailReplylion from "../../../assets/thumbnails/replylion.svg";
import thumbnailPremiumpos from "../../../assets/thumbnails/premium-pos.svg";
import thumbnailFoodlyos from "../../../assets/thumbnails/foodlyos.svg";
import thumbnailPrism from "../../../assets/thumbnails/prism-chat.svg";
import thumbnailLabs from "../../../assets/thumbnails/flutter-labs.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Apricart – B2B Wholesale Ordering",
    slug: "apricart",
    thumbnail: thumbnailApricart,
    description: "B2B wholesale food ordering platform · Google Play",
  },
  {
    title: "Premium POS – Retail Software",
    slug: "premium-pos",
    thumbnail: thumbnailPremiumpos,
    description: "Retail POS platform · Web, iOS & Android",
  },
  {
    title: "Cafeela – Restaurant App",
    slug: "cafeela",
    thumbnail: thumbnailCafeela,
    description: "Multi-cuisine restaurant ordering · iOS & Android",
  },
  {
    title: "SaaS Restaurant Platform",
    slug: "saas-restaurant",
    thumbnail: thumbnailSaas,
    description: "Multi-tenant restaurant management web app · Firebase",
  },
  {
    title: "CluFo – Club Management Platform",
    slug: "clufo",
    thumbnail: thumbnailClufo,
    description: "Club platform with AI features · Web & iOS",
  },
  {
    title: "ReplyLion – AI Review Replies",
    slug: "replylion",
    thumbnail: thumbnailReplylion,
    description: "AI-powered Google review replies · SaaS",
  },
  {
    title: "Foodlyos – Food Platform",
    slug: "foodlyos",
    thumbnail: thumbnailFoodlyos,
    description: "Food ordering & delivery platform",
  },
  {
    title: "Premium Lite POS",
    slug: "pos",
    thumbnail: thumbnailPos,
    description: "Point-of-sale app with Sunmi receipt printing",
  },
  {
    title: "iSupport – IT Products & Services",
    slug: "isupport",
    thumbnail: thumbnailIsupport,
    description: "IT products & services app · App Store & Play",
  },
  {
    title: "Mamji Hospital App",
    slug: "mamji",
    thumbnail: thumbnailMamji,
    description: "Patient portal for a 100-bed hospital",
  },
  {
    title: "Streamflix Pro – IPTV Player",
    slug: "streamflix",
    thumbnail: thumbnailStreamflix,
    description: "Premium IPTV player for live TV & movies",
  },
  {
    title: "Word Games – WordNest & Word Fill",
    slug: "word-games",
    thumbnail: thumbnailWordnest,
    description: "Two published word-puzzle games",
  },
  {
    title: "Light Embassy – Community App",
    slug: "lightembassy",
    thumbnail: thumbnailLightembassy,
    description: "Spiritual community app: sermons, podcasts & live radio",
  },
  {
    title: "Prism – AI Chat App",
    slug: "prism-chat",
    thumbnail: thumbnailPrism,
    description: "Open-source AI chat app & SDK suite (OpenAI, Ollama)",
  },
  {
    title: "Flutter Labs – Packages & Games",
    slug: "flutter-labs",
    thumbnail: thumbnailLabs,
    description: "15+ open-source Flutter packages & games",
  },
] as const satisfies ProjectPreview[];
