<template>
  <Navbar />
  <div id="Playlist">
    <h1>Estou na Playlist</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Playlist/Navbar.vue";

export default defineComponent({
  name: "Playlist",
  components: {
    Navbar,
  },
});
</script>
