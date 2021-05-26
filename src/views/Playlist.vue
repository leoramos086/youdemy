<template>
  <Navbar />
  <Sidebar v-if="toggleSidebar" />
  <div class="playlist-container" :class="{ 'with-sidebar': toggleSidebar }">
    <Video />
  </div>
  <div id="Playlist">
    <h1>Estou na Playlist</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

import { playlist } from "@/hooks/useYoutubeApi";

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
    const toggleSidebar = ref(true);

    const {
      params: { playlistID },
    } = useRoute();

    // console.log(playlistID);

    playlist(playlistID as string).then((data) => {
      if (!data) {
        return alert(
          "Erro ao procurar dados da Playlist no youtube, Tem certeza que essa playlist Existe?"
        );
      }
      console.log(data)
    });

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


