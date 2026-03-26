// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,5)
console.log(myArr2)

// Array Menthod

// myArr.push(6);
// console.log(myArr)
// myArr.pop();
// console.log(myArr)

// to add the value at the start
// myArr.unshift(9)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(6)); //bool-> false
// console.log(myArr.indexOf(3)); //index->2

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr) //join binds the arr
// console.log(typeof newArr) //string


// slice, splice
// **imp**
// slice - doesn't manipulate the original array
// splice - maipulate the original array and include the last index also
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);