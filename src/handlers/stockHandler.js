const identifierValidator = require("../validators/identifierValidator");

module.exports = function handleStock(identifier) {
  if (!validate(identifier)) {
    return undefined;
  }

  return JSON.stringify(getResult(identifier));
};

function getResult(identifier) {
  // TODO: Implement this function
  const result = identifier;

  return { result };
}
