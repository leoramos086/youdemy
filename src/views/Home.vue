<template>
  <div class="home">
    <h1>Estou na Home Page</h1>
    <router-link to="/playlist/PLJ_KhUnlXUPteacVhunyK5M8SKIadeED0">
      Playlist
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
