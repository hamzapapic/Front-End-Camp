b = document.getElementById("bo");
par1 = document.getElementById("lorem");
x = par1.innerText.split(" ");
par2 = "";
// for (i of x) {
//   if (i.length > 10) {
//     par2 += i.toUpperCase() + " ";
//   } else {
//     par2 += i + " ";
//   }
// }
// par1.innerText = par2;

par1.innerHTML = par1.innerHTML
  .split(" ")
  .map((word) => (word.length > 10 ? word.toUpperCase() : word))
  .join(" ");
