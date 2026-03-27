// arrow  function

// this 
const user = {
    username : "radhika",
    price : 999,
    welcomeMessage: function(){
        // this refers to current context
        console.log(`${this.username} ,welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage() //radhika ,welcome to website
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) //in node environemnt , it refers to an empty object {}

// browser global object -> window

// ARROW FUNCTION

// function chai(){
//     let username = "radhika"
//     // console.log(this);
//     // therefor this is used in the context of object and not using in function
//     // console.log(this.username);
// }
// chai()

// funtion declaration using arrow function
// in arrow function we don't use this
// but in regular funcn we use this
const chai = () => {
    let username = "radhika"
    console.log(this)
    console.log(this.username)
}
chai()
// basic arrow funcn declaration
// () => {}
// arrow function can also be holded in a variable

// e.g.
//1 way of writing arrow function
const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//2nd way of writing arrow function
// implicit function
const addthree = (num1,num2,num3) => (num1 + num2 + num3);
console.log(addthree(3,4,5));

//note - 
// 1. curly braces {} then write return keyword
// 2. () paranthesis then don't write return