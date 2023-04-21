const validate = require("../validators/expressionValidator");

module.exports = function handleEval(expression) {
  if (!validate(expression)) {
    return undefined;
  }

  const result = getResult(expression);
  return JSON.stringify(result);
};

function getResult(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (_) {
    return undefined;
  }
}
