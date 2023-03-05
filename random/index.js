// btn = document.getElementById("btne");
// btn.addEventListener("click", () => {
//   btn.style.color = "blue";
//   btn.style.backgroundColor = "white";
//   btn.innerText = "Buy now";
// });
// function nextPrime(n) {
//   let k = 0;
//   for (i = n + 1; i < n * 10; i++) {
//     console.log(i);
//     for (j = 1; j <= i; j++) {
//       console.log(j);
//       if (i % j == 0) {
//         k++;
//       }
//     }
//     console.log(k);
//     if (k == 2) {
//       return i;
//     }
//   }
// }

// nextPrime(5);
x = parseInt(prompt("Koliko zelite boja: "));
colorul = document.createElement("ul");
document.getElementById("colordiv").appendChild(colorul);
colorbtn = document.getElementById("removecolor");
colorizebtn = document.getElementById("colorize");
for (i = 0; i < x; i++) {
  color = prompt("Koju boju zelite: ");
  colorli = document.createElement("li");
  colorli.innerText = color;
  colorli.classList.add("clr");
  colorul.appendChild(colorli);
}
lis = document.getElementsByClassName("clr");
colorbtn.addEventListener("click", () => {
  removecolor = prompt("Koju boju zelite da izbacite: ");
  for (i of lis) {
    if (i.innerText == removecolor) {
      colorul.removeChild(i);
    }
  }
});
colorizebtn.addEventListener("click", () => {
  for (i of lis) {
    if (i.style.backgroundColor == i.innerText) {
      i.style.backgroundColor = "";
    } else {
      i.style.backgroundColor = i.innerText;
    }
  }
});
