import mamji0 from "../../../assets/images/projects/mamji/mamji-0.png";
import mamji1 from "../../../assets/images/projects/mamji/mamji-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Mamji Hospital App",
  theme: "dark",
  tags: ["flutter", "firebase", "uiux"],
  videoBorder: false,
  description:
    "The official app of Mamji Hospital — a 100-bed hospital in Karachi with a modern planned building and dedicated medical staff.<br/><br/>Built the patient-facing experience: doctor listings, appointment booking, department information, and hospital services, all in one place.",
  live: "https://play.google.com/store/apps/details?id=com.hospital_mamji",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mamji0,
        alt: "Mamji Hospital app screenshot",
        caption: "Mamji Hospital – 100 beds, modern facility",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mamji1,
        alt: "Mamji Hospital app screenshot",
        caption: "Doctors, departments & services",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "<strong>Patient Portal:</strong> Doctor listings, appointment booking, and department information.",
          "<strong>Hospital Services:</strong> Complete overview of facilities, timings, and contact channels.",
          "<strong>Clean UX:</strong> Accessible design suitable for patients of all ages.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
