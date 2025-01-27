import express from "express"
import ViteExpress from "vite-express"
import { convertToRoman } from "./utilities.js"
import Rollbar from "rollbar"
import 'dotenv/config'

const app = express()

// If no valid rollbar code is provided in the .env file, the app
//   will work, it just won't have rollbar monitoring.
const rollbar = new Rollbar({
  accessToken: process?.env?.ROLLBAR_CODE || "none",
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get("/romannumeral", (req, res) => {
  rollbar.log('GET /romannumeral called')
  let romanNumeral;
  try {
    romanNumeral = convertToRoman(+req.query.query)
  } catch(err) {
    rollbar.critical(`critical failure in convertToRoman, input ${req.query.query}`)
    res.status(500).send()
    return
  }

  // If we receive a falsey value or 'error' string from convertToRoman,
  //   we assume the input from the front end was invalid
  if (!romanNumeral || romanNumeral === 'error') {
    //if we get here, it is strange behavior on the API caller: log as critical
    rollbar.critical(`
      400 error got past front end validation, 
      IP ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}
    `)
    res.status(400).send({
      input: req.query.query,
      error: "Something was wrong with the input, try again" })
    return
  }

  res.status(200).send({
    input: req.query.query,
    output: romanNumeral
  })
})

const port = process?.env?.PORT || 8080

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`),
)
