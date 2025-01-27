import express from "express";
import ViteExpress from "vite-express";
import { convertToRoman } from "./utilities.js"

const app = express();

app.get("/romannumeral", (req, res) => {
  let romanNumeral = convertToRoman(+req.query.query)

  // If we receive a falsey value or 'error' string from convertToRoman,
  //   we assume the input from the front end was invalid
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
