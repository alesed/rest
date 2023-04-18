module.exports = function validateIdentifier(identifier) {
  const isOneToThreeCharacters =
    identifier.length >= 1 && identifier.length <= 3;
  const isOnlyLetters = identifier.match(/^[a-zA-Z]+$/);

  return isOneToThreeCharacters && isOnlyLetters;
};
