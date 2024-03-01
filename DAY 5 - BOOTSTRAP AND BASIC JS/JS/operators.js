/* 

Arithmetic Operator
+ - * /

*/

let num1 = 21;
let num2 = 10;

// addition

let sum = num1 + num2;
console.log("sum is "+ sum);

// subtraction

let diff = num1 - num2;
console.log("diff is "+ diff);

//product

let product = num1 * num2;
console.log("product is "+ product);

//quotient

let quotient = num1 / num2
console.log("quotient is "+ quotient);

//modulus  is used to get the remainder
let modulus = num1 % num2;
console.log("modulus is "+ modulus);

/*
Assignment operator
    =, += , -=, *=, /=
*/

//equals (=)

let equals = "this value";

// Addition Assignment ( +=)

let a = 5,b = 5; 

a += 5; // a = a + 5
console.log(a); //10

//Subtraction assignment (-=)

b -5; // a = a - 5
console.log(b) //5

/*
    Comparison Operators -- return Boolean values (true or false)

    > <   <=  >=    ==     ===    !=

*/ 

console.log(9 > 10); //FALSE
console.log(10<20); // TRUE
console.log(15<=30); // FALSE
console.log(20 >= 50); // TRUE
console.log('5' == 5); // Loose Equality
console.log('5' ===5); // strict equal
console.log(9!=20); // True

/*
Logical Operators -- combine/modify boolean values 
AND (&&)
OR (||)
NOT (!)
 
*/

console.log("AND (&&):", true && false); // returns true if both conditions are true
console.log("OR (||):", true || false); // return true if at least one of the conditions is true
console.log("NOT (&&):", !true); // reverses the boolean value

/*
    Unary Operators --
        ++ --

*/ 

let x = 20;

x++; //x+1
x--; //x-1

/* Ternary Operators -- conditional statement in a single line; -- takes 3 operands and returns a value based on a condition

Syntax:
    Condition? expression1: expression2
*/ 

let age = 20;

let message = (age >= 18) ?
"you are of legal age." : "you are a minor";

console.log(message);