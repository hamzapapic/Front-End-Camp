// for(i = 0; i < 5; i++){
//     console.log("Hamza");
// }

// console.log("asdasd");
// for(i = 0; i < 5; i++){
//     console.log("Djes ba", i);
// }

// var1 = ["banana","kiwi","apple","mango"]
// for(i = 0; i < var1.length;  i++){
//     console.log(var1[i]);
// }

// var1 = parseInt(prompt("Koliko puta ce se ponoviti zeljeni string: "))
// var2 = prompt("Sta zelite da se ponovi: ")
// for(i = 0; i < var1;  i++){
//     console.log("var2");
// }



// var1 = parseInt(prompt("Unesite prvi broj: "))
// var2 = parseInt(prompt("Unesite drugi broj: "))
// for(i = var1; i < var2; i++ ){
//     if(i % 2 == 1){
//         console.log(i,"je neparan");
//     }
//     if(i % 2 == 0){
//         console.log(i,"je paran");
//     }
// }

ar1 = []
var1 = parseInt(prompt("Unesite prvi broj: "));
var2 = parseInt(prompt("Unesite drugi broj: "));
for( i = var1; i <= var2; i++){
    ar1[i-var1] = i
}
console.log(ar1);