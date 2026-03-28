const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman",3]
// marvel_heros.push(dc)
// console.log(marvel_heros)
// therefore,
// array can take any type of value
// as it took an array inside the array

const allheros = marvel_heros.concat(dc)
// concat returns new array
// console.log(allheros)


// in spread we take a cup of glass material and break it and it spreads into multiple pieces
const new_heros = [...marvel_heros, ...dc];
// console.log(new_heros);
// concat and spread returns the same outut

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// want these in depth arrays(one-inside the other) into a single or array upto a particular depth then we use flat
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// used during scrapping
console.log(Array.isArray("Radhika"))

// from-> converts into array
console.log(Array.from("Radhika"))

console.log(Array.from({name : "Radhika"})) 
//not able to convert into array
// return - []
