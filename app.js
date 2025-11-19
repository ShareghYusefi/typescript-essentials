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
var y = 10;
if (y == 10) {
    // try redefine y locally
    var y_1 = 20;
    console.log(y_1);
}
console.log("redeclared y = " + y);
// const is block scoped
// We cannot reassign a value to a constant variable.
var z = 10;
// z = 20; // will error
// let is preferred over var, and considered best practice to avoid scoping issues.
// Data types in Typescript
// string, number, boolean, void, null, undefined, any
// We can define a variables data type using colon syntax
var customMessage = "Hello World";
var num = 10;
var isValid = true;
var nullValue = null;
var undefinedVariable = undefined;
var anyValue = 10;
// function does not return anything have a return type of boid.
function greet() {
    console.log("Hello World");
    return;
}
// Typeof operator
console.log(typeof num); // number
console.log(typeof customMessage); // number
console.log(typeof isValid); // number
// User-define data types
// Arrays
var numbers = [1, 2, 3, 4];
var names = ["John", "Smith"];
// Tuples: when we have an array with known number of elements and data types
var person = ["John", 25, true];
// Class defines a custom data type as well.
var Person = /** @class */ (function () {
    function Person(nameProp, ageProp, isStudentProp) {
        this.name = nameProp;
        this.age = ageProp;
        this.isStudent = isStudentProp;
    }
    return Person;
}());
var person1 = new Person("John", 78, true);
console.log(person1);
