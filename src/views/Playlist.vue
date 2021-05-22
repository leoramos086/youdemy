<template>
  <Navbar />
  <Sidebar v-if="toggleSidebar" />
  <div class="playlist-container" :class="{ 'with-sidebar': toggleSidebar }">
    <Video />
  </div>
  <!-- <div id="Playlist">
    <h1>Estou na Playlist</h1>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "@/components/Playlist/Navbar.vue";
import Sidebar from "@/components/Playlist/Sidebar.vue";
import Video from "@/components/Playlist/Video.vue";

export default defineComponent({
  name: "Playlist",
  components: {
    Navbar,
    Sidebar,
    Video,
  },
  setup() {
    const toggleSidebar = ref(false);

    return {
      toggleSidebar,
    };
  },
});
</script>

<style lang="scss">
.playlist-container {
  width: 100%;

  &.with-sidebar {
    width: 75%;
  }
}
</style>


