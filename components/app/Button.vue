<template>
  <Teleport to="body">
    <div
      class="fixed flex flex-col space-y-4 transition-all duration-200 bottom-24 right-12 z-50"
    >
      <UTooltip
        text="返回"
        class="transition duration-200 ease-in-out"
        :class="{ 'translate-x-20 absolute': notBack() }"
      >
        <UButton
          icon="i-heroicons-arrow-left"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="router.back()"
        />
      </UTooltip>
      <UTooltip
        text="返回顶部"
        class="transition duration-200 ease-in-out"
        :class="{ 'translate-x-20 absolute': !scrolled }"
      >
        <UButton
          icon="i-heroicons-arrow-up"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="goTop"
        />
      </UTooltip>

      <UTooltip text="抵达底部">
        <UButton
          icon="i-heroicons-arrow-down"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          class="transition duration-200 ease-in-out"
          :class="{ 'translate-x-20 absolute': isBottom }"
          @click="goBottom"
        />
      </UTooltip>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { useScroll } from '@/hooks/scroll';
const router = useRouter();
const { scrolled, isBottom } = useScroll();
function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}
function notBack() {
  return /\s*\/$/.test(router.currentRoute.value.path);
}
</script>
