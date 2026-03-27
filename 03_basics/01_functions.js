// function myName(){
//     console.log("R")
//     console.log("A")
//     console.log("D")
//     console.log("H")
//     console.log("I")
//     console.log("K")
//     console.log("A")
// }

// myName() //used for actual exceution of function
// myName //used for just reference

// function addTwoNumbers(number1, number2){ //parameters
//     return number1 + number2
// }

//arguments
// console.log(addTwoNumbers(1,2)); 
// console.log(addTwoNumbers(1,"2")); //-> number to string conversion
// console.log(addTwoNumbers(1,null));

// storing the function result in a variable
// const result = console.log(addTwoNumbers(1,2));
// console.log(`value is ${result}`); //o/p - undefined

// correct way to store the variable

// function addTwoNumbers(number1, number2){ //parameters
//     let result = number1 + number2;
//     return result;
// }
// const result1 = addTwoNumbers(1,2);
// console.log("value is: " , result1);


// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("please enter the username");
//         return 
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("radhika"));
// console.log(loginUserMessage()) // here no value passed -> undefined 
// here in parameters only -> we have given a default valuen if no argumnets given
// so we'll never go into the if block


// if we are having multiple values and we don't have
// ... -> spread or rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,600))

const user = {
    username : "hitesh",
    price : 199
}

// in javascript it is necessary to have type checking
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "radhika",
//     price: 99
// })

const myNewArray = [200,300,400,100]
function returnSecondValue(getArray){
    return getArray[2]
}

// passing a array reference
console.log(returnSecondValue(myNewArray))

// directly creating an array and passing it
console.log(returnSecondValue([300,400]))
console.log(returnSecondValue([300,400,600]))