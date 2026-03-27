// IIFE - Immediately invoked function expression
// IIFE -It is used because the global scope causes a lot of pollution
// and to protect from that we use IIFE


// immediately invoke a function
// normal function inside iife
(function chai(name){
    //named IIFE
    console.log(`DB CONNECTED ${name}`)
})("radhika");
// end the line using ; to end the function by using semicolon
// put the function in (parantesis) and then call it using ()

// arrow function inside IIFE
( (name) => {
    //simple iife
    console.log(`db connected ${name}`);
} )("radhika");