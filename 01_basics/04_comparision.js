// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// console.log("radhika")

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// the reason is that an equality check == and comparisions > < >= <= 
// work differently 
// Comparisions convert null to a number, treating it as 0.
//That's why (3) null>=0 is true and (1) null>0 is false.

// always gives false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// strict check
// === (values + datatypes check)
// console.log("2" == 2)
// console.log("2" === 2)