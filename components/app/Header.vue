<template>
  <header
    ref="headerRef"
    class="flex items-center justify-between z-50"
    :style="styles"
  >
    <UTooltip text="切换主题">
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </UTooltip>
    <UTooltip text="主页">
      <UButton
        icon="i-heroicons-home"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        to="/"
      />
    </UTooltip>
  </header>
</template>
<script lang="ts" setup>
import { useFixedHeader } from 'vue-use-fixed-header';

const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
