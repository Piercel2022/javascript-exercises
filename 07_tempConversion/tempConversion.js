function ftoc(fahrenheit) {
  celsius = (fahrenheit - 32) / 1.8;
  return celsius;
};

function ctof(celsius) {
  const fahrenheit = (celsius * 1.8) + 32
  // return the variable fahrenheit as the answer
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
