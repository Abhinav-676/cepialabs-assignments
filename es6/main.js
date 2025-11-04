// ES6 imports
import { Expression } from "./Expression.js";

// Follows BODMAS rule for expression evaluation
const exp = new Expression("1 + 3 / 4")
// ES6 Template literals
console.log()
console.log(`Evaltion for '${exp.exp}' is ${exp.evaluate()}`)
console.log()

