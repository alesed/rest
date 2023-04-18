module.exports = function validateExpression(expression) {
  // number, parenthesis, plus, minus, multiply, divide
  const hasOnlyAllowedCharacters = expression.match(/^[0-9\+\-\*\/\(\)]+$/);

  return hasOnlyAllowedCharacters;
};
