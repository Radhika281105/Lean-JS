// for of

// ["","",""] -> array of strings
// [{},{},{}] -> arrays of objects

const arr = [1,2,3,4,5]

// object -> thing on which u want to iterte on
for (const num of arr) {
    // console.log(num);
}
// for of can also be applied on strings for iteration

// maps
// Object
// hold key-value pair
// hold key value order
// no duplicate value
const map = new Map()
map.set('IN','India')
map.set('USA','Unites States of America')
// console.log(map)
// if we entered 2 same values, then it won't give error but also won't add it

// array destructure - [key,value] in map
for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// object but still not iterable due to wrong manner of iteration
// other way of iteration
for (const [key , value] of Object.entries(myObject)) {
    console.log(key, ":-", value)
}