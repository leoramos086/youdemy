<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="/images/logoFullDark.svg" width="112" height="28" />
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMobileMenu"
        :class="{ 'is-active': isActiveMobileMenu }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-divider-vertical" />
    <div class="navbar-menu" :class="{ 'is-active': isActiveMobileMenu }">
      <div class="navbar-start">
        <div class="navbar-item">Curso de Vue JS</div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">Progresso</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isActiveMobileMenu = ref(false);

    function toggleMobileMenu() {
      isActiveMobileMenu.value = !isActiveMobileMenu.value;
    }

    return {
      isActiveMobileMenu,
      toggleMobileMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-divider-vertical {
  align-self: center;
  width: 1px;
  height: 1.5rem;
  margin: 0 5px;
  background-color: $grey;
  
}
</style>
