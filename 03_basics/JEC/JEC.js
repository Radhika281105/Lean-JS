var val1 = 10;
var val2 = 5;

function addNum(n1, n2) {
  var total = n1 + n2;
  return total;
}

var result1 = addNum(val1, val2);
var result2 = addNum(3, 8);


// Key Points to Remember

// GEC is always created first, stored in "this"
// Every function call creates a new FEC with its own memory
// FEC is deleted after the function returns
// Memory phase → stores variables as undefined, functions as full definition
// Execution phase → actual values assigned, logic runs
// Call Stack uses LIFO (Last In First Out)
// JavaScript is single-threaded — one thing runs at a time
// You can visualize call stack live in Chrome DevTools → Sources tab → breakpoints