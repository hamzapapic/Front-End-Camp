playerdiv = document.querySelectorAll("div")[0];
flexdiv = document.querySelectorAll("div")[1];
fetchtv = async () => {
  response = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  data = await response.json();
  playerID = data.Player.id;
  videos = data.Video;
  videos.forEach((element) => {
    newcard = document.createElement("div");
    newimg = document.createElement("img");
    newp = document.createElement("p");
    time = document.createElement("div");
    newcard.classList.add("card");
    newimg.src = element.snapshots.sd;
    newimg.addEventListener("click", (e) => {
      if (playerdiv.firstChild) playerdiv.removeChild(player);
      id = element.id;
      player = document.createElement("div");
      player.innerText = element.source.hd;
      playerdiv.appendChild(player);
    });
    newp.innerText = element.name;
    mins = (element.duration - (element.duration % 60)) / 60;
    sec = element.duration % 60;
    if (sec < 10) time.innerText = "00:" + mins + ":" + "0" + sec;
    else time.innerText = "00:" + mins + ":" + sec;
    newcard.appendChild(newimg);
    newcard.appendChild(newp);
    newcard.appendChild(time);
    flexdiv.appendChild(newcard);
  });
};
fetchtv();
