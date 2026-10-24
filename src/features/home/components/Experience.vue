<script setup lang="ts">
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type?: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

interface EducationItem {
  title: string;
  institution: string;
  grade: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Logic Minds Technology",
    role: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    type: "Remote",
    description:
      "Leading remote development across the company's product portfolio — mobile applications, PHP websites, and WordPress platforms. Delivering end-to-end features from architecture to release, and mentoring the team on mobile best practices.",
    highlights: [
      "Develop and maintain mobile applications for client and internal products.",
      "Build and manage PHP websites and WordPress platforms.",
      "Lead feature delivery from requirements through deployment.",
    ],
    tags: ["Mobile Apps", "PHP", "WordPress", "Remote Leadership"],
  },
  {
    company: "Allied Tech Global",
    role: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    type: "Remote",
    description:
      "Remote senior engineer handling mobile apps, PHP-based websites, and WordPress solutions. Responsible for cross-platform delivery, integrations, and ongoing maintenance of client products.",
    highlights: [
      "Handle mobile app development across Flutter and native platforms.",
      "Deliver PHP websites and WordPress solutions for clients.",
      "Manage integrations, deployments, and ongoing product maintenance.",
    ],
    tags: ["Mobile Apps", "PHP", "WordPress", "Integrations"],
  },
  {
    company: "Airtech Solutions",
    role: "Mobile App Developer",
    period: "June 2021 – Present",
    description:
      "Developing and publishing complex production applications to the Apple App Store and Google Play. Led end-to-end mobile development including payments, POS systems, third-party integrations, and stakeholder-driven feature delivery.",
    highlights: [
      "Implemented HBL payment gateway and integrated third-party services.",
      "Designed and developed a POS application for mobile devices, including receipt printing on Sunmi devices and complex calculations.",
      "Built a complex e-commerce application with service and product-based features; integrated Google Maps for location services.",
      "Utilized Firebase for authentication and Firebase Messaging for notifications.",
      "Conducted stakeholder meetings to gather requirements and implemented them in the applications.",
      "Implemented Apple authentication and published complex applications on the Apple Store.",
    ],
    tags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Payments"],
  },
  {
    company: "Brackets",
    role: "Mobile App Developer",
    period: "June 2020 – May 2021",
    description:
      "Delivered polished, high-quality mobile applications with a focus on performance, compliance, and user experience.",
    highlights: [
      "Optimized app performance for smooth user experience.",
      "Implemented analytics tools for tracking user behavior and app performance.",
      "Conducted user testing, code reviews, and iterative improvements.",
      "Implemented multi-language support to cater to a diverse user base.",
    ],
    tags: ["Performance", "Analytics", "Code Reviews", "Localization"],
  },
  {
    company: "Join In",
    role: "Mobile App Developer",
    period: "Nov 2019 – April 2020",
    description:
      "Built complex UIs and interactive features, including chat and Lottie animations, and contributed to the app's marketing and user acquisition strategy.",
    highlights: [
      "Developed complex UI with rich animations using Lottie files.",
      "Implemented many features such as in-app chat.",
      "Contributed to the app's marketing strategy and user acquisition efforts.",
    ],
    tags: ["Complex UI", "Animations", "Chat", "Growth"],
  },
];

const educationList: EducationItem[] = [
  {
    title: "BS in Software Engineering",
    institution: "University of Karachi – UBIT",
    grade: "2019 – 2023",
  },
  {
    title: "Intermediate in Computer Science",
    institution: "Govt. Degree College Malir Cantt.",
    grade: "2016 – 2018",
  },
];

const TAG_ICONS: Record<string, string> = {
  Flutter: "M14.3 2 3 13.3l3.6 3.6L21.5 2h-7.2zM3 2l6.3 6.3 3.5-3.5L9.2 2H3zm8.5 12.5L3 22h7.2l4.8-4.8-3.5-3.5z",
  "React Native": "M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM4.5 8.7c.9-.5 2.4-.3 4.2.6.3-1 .7-2 1.2-2.9-2.8-.6-5 .1-6 1.7-.4.7-.3 1.6.6 2.6zM8.7 14.7c-1.8.9-3.3 1.1-4.2.6-.9-.5-.8-1.4-.6-2.6l1.2 1.2c1.2.9 2.4 1 3.6.8zM19.5 15.3c-.9.5-2.4.3-4.2-.6l3.6-3.6c.9 1.6 1.2 3.2.6 4.2z",
  Swift: "M18.4 3.6c1.7 2.4 2.4 5.5 1.7 8.5-1.1 5.2-5.9 8.9-11.2 8.9-2.5 0-4.9-.8-6.9-2.3 2.6.4 5.3-.3 7.3-2-1.6-.5-3-1.8-3.6-3.4h2c-2-.9-3.3-2.9-3.3-5.1.6.3 1.3.5 2 .6C4.7 7.6 4 5.2 5.1 3.2c2.3 2.8 5.7 4.6 9.3 4.8-.3-1.5.2-3.1 1.3-4.2.9-.9 2.3-1.3 3.5-.9.6.2 1.2.5 1.7.9l2.4-.6-1.5 2.4c.7.2 1.3.4 2 .7-1 .7-2.2 1.1-3.4 1.3z",
  Kotlin: "M3 3h18v18H3V3zm9 9 9 9H3l9-9zM3 21l9-9v18",
  Firebase: "M4.5 18.5 6.9 4.4c.1-.7 1.1-.9 1.4-.3l2.6 4.8-10.4 9.6h3zm14.9 1.4-1.2-7.2-7.7-7.6 2.6 4.8 5.7 9.9 0.6 0.1zm-4.6 1.1H3.4l13.4-15.7 1.2 7.3-2.2 8.4z",
  Payments: "M2 7h20v10H2V7zm2 2v6h16V9H4zm2 2h5v2H6v-2zm7 0h5v2h-5v-2z",
  Performance: "M13 2 3 14h7l-1 8 11-14h-8l1-6z",
  Analytics: "M3 3v18h18v-2H5V3H3zm4 10h3v6H7v-6zm5-6h3v12h-3V7zm5 3h3v9h-3v-9z",
  "Code Reviews": "m8 6-6 6 6 6 1.4-1.4L4.8 12l4.6-4.6L8 6zm8 0-1.4 1.4L19.2 12l-4.6 4.6L16 18l6-6-6-6z",
  Localization: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.4a15 15 0 0 0-1.2-5.6A8 8 0 0 1 19.9 11zM12 4c.9 1.2 1.9 3.6 2.4 7H9.6c.5-3.4 1.5-5.8 2.4-7zM8.7 5.4A15 15 0 0 0 7.5 11H4.1a8 8 0 0 1 4.6-5.6zM4.1 13h3.4c.2 2.1.6 4 1.2 5.6A8 8 0 0 1 4.1 13zM12 20c-.9-1.2-1.9-3.6-2.4-7h4.8c-.5 3.4-1.5 5.8-2.4 7zm3.3-1.4c.6-1.6 1-3.5 1.2-5.6h3.4a8 8 0 0 1-4.6 5.6z",
  "Complex UI": "M4 4h16v6H4V4zm0 8h7v8H4v-8zm9 0h7v8h-7v-8z",
  Animations: "M12 2l2.4 7.6H22l-6 4.4 2.3 7.6L12 17l-6.3 4.6L8 14 2 9.6h7.6L12 2z",
  Chat: "M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-6 4V6a2 2 0 0 1 2-2z",
  Growth: "M3 17l6-6 4 4 8-8v6h-2V9.4l-6 6-4-4-4.6 4.6L3 17z",
};

const getTagIconPath = (tag: string): string => {
  return (
    TAG_ICONS[tag] ||
    "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
  );
};
</script>

<template>
  <div class="experience-section">
    <!-- Header -->
    <div class="grid">
      <div class="experience-title">
        <Banner class="experience-title-banner" copy="CAREER" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("experience") }}</h2>
      </div>
    </div>

    <!-- Experience Cards -->
    <div class="grid">
      <div class="experience-list">
        <div v-for="exp in experiences" :key="exp.company" class="experience-card">
          <div class="experience-card-header">
            <div>
              <div class="experience-card-company-wrap">
                <h3 class="experience-card-company">{{ exp.company }}</h3>
                <span v-if="exp.type" class="experience-card-type">{{ exp.type }}</span>
              </div>
              <p class="experience-card-role">{{ exp.role }}</p>
            </div>
            <span class="experience-card-period">{{ exp.period }}</span>
          </div>
          <p class="experience-card-desc">{{ exp.description }}</p>
          <ul v-if="exp.highlights && exp.highlights.length" class="experience-card-highlights">
            <li v-for="(highlight, hIdx) in exp.highlights" :key="hIdx">{{ highlight }}</li>
          </ul>
          <div class="experience-card-tags">
            <span v-for="tag in exp.tags" :key="tag" class="experience-tag">
              <svg
                class="experience-tag-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path :d="getTagIconPath(tag)" />
              </svg>
              <span class="experience-tag-text">{{ tag }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Header -->
    <div class="grid education-grid-header">
      <div class="experience-title">
        <Banner class="experience-title-banner" copy="ACADEMICS" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("education") }}</h2>
      </div>
    </div>

    <!-- Education Cards -->
    <div class="grid">
      <div class="education-list">
        <div v-for="edu in educationList" :key="edu.institution" class="education-card">
          <div class="education-card-top">
            <h3 class="education-card-title">{{ edu.title }}</h3>
            <span class="education-card-grade">{{ edu.grade }}</span>
          </div>
          <p class="education-card-inst">{{ edu.institution }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-top: var(--space-xxl);

  @include mixins.mq("md") {
    gap: var(--space-xxl);
    margin-top: var(--space-xxxl);
  }
}

.education-grid-header {
  margin-top: var(--space-lg);
}

.experience-title {
  position: relative;
  padding-top: var(--space-md);
  grid-column: 1 / 13;

  @include mixins.mq("md") {
    grid-column: 1 / 10;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 8;
  }

  &-copy {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-banner {
    position: absolute;
    top: 0;
    left: -8px;
    transform: translate(0, -20%) rotate(-4deg);

    @include mixins.mq("lg") {
      left: -16px;
      transform: translate(0, -20%) rotate(-6deg);
    }
  }
}

.experience-list {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @include mixins.mq("lg") {
    grid-column: 3 / span 8;
  }
}

.experience-card {
  background: var(--color-beige-500);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 32px -4px rgba(0, 0, 0, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);

    @include mixins.mq("sm") {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &-company-wrap {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    flex-wrap: wrap;
  }

  &-type {
    font-size: var(--font-size-xxs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(11, 85, 99, 0.12);
    color: #0b5563;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
  }

  &-company {
    font-size: var(--font-size-title-xs);
    font-weight: 800;
    color: var(--color-text-400);
  }

  &-role {
    font-size: var(--font-size-md);
    font-weight: 700;
    color: #0b5563;
  }

  &-period {
    font-family: "ProFontWindows", monospace;
    font-size: var(--font-size-xs);
    font-weight: 700;
    background: rgba(0, 0, 0, 0.06);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    color: var(--color-text-400);
    width: fit-content;
  }

  &-desc {
    font-size: var(--font-size-sm);
    line-height: 1.55;
    color: var(--color-text-400);
    opacity: 0.88;
  }

  &-highlights {
    margin: var(--space-xxs) 0 0 0;
    padding-left: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      font-size: var(--font-size-sm);
      line-height: 1.55;
      color: var(--color-text-400);
      opacity: 0.88;
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-top: var(--space-xs);
  }
}

.experience-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0.02em;
  background: #ffffff;
  border: 1px solid rgba(11, 85, 99, 0.18);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 5px 11px;
  border-radius: var(--radius-md);
  color: var(--color-text-400);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  cursor: default;

  &-icon {
    width: 14px;
    height: 14px;
    color: #0b5563;
    flex-shrink: 0;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &-text {
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(11, 85, 99, 0.14), 0 2px 4px rgba(0, 0, 0, 0.04);
    border-color: #0b5563;
    background: #f0fdfa;

    .experience-tag-icon {
      transform: scale(1.15);
      color: #094753;
    }
  }
}

.education-list {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);

  @include mixins.mq("md") {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @include mixins.mq("lg") {
    grid-column: 3 / span 8;
  }
}

.education-card {
  background: var(--color-beige-500);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -2px rgba(0, 0, 0, 0.08);
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-md);
    font-weight: 800;
    color: var(--color-text-400);
  }

  &-grade {
    font-family: "ProFontWindows", monospace;
    font-size: var(--font-size-xs);
    font-weight: 700;
    background: #0b5563;
    color: #fff;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    box-shadow: 0 2px 6px rgba(11, 85, 99, 0.25);
  }

  &-inst {
    font-size: var(--font-size-sm);
    color: var(--color-text-400);
    opacity: 0.88;
  }
}
</style>
