// function dyears(age){
//     dog = age * 7
//     console.log(age)
// }
// dogage = parseInt(prompt("Koliko godina ima vas pas: "))
// alert(dyears(dogage))

// --------------------------------------------------------------


// function celsius(Ftemp){
//     Ctemp = (Ftemp - 32) * 9/5
//     console.log("Celcius is",Ftemp,"to Fahrenheit is",Ctemp);
// }
// function fahren(Ctemp){
//     Ftemp = (Ctemp * 9/5) + 32;
//     console.log("Celcius is",Ctemp,"to Fahrenheit is",Ftemp);
// }
// fahren(parseInt(prompt("Unesite temp u celciusima: ")));
// celsius(parseInt(prompt("Unesite temp u fahrenheitima: ")));


// --------------------------------------------------------------------


// function twiceAs(fage,sage){
//     dif = fage - sage
//     dif2 = dif - sage
//     console.log(dif2);
// }

// twiceAs(parseInt(prompt("Oceve godine")),parseInt(prompt("Oceve godine")))

// // -------------------------------------------------------------------------


// function Ugao(prvi,drugi){
//     treci = 180 - prvi - drugi;
//     console.log("Treci ugao je: ",treci);
// }
// Ugao(parseInt(prompt("Prvi ugao: ")),parseInt(prompt("Drugi ugao: ")))

// // -------------------------------------------------------------------------



function hydra(hours){
    litri = hours * 0.5
    litri =  Math.floor(litri)
    console.log(litri);
}

hydra(11.8)