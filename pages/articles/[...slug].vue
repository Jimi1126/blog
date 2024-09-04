<template>
  <section class="relative space-y-2">
    <div
      class="prose prose-stone dark:prose-invert prose-a:no-underline prose-blockquote:not-italic prose-pre:bg-stone-900 prose-img:ring-1 prose-img:ring-stone-200 dark:prose-img:ring-white/10 prose-img:rounded-lg app-max-width"
    >
      <article>
        <h1>{{ page.title }}</h1>
        <ContentRenderer :key="page._id" :value="page" />
      </article>
    </div>
    <div class="grid grid-cols-2 gap-4 items-start">
      <UButton
        v-if="prev"
        class="justify-self-start"
        variant="link"
        :label="'上一篇：' + prev.title"
        :to="prev._path"
      />
      <span v-else class="opacity-0">占位</span>
      <UButton
        v-if="next"
        class="justify-self-end"
        variant="link"
        :label="'下一篇：' + next.title"
        trailing
        :to="next._path"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { page, toc, next, prev } = useContent();
useContentHead(page);
</script>
