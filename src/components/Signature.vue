<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

const svgRef = ref<SVGSVGElement | null>(null);
const path1Ref = ref<SVGPathElement | null>(null);
const path2Ref = ref<SVGPathElement | null>(null);
const path3Ref = ref<SVGPathElement | null>(null);

let timeline: gsap.core.Timeline | null = null;
let observer: IntersectionObserver | null = null;
let hasAnimated = false;

const initStrokes = () => {
  const paths = [path1Ref.value, path2Ref.value, path3Ref.value];
  paths.forEach((p) => {
    if (!p) return;
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;
    p.style.strokeDashoffset = `${len}`;
  });
};

const playAnimation = () => {
  if (!path1Ref.value || !path2Ref.value || !path3Ref.value) return;

  const len1 = path1Ref.value.getTotalLength();
  const len2 = path2Ref.value.getTotalLength();
  const len3 = path3Ref.value.getTotalLength();

  timeline?.kill();
  timeline = gsap.timeline();

  // Reset initial state
  timeline.set([path1Ref.value, path2Ref.value, path3Ref.value], { opacity: 1 });
  timeline.set(path1Ref.value, { strokeDashoffset: len1 });
  timeline.set(path2Ref.value, { strokeDashoffset: len2 });
  timeline.set(path3Ref.value, { strokeDashoffset: len3 });

  // Main cursive body stroke
  timeline.to(
    path1Ref.value,
    {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power1.inOut",
    },
    0.1,
  );

  // Fast diagonal crossing slash
  timeline.to(
    path2Ref.value,
    {
      strokeDashoffset: 0,
      duration: 0.35,
      ease: "power2.out",
    },
    1.45,
  );

  // Bottom flourish tick
  timeline.to(
    path3Ref.value,
    {
      strokeDashoffset: 0,
      duration: 0.25,
      ease: "power2.out",
    },
    1.7,
  );
};

const handleReplay = () => {
  playAnimation();
};

onMounted(() => {
  initStrokes();

  if (svgRef.value) {
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              playAnimation();
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(svgRef.value);
    } else {
      // Fallback
      setTimeout(playAnimation, 500);
    }
  }
});

onUnmounted(() => {
  timeline?.kill();
  observer?.disconnect();
});
</script>

<template>
  <div
    class="signature-wrapper"
    @click="handleReplay"
    title="Click to replay signature animation"
    data-cursor="circle-white"
    data-hoversound="hover"
  >
    <svg
      ref="svgRef"
      class="signature-svg"
      viewBox="0 42 300 218"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Awais Ur Rehman Signature"
    >
      <!-- Main Signature Cursive Loop -->
      <path
        ref="path1Ref"
        class="signature-stroke signature-stroke-main"
        d="M 58 220 C 72 185, 84 115, 94 80 C 99 108, 112 172, 126 214 C 114 188, 92 162, 68 164 C 92 150, 114 140, 122 118 C 136 100, 148 94, 152 106 C 156 140, 152 180, 148 214 C 152 182, 158 142, 168 112 C 182 86, 202 92, 204 116 C 206 140, 186 152, 162 148 C 176 162, 196 186, 214 216"
      />
      <!-- Fast Diagonal Crossing Slash -->
      <path
        ref="path2Ref"
        class="signature-stroke signature-stroke-slash"
        d="M 50 235 Q 155 168 255 95"
      />
      <!-- Bottom Right Accent Flourish -->
      <path
        ref="path3Ref"
        class="signature-stroke signature-stroke-accent"
        d="M 222 228 L 252 190"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.signature-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: calc(-1 * var(--space-xs));
  cursor: pointer;
  user-select: none;
  width: fit-content;
}


.signature-svg {
  width: 180px;
  height: auto;
  max-width: 100%;
  overflow: visible;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.06));

  @include mixins.mq("sm") {
    width: 210px;
  }

  @include mixins.mq("md") {
    width: 230px;
  }
}

.signature-stroke {
  fill: none;
  stroke: var(--color-text-400, #1a202c);
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;

  &-main {
    stroke-width: 2.6;
  }

  &-slash {
    stroke-width: 2.4;
  }

  &-accent {
    stroke-width: 2.4;
  }
}

.signature-wrapper:hover .signature-stroke {
  stroke: var(--color-accent-400, #ff8400) !important;
}
</style>

