const handleAirportTemp = require("../handlers/airportTempHandler");
const handleStockPrice = require("../handlers/stockHandler");
const handleEval = require("../handlers/evalHandler");

module.exports = function handlerFactory(queryParams) {
  const { queryAirportTemp, queryStockPrice, queryEval } = queryParams;

  if (queryAirportTemp) {
    return handleAirportTemp(queryAirportTemp);
  } else if (queryStockPrice) {
    return handleStockPrice(queryStockPrice);
  } else if (queryEval) {
    return handleEval(queryEval);
  }
  return undefined;
};
