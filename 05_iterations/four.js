const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};

// Use for...in loop for object iteration
for (const key in myObject) {
    // console.log(`key for shortcut is ${key}`);
}

const programming = ['js', 'cpp', 'rb', 'swift'];
// in for...in loop we get the index of the array and in for...of loop we get the value of the array
for (const key in programming) {
    // console.log(programming[key]);
}

// for..in loop when used for maps
// map is not iterable in for..in loop
const map = new Map()
map.set('IN','India')
map.set('USA','Unites States of America')

for (const key in map) {
    // console.log(map[key]);
}

// therefore, for..of loop is used for maps and arrays and for..in loop is used for objects as in arrays it gives the index and in objects it gives the key of the object.

// const coding = ['js', 'cpp', 'rb', 'swift'];

// using callback function in forEach loop
// in callback we don't give name to the function
// coding.forEach(function(val){
//     console.log(val);
// })

// using arrow function in forEach loop
// coding.forEach((val) => {
//     console.log(val)
// })

function printMe(val){
    console.log(val);
}

// here we are passing the function name without parenthesis because we don't want to call the function but we want to pass the function as a callback function in forEach loop
// we are passing the refernece of the function
// coding.forEach(printMe);

// ---------------------------------------------------------------------
// const coding = ['js', 'cpp', 'rb', 'swift'];

// along with the value we can also get the index and the array itself in forEach loop
// coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
// })
// Output of above code:-
// js 0 [ 'js', 'cpp', 'rb', 'swift' ]
// cpp 1 [ 'js', 'cpp', 'rb', 'swift' ]
// rb 2 [ 'js', 'cpp', 'rb', 'swift' ]
// swift 3 [ 'js', 'cpp', 'rb', 'swift' ]


// ----------------------------------------------------------------------

// an array consists of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFirstName: "js"
    },
    {
        languageName: "java",
        languageFirstName: "java"
    },
    {
        languageName: "Python",
        languageFirstName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.languageFirstName)
} )