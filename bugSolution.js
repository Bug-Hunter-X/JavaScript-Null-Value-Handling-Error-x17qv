function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Original calculation
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 5));    // Output: 7
//Improved Solution with default values
function fooImproved(a = 0, b = 0) {
  return a + b;
}
console.log(fooImproved(null, 5)); // Output: 5
console.log(fooImproved(2, null)); // Output: 2
console.log(fooImproved(2, 5));    // Output: 7