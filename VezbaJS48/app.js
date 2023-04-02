const getVideos = () => {
  fetch("https://services.brid.tv/services/get/latest/26456/0/1/25/0.json")
    .then((response) => response.json())
    .them((reponse) => {
      const videos = response.Video;
      localStorage.setItem("videos", videos);
      const playerId = reponse.player;
    });
};
