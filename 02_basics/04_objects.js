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

console.log(users[1].email)
console.log(tinderUser)

// to get the keys of a particular object
// combined all keys into array
console.log(Object.keys(tinderUser));
// combined all values into array
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //less used

// to check is the object has a particular property or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
