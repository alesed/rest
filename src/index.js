const express = require("express");
const parseQueryParams = require("./parsers/queryParamsParser");
const handlerFactory = require("./factories/handlerFactory");

const app = express();

app.get("/", (req, res) => {
  const params = parseQueryParams(req.query);
  if (params) {
    const result = handlerFactory(params);
    return res.send(result);
  }
  res.send(undefined);
});

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
