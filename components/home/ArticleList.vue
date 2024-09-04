<template>
  <ul class="space-y-4">
    <li
      v-for="article in articles"
      :key="article._path"
      class="pb-2 relative group hover:text-primary-700 before:absolute before:w-full before:bottom-0 before:border-b-2 before:border-gray-300 after:absolute after:w-0 hover:after:w-full after:bottom-0 after:border-b-2 after:transition-all after:ease-in after:duration-200 after:border-primary-800"
    >
      <ULink :to="article._path" class="space-y-2">
        <div class="grid grid-cols-[auto_max-content] items-end">
          <p
            class="text-xl font-medium truncate text-stone-800 dark:text-stone-200 group-hover:text-primary-800"
          >
            {{ article.title }}
          </p>
          <span>{{ getDateString(article) }}</span>
        </div>
        <p>
          {{ article.description }}
        </p>
      </ULink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  articles: {
    type: Array,
    require: true,
  },
});
function getDateString(article) {
  return new Date(article.published).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
</script>
