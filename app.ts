// What is a Single Page Application (SPA)?
// An application with one THML page, updated dynamically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.

// What is typescript?
// It is a superset of javascript, used to build large application with data types.
// Typescript is transpiled into javascript.
// We can install it globally using: npm i -g typescript
// tsc -w app.ts -> app.js

// How can we declare variables in Typescript?
// var, let, const

// var is globally scoped
var x = 10;
if (x == 10) {
  // redefine x globally
  var x = 20;
}

console.log(x); //20

// let is block scoped
let y = 10;
if (y == 10) {
  // try redefine y locally
  let y = 20;
  console.log(y);
}

console.log("redeclared y = " + y);

// const is block scoped
// We cannot reassign a value to a constant variable.
const z = 10;

// z = 20; // will error

// let is preferred over var, and considered best practice to avoid scoping issues.

// Data types in Typescript
// string, number, boolean, void, null, undefined, any
// We can define a variables data type using colon syntax
let customMessage: string = "Hello World";
let num: number = 10;
let isValid: boolean = true;
let nullValue: null = null;
let undefinedVariable: undefined = undefined;
let anyValue: any = 10;

// function does not return anything have a return type of boid.
function greet(): void {
  console.log("Hello World");
  return;
}

// Typeof operator
console.log(typeof num); // number
console.log(typeof customMessage); // number
console.log(typeof isValid); // number

// User-define data types

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["John", "Smith"];

// Tuples: when we have an array with known number of elements and data types
let person: [string, number, boolean] = ["John", 25, true];

// Class defines a custom data type as well.
class Person {
  name: string;
  age: number;
  isStudent: boolean;

  constructor(nameProp: string, ageProp: number, isStudentProp: boolean) {
    this.name = nameProp;
    this.age = ageProp;
    this.isStudent = isStudentProp;
  }
}

let person1 = new Person("John", 78, true);

console.log(person1);
