<template>
  <section class="space-y-32">
    <div class="space-y-8">
      <HomeAvatar />
      <HomeGreet />
    </div>

    <section class="space-y-8">
      <div class="flex justify-between items-end">
        <h2 class="text-2xl font-semibold text-stone-900 dark:text-stone-100">
          最新文章
        </h2>
        <UButton variant="link" to="/articles" class="hover:text-primary-700"
          >更多</UButton
        >
      </div>
      <HomeArticleList :articles="articles" />
    </section>
  </section>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles-home', () =>
  queryContent('/articles')
    .limit(3)
    .sort({ published: -1 })
    .only(['title', 'description', 'published', '_path'])
    .find()
);
</script>
