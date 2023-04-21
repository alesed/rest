const handleAirportTemp = require("../handlers/airportTempHandler");
const handleStockPrice = require("../handlers/stockHandler");
const handleEval = require("../handlers/evalHandler");

module.exports = async function handlerFactory(queryParams) {
  const { queryAirportTemp, queryStockPrice, queryEval } = queryParams;

  if (queryAirportTemp) {
    return await handleAirportTemp(queryAirportTemp);
  } else if (queryStockPrice) {
    return await handleStockPrice(queryStockPrice);
  } else if (queryEval) {
    return await handleEval(queryEval);
  } else {
    return undefined;
  }
};
