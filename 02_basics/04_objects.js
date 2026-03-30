// const tinderUser = new Object() -> singleton object
// or
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Radhika"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const  regularUser = {
    email : "some@gmail.com",
    // nesting possible
    fullname : {
        firstName : "Radhika",
        lastName : "Saxena"
    }
}

// optional chaining used for protection
// console.log(regularUser.fullname?.firstName)
// if in development if value not recieved from api then used for protecction

// console.log(regularUser.fullname.firstName)
// console.log(regularUser.fullname.lastName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a" , 4 : "b"}
const obj4 = {5: "a" , 6 : "b"}

// const obj3 = obj1.concat(obj2)// error
// const obj3 = Object.assign({},obj1, obj2,obj4) 
// here , {} -> considered target 
// obj1, obj2, obj4 - considered source
// {} -> optional parameter
// console.log(obj3)

// or use spread method like array
const newobj = {...obj1, ...obj2, ...obj4}
// console.log(newobj)

// a single users array contains multiple objects
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)

// to get the keys of a particular object
// combined all keys into array
// console.log(Object.keys(tinderUser));
// combined all values into array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //less used

// to check is the object has a particular property or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor)
// destructure an object
// optimized syntax-
const {courseInstructor : Instructor} = course
// we can now access courseInstructor as Instructor
console.log(Instructor);

// object destructuring
// {}-> concept means destructuring
// used in react.js
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")
  


// ++++++++++++++++++++++++++++++++++++++++++++++++

// object - JSON
// not a object properly becoz it is not holded in a variable name
// {
//     "name" : "radhika",
//     "coursename": "js in hindi",
//     "price" : "free"
// }
// learn how to use api in js to fectch data and in response we get the url response

// API can be recieved in objects format, array format
// random user me - website for api
// json formatter tool
[
    {},
    {},
    {}
]

// json - javascript object notation