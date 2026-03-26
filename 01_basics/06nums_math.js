// to predefine in js that if u want a particular datatype


// automatically define the Number data type
const Num = 40
// console.log(Num)

// here we have casted the Number data type
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);

// to have the precision value till 1 digits after decimal
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;
// it gives precision upto n-digits mention in bracket
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++++++++

// Math is an object
// console.log(Math);
// console.log(Math.abs(-4)); //-ve -> +ve
// // round of the value
// console.log(Math.round(4.7)) //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,7,8,1));


// random() - value range between 0 and 1
console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1)

const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))