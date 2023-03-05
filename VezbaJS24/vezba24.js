// var1 = parseInt(prompt("Unesite prvi broj"))
// var2 = parseInt(prompt("Unesite drugi broj"))
// if(var1 > var2) console.log("Veci je",var1);
// if(var2 > var1) console.log("Veci je", var2);
// if(var1 == var2) console.log("Jednaki su!");


// var1 = prompt("Unesite dan u nedelji")

// switch(var1.toLowerCase()){
//     case "ponedeljak":
//         console.log("Danas je ponedeljak");
//         break;
//     case "utorak":
//         console.log("Danas je utorak");
//         break;
//     case "sreda":
//         console.log("Danas je sreda");
//         break;
//     case "cetvrtak":
//         console.log("Danas je cetvrtak");
//         break;
//     case "petak":
//         console.log("Danas je petak");
//         break;
//     case "subota":
//         console.log("Danas je subota");
//         break;
//     case "nedelja":
//         console.log("Danas je nedelja");
//         break;
//     default:
//         console.log("Nepravilan unos");
//         break;
// }

a = Math.random() * 10;
a = Math.round(a);
b = parseInt(prompt("Unesite broj 1-10: "));

if(a == b ){
    console.log("Bravo pogodio si!");
}else console.log("Nije tacan broj");