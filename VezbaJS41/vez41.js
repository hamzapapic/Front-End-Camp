// function User(ime, prezime) {
//   this.ime = ime;
//   this.prezime = prezime;
// }

// const bakir = new User("Bakir", "Ujkanovic");
// console.log(bakir);

class Person {
  // ime = "Default";
  // prezime;
  // godine;
  constructor(ime, prezime, brGodina) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = brGodina;
  }
  imeIPrezime() {
    return `${this.ime} ${this.prezime}`;
  }
}

// const person1 = Person();
// console.log(person1);
const person1 = new Person("Mehmed", "Kucevic", 15);
console.log(person1);

class Product {
  static IncreaseForTen = 1.1;
  constructor(name, price, desc, weight) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weight = weight;
  }
}
