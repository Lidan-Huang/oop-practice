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

