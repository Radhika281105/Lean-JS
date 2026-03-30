// const coding = ['js', 'cpp', 'rb', 'swift'];

// forEach never return a values
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

// --------------------------------------------------

// filter return the values
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)

// if putting num > 4 inside curly braces, we need to use return statement to return the value
// becoz by defining {}, we are giving it a scope

// const newNums2 = myNums.filter((num) => {
//     if(num > 4) {
//         return num;
//     }
// })
// console.log(newNums2);


const newNums = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);