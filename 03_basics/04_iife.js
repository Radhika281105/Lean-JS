// IIFE - Immediately invoked function expression
// IIFE -It is used because the global scope causes a lot of pollution
// and to protect from that we use IIFE


// immediately invoke a function
// normal/regular function inside iife
(function chai(name){
    //named IIFE
    console.log(`DB CONNECTED ${name}`)
})("radhika");
// end the line using ; to end the function by using semicolon to separate 2 different function
// put the function in (paranthesis) and then call it using ()

// arrow function inside IIFE
( (name) => {
    //simple iife
    console.log(`db connected ${name}`);
} )("radhika");