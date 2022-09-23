const add = function() {
  let a = 0, b = 0;
	return a + b;
};

const subtract = function() {
	let a = 0, b = 0;
  return a - b;
};

const sum = function() {
  let a = 0, b = 0;
  return a + b
	
};

const multiply = function() {
  let a = 0, b = 0;
  return a * b;

};

const power = function() {
  let a = 0, b = 0;
  let x = Math.pow(a, b);
  return x;
	
};

const factorial = function() {
  let num = 0;
	 if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
