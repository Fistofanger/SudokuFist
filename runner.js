const { solve } = require("./sudoku");
const num = process.argv[2];
console.log(solve(num));
