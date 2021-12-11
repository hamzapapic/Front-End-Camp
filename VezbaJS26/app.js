// var1 = parseInt(prompt("Koliko zelite da bude dugo: "))
// var2 = "* "
// for(i = 1; i <= var1;i++){
//     console.log(var2);
//     var2 += "* "
// }



// var1 = prompt("Unesi rec:")
// var2 = "" 
// for(i=var1.length-1;i >= 0 ;i--){
//     var2 += var1[i]
// }
// console.log(var2);

var1 = parseInt(prompt("Unesi 1. broj:"))
var2 = parseInt(prompt("Unesi 2. broj:"))
zbir = 0
for(i = var1;i <= var2;i++){
    zbir += i
}
zbir /= var2
console.log(zbir);
// if(var2 % var1 == 0){
//     console.log("True");
// }else{
//     console.log("False");
// }
