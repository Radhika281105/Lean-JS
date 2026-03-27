// {} - scope

var c = 300

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// return error becoz its scope is inside the curly braces
// console.log(a);
// console.log(b);

// returns 30
// console.log(c);

// but if var c ; is also defined outside scope
// then, also it will give 30 becoz var c can be redeclared and redefined again
// console.log(c);
// therefore, var is not generally used

function one(){
    const username = "radhika"
    //**closure** - child function can access parent function
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // website variable scope is above and limited..
    // website not defined
    // console.log(website); //-> error

    two()
}

// one()

if(true){
    const username = "radhika"
    if(username == "radhika"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //will generate error - called outside of scope
}

// console.log(username) //will generate error - outside of scope
 

//++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++

// correct
function addone(num){
    return num + 1
}

addone(5)

// also correct
const addTwo = function(num){
    return num + 2
}
addTwo(5)

//not correct becoz function cannot be called before initialization
//error - becoz the value is holded in a variable
// hoisting
// console.log(addThree(5))
// const addThree = function(num){
//     return num + 2
// }


// but this worked properly 
console.log(addone(5))
function addone(num){
    return num + 1
}

