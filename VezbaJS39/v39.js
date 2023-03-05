// function resolveAfter2s(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("resolved")
//         }, 2000);
//     })
// }

// async function asyncCall(){
//     console.log("calling");
//     try(
//         const result = await resolveAfter2s();
//         console.log(result);
//         console.log("drugi korak");
//         console.log("treci korak");
//         console.log("tre");
//     )
//     catch{
//         console.log("doslo je do greske");
//     }
// }

// function asyncCall(){
//     console.log("calling");
//     resolveAfter2s()
//     .then((result) => console.log(result))
//     .then(() => console.log("drugi korak"))
//     .then(() => console.log("treci korak");)
// }
// asyncCall()
const getData = async () => {
  let response = await fetch(`https://catfact.ninja/facts?page=1&limit=10`);
  let res = await response.json();
  res.data.forEach((el) => {
    x = document.createElement("div");
    x.innerHTML = el.fact;
    document.body.appendChild(x);
  });
};
getData();
