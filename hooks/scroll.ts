import { onUnmounted, ref } from 'vue';

function throttle(cb: () => any, delay: number = 200) {
  let runing = false;
  return () => {
    if (runing) return false;
    runing = true;
    setTimeout(() => {
      cb && cb();
      runing = false;
    }, delay);
  };
}

export function useScroll() {
  const isTop = ref(false);
  const isBottom = ref(false);
  const scrolled = ref(false);
  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    isTop.value = !scrollTop;
    isBottom.value = scrollTop + clientHeight + 10 >= scrollHeight;
    scrolled.value = scrollTop > 10;
  }
  const handler = throttle(handleScroll);
  onMounted(() => {
    window.addEventListener('scroll', handler);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', handler);
  });
  return { isTop, isBottom, scrolled };
}
