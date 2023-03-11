// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je uspesno izvrsena".

function ProveraGod(god) {
  const promis = new Promise((resolve, reject) => {
    if (god >= 18) {
      resolve("Punoletni ste");
    } else {
      reject(`Niste punoletni, imate ${god}`);
    }
  });

  promis
    .then((poruka) => {
      console.log(poruka);
    })
    .catch((poruka) => {
      console.log(poruka);
    });
}

console.log(ProveraGod(17));
console.log(ProveraGod(18));
console.log(ProveraGod(42));
