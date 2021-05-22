<template>
  <div id="video-player">
    <iframe
      id="video"
      src="https://www.youtube.com/embed/npA_f0ztIt0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>


<style lang="scss">
#video-player {
  position: relative;
  height: 80vh;
  background-color: black;

  #video {
    position: absolute;
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #14171c;
  }
}

.playlist-container.with-sidebar {
  #video-player {
    height: calc(100vh - 290px);
    background-color: red;
  }
}
</style>
