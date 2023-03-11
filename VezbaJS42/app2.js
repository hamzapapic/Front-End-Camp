// Osnovni principi objektno orijentisanog programiranja:
// 1. Enkapsulacija
// Princip skrivanja informacija i funkcionalnosti objekta i pruzanje jednostavnog i jasnog interfacea za rad  sa tim objektom

// 2. Nasledjivanje (Inheritance)
// Ovaj princip nam omogucava kreiranje novih klasa na osnovu postojecih. Samim tim se nasledjuju sve funkcionalnosti postojecih klasa

// 3. Polimorfizam
// Ovaj princip nam omogucava koriscenje istog koda za rad sa razlicitm tippovima objekata.

// 4. Apstraktcija
// Omogucava nam da izolujemo i identifikujemo binte karakteristike objekta, a da zanemarimo manje bitne

class Person {
  #ime;
  #prezime;
  constructor(ime, prezime) {
    this.#ime = ime;
    this.#prezime = prezime;
    this.#godine = brGodine;
  }
  //   PrivatPna metoda unutar klase:
  #getInfo() {
    console.log(`${this.#ime} ${this.#prezime} ima ${this.godine} godina `);
  }

  get fullName() {
    console.log(`${this.#ime} ${this.#prezime}`);
  }
  set changeName(newName) {
    this.#ime = newName;
  }
}

const person1 = new Person("Hatidza", "Mahmo");
console.log(person1);
// Izvrsavanje get mdetode je sintaksicki isto kao pozivanje nekog svojstva
console.log(person1.fullName);
// Setovanje nove vrednosti putem set metode se vrsina nacin kao da
// modifikujemo vrednost nekog objekta, s tim sto se pozivamo na naziv set metode.
person1.changeName = "Miona";
console.log(person1.fullname);

class Oblik {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  povrsina() {
    return this.a * this.b;
  }
}

class Pravougaonik extends Oblik {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
  }
}

const pravougaonik1 = new Pravougaonik(0, 0, 4, 5);
console.log(pravougaonik1);

class Krug extends Oblik {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }
  povrsina() {
    return Math.PI * this.r ** 2;
  }
}

const krug1 = new Krug(0, 0, 2);
console.log(krug1.povrsina());
// polimorfna funkcija koju mozemo koristiti za razlicite tipove objekata
function izracunajPovrsinu(oblik) {
  return oblik.povrsina();
}

console.log(izracunajPovrsinu(pravougaonik1));
console.log(izracunajPovrsinu(krug1));
