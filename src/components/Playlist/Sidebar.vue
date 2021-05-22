<template>
  <div id="sidebar" ref="root">
    <h2>SIDEBAR</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  setup() {
    const root = ref<HTMLDivElement>(document.createElement("div"));
    const handleScroll = () => {
      if (scrollY <= 52 && root.value) {
        root.value.style.top = `${52 - window.scrollY}px`;
      } else {
        root.value.style.top = "0px";
      }
    };
    onMounted(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      root,
    };
  },
});
</script>

<style lang="scss">
#sidebar {
  position: fixed;
  top: 0;
  width: 25%;
  right: 0;
  bottom: 0;

  background-color: $white-bis;
  opacity: .4;
}
</style>
