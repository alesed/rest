module.exports = function parseQueryParams(queryParams) {
  const queryParamsLength = Object.entries(queryParams).length;
  if (queryParamsLength != 1) {
    return undefined;
  }

  return ({ queryAirportTemp, queryStockPrice, queryEval } = queryParams);
};
