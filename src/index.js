const express = require("express");
const parseQueryParams = require("./parsers/queryParamsParser");
const handlerFactory = require("./factories/handlerFactory");

const app = express();

app.get("/", async (req, res) => {
  const params = parseQueryParams(req.query);
  if (params) {
    const result = await handlerFactory(params);
    res.setHeader("content-type", "application/json");
    res.send(result);
  } else {
    res.send(undefined);
  }
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
