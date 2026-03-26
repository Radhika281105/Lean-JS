const name = "radhika"
const repoCount = 50

// console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new is used to assign an object to a variable
const getName = new String("radhika-ct")
console.log(getName[0]);

// to access the object
console.log(getName.__proto__); //{}

// access the length
console.log(getName.length);

// didn't change original technique
console.log(getName.toUpperCase());

// to find the character present at each index
console.log(getName.charAt(5))

// to find index of the characters
console.log(getName.indexOf('a')) //if not found then index -> -1

// exclude last index char i.e. 4
const newString = getName.substring(0,4);
console.log(newString)

// can give negative index
// her also lower bound index value neglecgted i.e. -2 index
const anotherString = getName.slice(-4,-2);
console.log(anotherString);

const newStringOne = "  radhika   "
console.log(newStringOne);
// trim removes starting and ending extra spaces
console.log(newStringOne.trim());

// after radhika if u put some dash then it might be converted into %20
const url = "https://radhika.com/radhika%20saxena"
// replace helps in changing or replacing the value
console.log(url.replace('%20','-'))

// return true or false based on if the given string is present or not
console.log(url.includes('radhika')); //true
console.log(url.includes('my')); //false

// to split the string using a specified string 
// split() method
const new_url = url.split('/');
// [ 'https:', '', 'radhika.com', 'radhika%20saxena' ]
console.log(new_url);


const name_1 = "madhu";
console.log(`My name is ${name_1}`);