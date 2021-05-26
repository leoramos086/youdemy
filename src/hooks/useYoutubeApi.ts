import { reactive } from "@vue/reactivity";
import axios from "axios";

import playlistExample from "./playListMockup";

interface IPlaylist {
  playlistID: string;
  channelID: string;
  channelTitle: string;
  items: IPlaylistitem[];
}

interface IPlaylistitem {
  position: number;
  videoId: string;
  title: string;

  description: string;
}

const state = reactive({
  key: process.env.VUE_APP_YOUTUBE_KEY,
  playlist: <IPlaylist[]>[],
});

axios.defaults.headers.Authorization =
  process.env.VUE_APP_YOUTUBE_AUTHORIZATION;

export async function playlist(playlistID: string): Promise<IPlaylist | false> {
  const playlist = state.playlist.filter((play) => {
    return play.playlistID == playlistID;
  });

  if (playlist.length) return playlist[0];

  const newPlaylist = await setPlaylist(playlistID);

  if (newPlaylist !== undefined) {
    state.playlist.push(newPlaylist);
    return newPlaylist;
  }
  
  return false;
}

async function setPlaylist(playlistID: string): Promise<IPlaylist | undefined> {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistID}&key=${state.key}&part=snippet&maxResults=50`
    );

    checkTotalResults(response);
    const playlist = formatPlaylist(response.data);

    return playlist;
  } catch (error) {
    console.error(error);
    // throw new TypeError(error.message);
    
  }

  function formatPlaylist(data: responsePlaylistItems["data"]): IPlaylist {
    const result: IPlaylist = {
      playlistID: "",
      channelID: "",
      channelTitle: "",
      items: [],
    };

    data.items.map((item) => {
      result.playlistID = item.snippet.playlistId;
      result.channelID = item.snippet.channelId;
      result.channelTitle = item.snippet.channelTitle;
      result.items!.push({
        position: item.snippet.position,
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
      });
    });

    return result;
  }

  function checkTotalResults(res: responsePlaylistItems) {
    if (res.data.pageInfo.resultsPerPage < res.data.pageInfo.totalResults) {
      console.log(`Número de vídeos: ${res.data.pageInfo.totalResults}`);
    }
  }
}

interface responsePlaylistItems {
  data: {
    items: [
      {
        snippet: {
          playlistId: string;
          position: number;
          publishedAt: string;
          title: string;
          channelId: string;
          channelTitle: string;
          description: string;
          resourceId: {
            videoId: string;
          };
        };
      }
    ];
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
  };
}
