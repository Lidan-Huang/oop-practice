"use strict";

/**Create a class for vehicle with three properties and two methods:
 * - make, model and year
 * - honk method: returns string "Beep."
 * - toString method: returns string, like:
 *  - let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
 *  - myFirstVehicle.toString(); 
 *  - returns: "The vehicle is a Honda Monster Truck from 1999."
 */

class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk () {
    return "Beep.";
  }

  toString () {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
  }
}

/** Create a class for Car
 * - inherit from Vehicle
 * - each car instance has a property numWheels with value of 4
 */

class Car extends Vehicle {
  constructor (make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

/** Create Motorcycle class
 * - inherit from Vehicle
 * - each instance should have a property numWheels with value of 2
 * - reEngine method: returns "VROOM!"
 */

class Motorcycle extends Vehicle {
  constructor (make, model, year) {
    super (make, model, year);
    this.numWheels = 2;
  }

  revEngine () {
    return "VROOM!";
  }
}

/**Create a class for a Garage(vehicles are empty, just need to provide capacity)
 * - property: vehicles[]
 * - property: capacity(number)
 * - add method:
 *  - not a vehicle: return "Only vehicles are allowed in here!"
 *  - if the garage is at capacity, say "Sorry, we're full."
 */

class Garage {
  constructor (capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  add (newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) return "Sorry, we're full.";
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
let garage = new Garage(2);
console.log(garage.vehicles);
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)));
console.log(garage.vehicles);
console.log(garage.add("Taco"));
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
console.log(garage.vehicles);
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));