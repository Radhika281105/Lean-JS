// singelton
// no literal declaration
// unique object - single instance

//constructor - literal declaration
//object literals

//object literals

// to add a symbol in an objecct
// we can't directly add the symbol into the objects
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name" : "Radhika Saxena",
    // correct way to use symbol
    [mySym] : "myKey1",
    age : 18,
    location : "Jaipur",
    email : "radhika@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)

// can't access email using [] method becoz it is not written in double quotes
// console.log(JsUser.["email"])

// can't write variables with space in such a manner\
// console.log(JsUser.full name)
// need to write it in [] brackets for accessing purpose
// console.log(JsUser["full name"])

// console.log(JsUser[mySym]);

// to override the value
// JsUser.location = "Rampur";
// Object.freeze(JsUser)
// // after freeze value can't be override
// JsUser.location = "ghaziabad"
// console.log(JsUser.location);

// console.log(JsUser)
// {
//   name: 'Hitesh',
//   'full name': 'Radhika Saxena',
//   age: 18,
//   location: 'Jaipur',
//   email: 'radhika@google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   Symbol(key1): 'myKey1'
// }

// it freezes the object 
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user" );
}

JsUser.greeting2 = function(){
    //string interpolation
    console.log(`Hello Js user , ${this["full name"]}` );
}
console.log(JsUser.greeting()); //correct way of calling the function
console.log(JsUser.greeting2());

// console.log(JsUser.greeting) //function reference is only with us
// undefined -> becoz nothing is returned from the greeting



