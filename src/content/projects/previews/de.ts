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
    title: "Apricart – B2B-Großhandel",
    slug: "apricart",
    thumbnail: thumbnailApricart,
    description: "B2B-Großhandelsplattform für Lebensmittel · Google Play",
  },
  {
    title: "Premium POS – Retail-Software",
    slug: "premium-pos",
    thumbnail: thumbnailPremiumpos,
    description: "Retail-POS-Plattform · Web, iOS & Android",
  },
  {
    title: "Cafeela – Restaurant-App",
    slug: "cafeela",
    thumbnail: thumbnailCafeela,
    description: "Restaurant-Bestellapp mit vier Küchen · iOS & Android",
  },
  {
    title: "SaaS Restaurant-Plattform",
    slug: "saas-restaurant",
    thumbnail: thumbnailSaas,
    description: "Multi-Tenant-Restaurantverwaltung · Web-App · Firebase",
  },
  {
    title: "CluFo – Vereinsplattform",
    slug: "clufo",
    thumbnail: thumbnailClufo,
    description: "Vereinsplattform mit KI-Features · Web & iOS",
  },
  {
    title: "ReplyLion – KI-Rezensionsantworten",
    slug: "replylion",
    thumbnail: thumbnailReplylion,
    description: "KI-Antworten für Google-Rezensionen · SaaS",
  },
  {
    title: "Foodlyos – Food-Plattform",
    slug: "foodlyos",
    thumbnail: thumbnailFoodlyos,
    description: "Bestell- & Lieferplattform für Lebensmittel",
  },
  {
    title: "Premium Lite POS",
    slug: "pos",
    thumbnail: thumbnailPos,
    description: "Point-of-Sale-App mit Sunmi-Bondruck",
  },
  {
    title: "iSupport – IT-Produkte & Services",
    slug: "isupport",
    thumbnail: thumbnailIsupport,
    description: "IT-Produkte & Services · App Store & Play",
  },
  {
    title: "Mamji Hospital App",
    slug: "mamji",
    thumbnail: thumbnailMamji,
    description: "Patienten-Portal für ein 100-Betten-Krankenhaus",
  },
  {
    title: "Streamflix Pro – IPTV Player",
    slug: "streamflix",
    thumbnail: thumbnailStreamflix,
    description: "Premium-IPTV-Player für Live-TV & Filme",
  },
  {
    title: "Word Games – WordNest & Word Fill",
    slug: "word-games",
    thumbnail: thumbnailWordnest,
    description: "Zwei veröffentlichte Wortpuzzle-Games",
  },
  {
    title: "Light Embassy – Community-App",
    slug: "lightembassy",
    thumbnail: thumbnailLightembassy,
    description: "Spirituelle Community-App: Predigten, Podcasts & Live-Radio",
  },
  {
    title: "Prism – AI Chat App",
    slug: "prism-chat",
    thumbnail: thumbnailPrism,
    description: "Open-Source-AI-Chat-App & SDK-Suite (OpenAI, Ollama)",
  },
  {
    title: "Flutter Labs – Pakete & Games",
    slug: "flutter-labs",
    thumbnail: thumbnailLabs,
    description: "15+ Open-Source-Flutter-Pakete & Games",
  },
] as const satisfies ProjectPreview[];
