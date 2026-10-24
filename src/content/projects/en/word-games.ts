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
    "Two published word-puzzle games on Google Play.<br/><br/><strong>WordNest</strong> — a cozy word puzzle nest: unscramble letters and solve clever word challenges. <strong>Word Fill: Missing Letters</strong> — a picture word puzzle: look at the image, fill in the blank letters, and complete the word.",
  live: "https://play.google.com/store/apps/details?id=com.airtech.wordnest",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: wordnest0,
        alt: "WordNest screenshot",
        caption: "WordNest – unscramble & solve word challenges",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: wordfill0,
        alt: "Word Fill screenshot",
        caption: "Word Fill – guess the word, fill the missing letters",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: wordfill1,
        alt: "Word Fill screenshot",
        caption: "Picture puzzles to train your brain",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "<strong>Two Shipped Games:</strong> Both titles are live on Google Play under the Airtech brand.",
          "<strong>Game Feel:</strong> Smooth animations, progressions, and satisfying \"aha!\" moment design.",
          "<strong>WordNest:</strong> Unscramble letters and solve clever word challenges in a cozy package.",
          "<strong>Word Fill:</strong> Picture-based puzzles that train vocabulary and pattern recognition.",
          "<strong>Premium Templates:</strong> Source code for my apps is also sold on <a href=\"https://codecanyon.net/user/awaisdev5765/portfolio\" target=\"_blank\" rel=\"noopener\">CodeCanyon</a>, and I write about development on <a href=\"https://medium.com/@awaiscs\" target=\"_blank\" rel=\"noopener\">Medium</a>.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
