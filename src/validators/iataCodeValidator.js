module.exports = function validateIataCode(iataCode) {
  const isExactlyThreeCharacters = iataCode.length === 3;
  const isOnlyLetters = iataCode.match(/^[a-zA-Z]+$/);

  return isExactlyThreeCharacters && isOnlyLetters;
};
