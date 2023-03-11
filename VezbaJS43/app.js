// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Delenje nulon nije moguce.");
//     }
//     return a / b;
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Ovo je bila funkcija koja deli dva broja.");
//   }
// }

// console.log(divide(10, 5));
// console.log(divide(10, 0));

// console.log("1");
// console.log("2");
// Promise je JavaScript koji predstavlja mesto za rezultate
// asinhrone funkcije dok traje zivrsavanje asinhrone operacije
// const cheeseburger = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response >= 200 && response < 300) {
//     resolve([1, 2, 3, 4, 5]);
//   } else {
//     reject("Nismo dobili trazeni niz.");
//   }
// });

// // cheeseburger
// //   .then((niz) => console.log(niz))
// //   .catch((message) => console.log(message));

// // chain efekat se postice tako sto vrednost koja treba biti koriscena u narednoj callback funkciji then metode se mora naci u return prethodne callback funkcije, prethodne
// niz
//   .then((niz) => {
//     console.log(`Dobili smo ${niz}`);
//     const parni = niz.filter((br) => br % 2 === 0);
//     return parni;
//   })
//   .then((noviNiz) => console.log(`Filtriran niz je ${noviNiz}`))
//   .catch((message) => console.log(message));

const samoglasnik = new Promise(resolve,reject){
    const string = "otoringolaringologija";
    const brojac = 0
    for(i in response){
        if(i in "aeiou");
        else{
            brojac++;
        }
    }
}

