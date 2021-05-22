import { reactive, ref } from "@vue/reactivity";
import axios from "axios";

interface IPlaylist {
  playlistID: string;
}

const state = reactive({
  playlist: <IPlaylist[]>[],
});

export async function getPlaylist(playlistID: string): Promise<IPlaylist> {
  const playlist = state.playlist.filter((play) => {
    return play.playlistID == playlistID;
  });

  if (playlist.length) return playlist[0];

  const newPlaylist = await getPlaylistYoutube(playlistID);

  state.playlist.push(newPlaylist);

  return newPlaylist;
}

async function getPlaylistYoutube(playlistID: string): Promise<IPlaylist> {
  return {
    playlistID: "lll",
  };
}
