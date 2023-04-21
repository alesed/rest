const { default: axios } = require("axios");
const validate = require("../validators/iataCodeValidator");

const ACCUWEATHER_API_KEY = "9bfUzA73MMZgM35u3i8yjOPFjvoG1Ze8";
const ACCUWEATHER_URL = "http://dataservice.accuweather.com";
const LOCATION_KEY_URL = ACCUWEATHER_URL + "/locations/v1/cities/search";
const CURRENT_CONDITIONS_URL = ACCUWEATHER_URL + "/currentconditions/v1/";
const IATA_INFO_URL = "https://www.airport-data.com/api/ap_info.json";

module.exports = async function handleAirportTemp(iataCode) {
  if (!validate(iataCode)) {
    return undefined;
  }

  const result = await getResult(iataCode);
  return JSON.stringify({ result });
};

async function getResult(iataCode) {
  try {
    const location = await getLocation(iataCode);
    const locationKey = await getLocationKey(location);
    const temperature = await getTemperature(locationKey);

    return temperature;
  } catch (_) {
    return undefined;
  }
}

async function getLocation(iataCode) {
  const iataResponse = await axios.get(IATA_INFO_URL, {
    params: {
      iata: iataCode,
    },
  });
  return iataResponse.data.location;
}

async function getLocationKey(location) {
  const iataResponse = await axios.get(LOCATION_KEY_URL, {
    params: {
      apikey: ACCUWEATHER_API_KEY,
      q: location,
    },
  });
  return iataResponse.data[0].Key;
}

async function getTemperature(locationKey) {
  const url = `${CURRENT_CONDITIONS_URL}${locationKey}`;
  const weatherResponse = await axios.get(url, {
    params: {
      apikey: ACCUWEATHER_API_KEY,
    },
  });
  return weatherResponse.data[0].Temperature.Metric.Value;
}
