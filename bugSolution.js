function foo(a, b) {
  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Inputs must be numbers.');
    return NaN; // Or throw an error
  }

  // Handle nullish values (null or undefined)
  if (a == null || b == null) {
    return 0;
  }

  // Handle NaN inputs
  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Inputs cannot be NaN.');
    return NaN; // Or throw an error
  }

  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(undefined, 5)); // Output: Error and NaN
console.log(foo('hello', 5)); // Output: Error and NaN
console.log(foo(NaN, 5)); // Output: Error and NaN