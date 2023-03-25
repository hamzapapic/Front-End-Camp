// get element by id

const headertitle = document.getElementById("logo");
console.log(headertitle);

headertitle.textContent = "new logo";
headertitle.innerHTML = "<em>new logo<em>";

// promena stilova

headertitle.style.borrderBottom = "solid 3px #000";

// get elements by class name

const containers = document.getElementsByClassName("container");
console.log(containers);

const container = containers[0];
console.log(container);
container.style.backgroundColor = "red";
container.style.border = "1px solid #f00";

// get elements by tag name

const listItems = document.getElementsByTagName("li");
for (i = 0; i < listItems.length; i++) {
  if (i === 1) {
    listItems[i].style.color = "brown";
  } else {
    listItems[i].style.color = "green";
  }
}

// query selector

const firstLogoId = document.querySelector("#logo");
const firstCont = document.querySelector(".container");
const firstli = document.querySelector("li");
console.log(firstLogoId);
console.log(firstCont);
console.log(firstli);
firstli.textContent = "first item";

const input = document.querySelector("input");
// input.value = "hello world";

const input2 = document.querySelector("input[type='email]");

// input2.value = "test@test.com";
// input2.placeholder = "test.com";

// query selector all

const listItems2 = document.querySelectorAll("li");
console.log(listItems2);
