class Course {
  title;
  lenght;
  price;
  constructor(title, lenght, price) {
    this.title = title;
    this.lenght = lenght;
    this.price = price;
  }
  get Vrednost() {
    return this.lenght / this.price;
  }
  get Summary() {
    return `This course is going to teach you about the IT world and the name of it is ${this.title},
it will take you ${this.lenght} weeks to complete it 
and it will cost ${this.price} euros.`;
  }
}

class PracticalCourse extends Course {
  numOfExercises;
  constructor(title, lenght, price) {
    super(title, lenght, price);
  }
}
class TheoreticalCourse extends Course {
  constructor(title, lenght, price) {
    super(title, lenght, price);
  }
  publish() {
    return "something";
  }
}
const kurs = new Course("front end course", 12, 50);
console.log(kurs);
console.log(kurs.Vrednost);
console.log(kurs.Summary);
const teokurs = new TheoreticalCourse();
console.log(teokurs.publish());
