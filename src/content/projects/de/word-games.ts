import wordnest0 from "../../../assets/images/projects/wordnest/wordnest-0.png";
import wordfill0 from "../../../assets/images/projects/wordfill/wordfill-0.png";
import wordfill1 from "../../../assets/images/projects/wordfill/wordfill-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Word Games – WordNest & Word Fill",
  theme: "dark",
  tags: ["flutter", "uiux"],
  videoBorder: false,
  description:
    "Zwei veröffentlichte Wortpuzzle-Games auf Google Play.<br/><br/><strong>WordNest</strong> — ein gemütliches Worträtsel-Nest: Buchstaben entziffern und clevere Challenges lösen. <strong>Word Fill: Missing Letters</strong> — ein Bild-Worträtsel: Bild ansehen, fehlende Buchstaben ergänzen und das Wort vervollständigen.",
  live: "https://play.google.com/store/apps/details?id=com.airtech.wordnest",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: wordnest0,
        alt: "WordNest Screenshot",
        caption: "WordNest – Buchstaben entziffern & Challenges lösen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: wordfill0,
        alt: "Word Fill Screenshot",
        caption: "Word Fill – errate das Wort, fülle fehlende Buchstaben",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: wordfill1,
        alt: "Word Fill Screenshot",
        caption: "Bildrätsel fürs Gehirntraining",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "<strong>Zwei veröffentlichte Games:</strong> Beide Titel live auf Google Play unter der Airtech-Marke.",
          "<strong>Game Feel:</strong> Flüssige Animationen, Progression und zufriedenstellende Rätsel-Momente.",
          "<strong>WordNest:</strong> Buchstaben entziffern und clevere Wort-Challenges lösen.",
          "<strong>Word Fill:</strong> Bildbasierte Rätsel für Vokabular und Mustererkennung.",
          "<strong>Premium-Templates:</strong> Quellcode meiner Apps gibt es auch auf <a href=\"https://codecanyon.net/user/awaisdev5765/portfolio\" target=\"_blank\" rel=\"noopener\">CodeCanyon</a>, und ich schreibe über Entwicklung auf <a href=\"https://medium.com/@awaiscs\" target=\"_blank\" rel=\"noopener\">Medium</a>.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
