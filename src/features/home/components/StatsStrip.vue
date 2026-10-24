<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Apps published on the App Store & Google Play" },
  { value: 15, suffix: "+", label: "Open-source Flutter packages on pub.dev" },
  { value: 3, suffix: "+", label: "Years of professional experience" },
  { value: 6, suffix: "", label: "Companies & clients served worldwide" },
];

const rootRef = ref<HTMLElement | null>(null);
const displayed = ref<number[]>(stats.map(() => 0));
let observer: IntersectionObserver | null = null;
let tweens: gsap.core.Tween[] = [];

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat, i) => {
            const counter = { v: 0 };
            tweens.push(
              gsap.to(counter, {
                v: stat.value,
                duration: 1.6,
                delay: i * 0.12,
                ease: "power2.out",
                onUpdate: () => {
                  displayed.value[i] = Math.round(counter.v);
                },
              }),
            );
          });
          observer?.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  if (rootRef.value) observer.observe(rootRef.value);
});

onBeforeUnmount(() => {
  tweens.forEach((t) => t.kill());
  observer?.disconnect();
});
</script>

<template>
  <div ref="rootRef" class="stats">
    <div v-for="(stat, i) in stats" :key="stat.label" class="stats-item">
      <p class="stats-value">{{ displayed[i] ?? 0 }}<span>{{ stat.suffix }}</span></p>
      <p class="stats-label">{{ stat.label }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @include mixins.mq("md") {
    grid-template-columns: repeat(4, 1fr);
  }

  &-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
  }

  &-value {
    font-family: "ProFontWindows";
    font-weight: 700;
    font-size: clamp(32px, 5vw, 56px);
    line-height: 1;
    color: var(--color-text-cyan-400);

    span {
      color: var(--color-cyan-400);
    }
  }

  &-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    max-width: 220px;
    margin: 0 auto;
    opacity: 0.75;
  }
}
</style>
