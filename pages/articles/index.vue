<template>
  <section class="space-y-24">
    <div class="space-y-8">
      <h2 class="text-2xl font-semibold text-stone-900 dark:text-stone-100">
        所有文章
      </h2>
      <p>
        这里收集了本站所有文章，大部分是关于前端编码、软件设计、服务部署和开发工具等方面的分享，共
        <text class="text-primary">{{ count }}</text>
        篇。
      </p>
    </div>
    <div class="space-y-8" v-for="(articles, key) in articlesGroup" :key="key">
      <h2 class="text-2xl font-semibold text-stone-900 dark:text-stone-100">
        {{ key }}
      </h2>
      <HomeArticleList :articles="articles" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { data: count } = await useAsyncData('articles-count', () =>
  queryContent('articles').count()
);
const { data: articles } = await useAsyncData('articles-page', () =>
  queryContent('/articles')
    .sort({ published: -1 })
    .only(['title', 'description', 'published', '_path'])
    .find()
);
const articlesGroup = computed(() => {
  const result = {};
  articles.value &&
    articles.value.length &&
    articles.value.reduce((prev: any, cur) => {
      const dateStr = new Date(cur.published).toLocaleDateString('zh-CN', {
        year: 'numeric',
      });
      prev[dateStr] = prev[dateStr] || [];
      prev[dateStr].push(cur);
      return prev;
    }, result);
  return result;
});
</script>
