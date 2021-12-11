numbers = [49,4,9,16,25]

// fNiz = numbers.filter(function(el){
//     return el % 2 == 0;
// });
// console.log(fNiz);

// isAllHigh = numbers.every(function (el){
//     return el > 18;
// })


// console.log(isAllHigh);



// isSomeHigh = numbers.some(function (el){
//     return el > 18;
// })


// console.log(isSomeHigh);


// fruits = ["apple","gold","Mango","orange",'kiwi']

// indexoforange = fruits.indexOf("orange")

// console.log(indexoforange);


// fruits = ["apple","gold","Mango","orange",'kiwi']

// a = fruits.includes("kiwi")

// console.log(a);


// a = numbers.find(function(el){
//     return el > 18;
// });

// console.log(a);

// var2 = () => {
//     console.log("Arrow function");
// }

// var2()


// numbers = [3,6,8,2]

// var1 = numbers.forEach(function(el){
//     return el >= 5;
// })

// console.log(var1);

// function provera(persons){
//     age = persons.map(function(el){
//         if(el.age > 20){
//             return `${el.name} moze`
//         }
//         else{
//             return `${el.name} ne moze`
//         }
//     })
//     console.log(age);
// }

// provera([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])

function provera(persons){
    age = persons.map(function(el){
        return el.name
    })
    console.log(age);
}

provera([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])