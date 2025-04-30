// class Person {
//   constructor(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "American";
//     this.fullName = function () {
//       return this.firstName + ' ' + this.lastName;
//     };
//   }
// }

class Person {
  constructor (first, last, age, eyecolor)
}


myFather = new Person("Thomas", "henry", 60, "blue");
myMother = new Person("Alia", "Wales", 60, "blue");
myMother.nationality = "Germany";

// console.log(myFather);

// console.log(myMother);


// console.log(myFather.fullName())
// console.log(myFather.fullName())


const date = new Date();

date.setDate(27)

console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`)
console.log(date)
console.log(date.toDateString())
console.log(date.toISOString())