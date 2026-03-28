// assume string has true value
const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email")
}

// falsy values
// false, 0, -0, BigInt(0n), "", null, undefined, NaN

// truthy values
// 1. (all values) - (falsy value)
// 2. "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
// does a safety check if null or undefined value is arrived

let val1;
// val1 = 5 ?? 10  //O/P-  5

// val1 = null ?? 10   //O/P - 10

// val1 = undefined ?? 15;

// the first correct value recieved will be used or taken
val1  = null ?? 5 ?? 10
console.log(val1);


// TERNARY OPERATOR

// condition ? true : false
const iceTeaPrice = 100


iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")
