import express from "express";
import ViteExpress from "vite-express";
import { convertToRoman } from "./romanNumerals.js"

const app = express();

app.get("/romannumeral", (req, res) => {
  let romanNumeral = convertToRoman(+req.query.query)

  if (!romanNumeral || romanNumeral === 'error') {
    res.status(400).send({
      input: req.query.query,
      error: "Something was wrong with the input, try again" })
    return
  }

  res.status(200).send({
    input: req.query.query,
    output: romanNumeral
  });
});

ViteExpress.listen(app, 8080, () =>
  console.log("Server is listening on port 8080..."),
);
