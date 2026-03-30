// Reduce

// first time accumulator take initial Value
// later the sum of the cuurentValue and initial Value will be stored in accumulator and then it will be added to the next value and so on

const myNums = [1,2,3]

// const myTotal =myNums.reduce(function(acc, currVal) {
//     console.log(`Accumulator: ${acc}, Current Value: ${currVal}`);
//     return acc + currVal
// }, 0) // 0 is the initial value of accumulator

// console.log(myTotal); // 6
// output will be:
// Accumulator: 0, Current Value: 1
// Accumulator: 1, Current Value: 2
// Accumulator: 3, Current Value: 3
// 6

// using arrow function

const myTotal = myNums.reduce((acc,currVal) => {
    acc += currVal;
    return acc;
}, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 299
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },{
        itemName: "web dev course",
        price: 399
    }
]

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalPrice);