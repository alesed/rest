const validate = require("../validators/iataCodeValidator");

module.exports = function handleAirportTemp(iataCode) {
  if (!validate(iataCode)) {
    return undefined;
  }

  return JSON.stringify(getResult(iataCode));
};

function getResult(iataCode) {
  // TODO: Implement this function
  const result = iataCode;

  return { result };
}
