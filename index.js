const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const params = req.query;
  console.log(params);
  res.send("Express JS on Vercel");
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
