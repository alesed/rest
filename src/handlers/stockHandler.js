const { default: axios } = require("axios");
const validate = require("../validators/identifierValidator");

const API_KEY = "507eb1077amsh6b3759ab820619fp1cefabjsnf8fd1a58cb70";
const API_HOST = "apidojo-yahoo-finance-v1.p.rapidapi.com";
const API_URL =
  "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary";

module.exports = async function handleStock(identifier) {
  if (!validate(identifier)) {
    return undefined;
  }

  const result = await getResult(identifier);
  return JSON.stringify({ result });
};

async function getResult(identifier) {
  try {
    const result = await axios.get(API_URL, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
      params: {
        symbol: identifier,
        region: "US",
      },
    });

    return result.data.price.regularMarketPrice.raw;
  } catch (error) {
    return undefined;
  }
}
