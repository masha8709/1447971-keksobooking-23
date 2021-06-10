
function getRandomIntInclusive(number1, number2) {
  const lower = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const upper = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomIntInclusive(1, 5);


function getRandomFloat(number1, number2, digits = 1) {
  const lower = Math.min(Math.abs(number1), Math.abs(number2));
  const upper = Math.max(Math.abs(number1), Math.abs(number2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

getRandomFloat(11.87665, 101.454545, 3);
