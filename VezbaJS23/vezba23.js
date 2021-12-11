// var1 = parseInt(prompt("Unesite neki broj"))

// if(var1 == 20){
//     alert("Broj je 20")
// }else{
//     alert("Broj nije 20")
// }

// lista =["Limun","Banana","Jabuka"]
// var1 = parseInt(prompt("Da li da dodate namirnice na listi(1 = DA , 2 = NE( Oduzimate Zadnju namirnicu )"));
// if(var1 === 1){
//     var2 = prompt("Unesite namirnicu: ");
//     if(var2.length < 8){
//     console.log(var2);
    
//     lista.push(var2);
// }else{
//         alert("Dugacka rec, Ne mozemo je uneti!");
//     }
// }
// if(var1 === 2){
//     lista.pop();
// }
// alert(lista);

// var1 = parseInt(prompt("Unesite broj"));
// if( var1 % 2 == 0 && var1 != 0){
//     alert("Broj je paran")
// }else{
//     alert("Broj je neparan")
// }


var1 = parseInt(prompt("Unesite broj"));

if(var1 % 3 == 0 && var1 % 5 == 0){
    alert("FizzBuzz");
}
else if(var1 % 3 == 0){
    alert("Fizz");
}
else if(var1 % 5 == 0){
    alert("Buzz");
}
