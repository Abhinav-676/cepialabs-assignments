// ES6 imports
import { Expression } from "./Expression.js";

const e = "30 - 15 / 3 * 4 / 2 + 5 - 10 * 80 + 55"

// Follows BODMAS rule for expression evaluation (except for brackets and oders/exponents)
const exp = new Expression(e);

// Measure evaluate time
const customStart = performance.now();
const customResult = exp.evaluate();
const customEnd = performance.now();

console.log(`Evaluate result: ${customResult}`);
console.log(`Evaluate time: ${(customEnd - customStart).toFixed(6)} ms`);