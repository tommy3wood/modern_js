var moment = require('moment');

var math = require('mathjs');

console.log("Poop pushes the farts out");

var datetime = moment().startOf('month').fromNow();
console.log(datetime);

console.log(math.sqrt(-16));
console.log("How do batteries work?")


class Person{
  constructor(height, weight, limbs, parts){
    this.height = height;
    this.weight = weight;
    this.limbs = limbs;
    this.parts = parts;
  }
  getInfo(){
    return `The ${this.parts} is ${this.height} feet tall, has ${this.limbs} extremities, and weights ${this.weight} pounds` ;
  }
}

var jim = new Person(6, 220, 4, "boy")
console.log(jim);
console.log(jim.getInfo());

console.log("holy shirt balls")
console.log("in a hurry? eat some chimichuri, or french fries with a side of curry, or maybe a small oreo mcflurry")


