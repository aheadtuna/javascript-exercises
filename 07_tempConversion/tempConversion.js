const convertToCelsius = function(fahrenheit) {
  // invoice from wikipedia
  
  return Number(((fahrenheit -32) * 5/9).toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  // invoice from wikipedia
  return Number((celsius * 9/5 + 32).toFixed(1));

};
convertToCelsius(20);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
