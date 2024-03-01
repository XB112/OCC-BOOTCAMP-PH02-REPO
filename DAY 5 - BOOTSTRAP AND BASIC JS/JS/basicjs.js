// let = Changeable value
// Const = Unchangeable value
// Var = older way of declaring variables not used in modern tech.

// Primitive  - most basic data type
// Number || string || Boolean || Undefined || Null

const myname = "Keith";
let my_age = 25;

console.log(myname,"and age of", my_age)

// Number

let my_num = 20;
let my_num2 = 90.8;
console.log("This is a number:", my_num, my_num2);

// String
let first_name = "Regel";
console.log("This is a String:", first_name);

// Boolean -- True or False || Logical value

let isStudent = true;
console.log("This is a Boolean:", isStudent);

// Undefined -- uninitialized or missing value

let undefinedVar;
console.log("This is a Undefined:", undefinedVar);

// Null -- empty; intentional absence

const mylove = null;
console.log("This is a Null:", mylove);

// Reference Data Types -- holds more complex data types

//Object -- represents a collection of key values pairs that are enclosed in {}

// name, age and City are the keys of the object 
let person = {name: "Regel", age: "20", City: "Batangas",

}
console.log(person);

// Array -- represents a ordered list of values enclosed in []

let love = ["regel", "batangas", "20"];
console.log(love);

// 0 = regel because index is always start with 0 for example [1,2,3] ==> [0,1,2]
console.log(love[0]);

// Functions -- represents reusable block of codes that can be called by name

function greet(name){
    console.log("Hi! i love Mam " + name + ' I am a function!');
    // || ` || this is called back fix
    console.log(`Hi ${name}! I am a function`); // template literals
}

greet('Regel');