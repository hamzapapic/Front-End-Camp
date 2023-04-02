number = document.querySelector("input");
form = document.querySelector("form");
container = document.querySelector("div");
par = document.querySelectorAll("p")[0];
par2 = document.querySelectorAll("p")[2];
par3 = document.querySelectorAll("p")[4];
body = document.getElementsByTagName("body");
number.addEventListener("keypress", getValue);
randnum = Math.round(Math.random() * 20);
form.addEventListener("submit", Prevent);
score = 20;
hiscore = 0;
function Prevent(e) {
  e.preventDefault();
}
console.log(randnum);
function getValue(e) {
  if (e.key == "Enter") {
    val = number.value;
    if (val == randnum) {
      par.innerText = "GG";
      newbtn = document.createElement("button");
      newbtn.innerText = "Play Again ?";
      newbtn.type = "submit";
      container.appendChild(newbtn);
      hiscore = score;
      par3.innerText = hiscore.toString();
      document.body.style.backgroundColor = "limegreen";
      par.style.color = "green";
    }
    if (val < randnum) {
      par.innerText = "↑";
      par.style.color = "lightgreen";
      score--;
      par2.innerText = score.toString();
    }
    if (val > randnum) {
      par.innerText = "↓";
      par.style.color = "red";
      score--;
      par2.innerText = score.toString();
    }
    number.value = "";
  }
}
