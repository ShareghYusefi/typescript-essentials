// What is a Single Page Application (SPA)?
// An application with one THML page, updated dynamically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// What is inheritance?
// When a class inherits properties and methods from another class.
var Mammal = /** @class */ (function () {
    function Mammal(hasHairProp, isWarmBloodedProp) {
        this.hasHair = hasHairProp;
        this.isWarmBlooded = isWarmBloodedProp;
    }
    Mammal.prototype.eat = function () {
        console.log("Mammal is eating.");
        return;
    };
    return Mammal;
}());
// We can inherit from Mammal class via "extends" keyword
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(nameProp, ageProp, hasHairProp, isWarmBloodedProp) {
        // we can use "super" to call the parent class (Mammal) constructor
        var _this = _super.call(this, hasHairProp, isWarmBloodedProp) || this;
        _this.name = nameProp;
        _this.age = ageProp;
        return _this;
    }
    Animal.prototype.eat = function () {
        console.log("Cat is eating.");
        return;
    };
    Animal.prototype.sleep = function () {
        console.log("Cat is sleeping.");
        return;
    };
    return Animal;
}(Mammal));
// Creating an Animal instance
var cat = new Animal("Cat", 4, true, true);
console.log(cat.eat());
var aligator = {
    name: "Aligator",
    age: 99,
    hasHair: false,
    isWarmBlooded: false,
    eat: function () {
        console.log("Aligator eating.");
    },
    sleep: function () {
        console.log("Aligator sleeping.");
    },
};
var dog = new Animal("Dog", 5, true, true);
