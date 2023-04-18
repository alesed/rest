const validate = require("../validators/expressionValidator");

module.exports = function handleEval(expression) {
  if (!validate(expression)) {
    return undefined;
  }

  return JSON.stringify(getResult(expression));
};

function getResult(expression) {
  try {
    const result = eval(expression);
    return { result };
  } catch (_) {
    return undefined;
  }
}
