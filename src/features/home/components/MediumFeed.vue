<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Post {
  title: string;
  link: string;
  date: string;
}

const posts = ref<Post[] | null>(null);

const parseXml = (xml: string): Post[] => {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  return Array.from(doc.querySelectorAll("item"))
    .slice(0, 3)
    .map((item) => ({
      title: item.querySelector("title")?.textContent ?? "",
      link: item.querySelector("link")?.textContent ?? "",
      date: item.querySelector("pubDate")?.textContent ?? "",
    }))
    .filter((p) => p.title && p.link);
};

onMounted(async () => {
  const feedUrl = "https://medium.com/feed/@awaiscs";
  const parse = (xml: string) => parseXml(xml);
  try {
    const res = await fetch(feedUrl);
    if (!res.ok) throw new Error("feed unavailable");
    posts.value = parse(await res.text());
  } catch {
    // Medium's RSS is CORS-restricted — retry through a public CORS proxy.
    try {
      const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`);
      if (!res.ok) throw new Error("proxy unavailable");
      posts.value = parse(await res.text());
    } catch {
      // Still unreachable — hide the section silently.
      posts.value = null;
    }
  }
});
</script>

<template>
  <div v-if="posts && posts.length" class="medium">
    <div class="medium-head">
      <h3 class="medium-title">Latest on Medium</h3>
      <a
        class="medium-more"
        href="https://medium.com/@awaiscs"
        target="_blank"
        rel="noopener"
        data-cursor="arrow-external"
        >@awaiscs →</a
      >
    </div>
    <div class="medium-list">
      <a
        v-for="post in posts"
        :key="post.link"
        :href="post.link"
        target="_blank"
        rel="noopener"
        class="medium-item"
        data-cursor="arrow-external"
      >
        <p class="medium-item-title">{{ post.title }}</p>
        <p class="medium-item-date">{{ post.date ? new Date(post.date).toLocaleDateString() : "" }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.medium {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  &-title {
    font-size: var(--font-size-md);
    font-weight: 700;
  }

  &-more {
    font-size: var(--font-size-sm);
    font-weight: 600;
    text-decoration: underline;
  }

  &-list {
    display: grid;
    gap: var(--space-sm);
    grid-template-columns: 1fr;

    @include mixins.mq("md") {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    padding: var(--space-sm);
    border: 1px solid currentColor;
    border-radius: var(--radius-md);
    opacity: 0.9;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }

  &-item-title {
    font-weight: 700;
    font-size: var(--font-size-sm);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &-item-date {
    font-size: var(--font-size-xs);
    opacity: 0.6;
  }
}
</style>
