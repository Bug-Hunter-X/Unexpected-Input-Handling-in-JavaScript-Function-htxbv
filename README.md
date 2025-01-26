# JavaScript Function: Unexpected Input Handling

This repository demonstrates a common error in JavaScript function design: the lack of comprehensive handling for unexpected input types beyond null.

The `bug.js` file shows a function that handles null inputs but doesn't address other potential issues like `undefined`, `NaN`, or strings that cannot be coerced into numbers.

The `bugSolution.js` file demonstrates a more robust solution by adding more comprehensive input validation and type checking.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., Node.js, browser console).
3. Run the code and observe the outputs.  Note the differences in how each file handles various unexpected inputs.