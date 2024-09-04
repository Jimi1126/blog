<template>
  <NuxtLoadingIndicator color="#075985" />
  <main
    class="flex flex-col gap-8 min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 text-base font-sans antialiased not-italic tracking-wider leading-6 text-wrap whitespace-normal break-all"
  >
    <AppHeader class="app-max-width" />
    <NuxtPage class="flex-auto app-max-width" />
    <AppFooter class="app-max-width" />
    <AppButton />
  </main>
</template>
<script lang="ts" setup>
useSeoMeta({
  author: 'jimi1126',
  copyright: '©2024 JIMI1126. All Rights Reserved.',
});
</script>
<style>
.app-max-width {
  @apply w-full md:max-w-[768px] p-[18px] m-auto;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
