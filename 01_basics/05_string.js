const name = "radhika"
const repoCount = 50

// console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new is used to assign an object to a variable
const getName = new String("radhika")
console.log(getName[0]);

// to access the object
console.log(getName.__proto__);

// access the length
console.log(getName.length);

// didn't change original technique
console.log(getName.toUpperCase());

// to find the character present at each index
console.log(getName.charAt(9))

// to find index of the characters
console.log(getName.indexOf('a')) //if not found then index -> -1
