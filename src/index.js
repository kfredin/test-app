const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const pow = Math.pow;

function stringify(value) {
  return `"${value}"`;
}

function hello() {
  return "hello world";
}

module.exports = { add, sub, mul, div, pow, stringify, hello };
