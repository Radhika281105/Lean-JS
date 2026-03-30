const myNums = [1,2,3,4,5,6]

// map returns the value
const newNums = myNums.map((num) => num + 10)
// console.log(newNums);

// ----------------------------------------------

// Chaining
const newNums2 = myNums
// map returns the value, so we can chain another map after it, and then filter after that..returns all values
    .map((num) => num * 10) //[10,20,30,40,50,60]
    .map((num) => num + 1) //[11,21,31,41,51,61]
    // can also use filter to filter the values from map
    .filter((num) => num >= 40) //filter ke saath true and false ki condition hoti hai, joh true hoga wahi return hoga..
console.log(newNums2);

