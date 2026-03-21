// Primitive Type
// call-by value -> value is copied but not actual memory addr is given

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
// No special category given to float..It is given under Number
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123')
// given same value but still they are not same due to symbol data type
// console.log(id == anotherId)

// to convert large number into bigInt
const bigNumber = 37774986864234n
// console.log(typeof bigNumber)


// Reference Type (Non-Primtive)
// memory reference is allocated directly

// Array, Objects, Functions

// arrays
const heros = ["shaktiman", "naagraj", "doga"]

// objects in curly braces
let myObj = {
    name: "radhika",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitve), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"
// console.log(myYoutubename)
// console.log(anothername)

// heap memory is accessed
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email)
