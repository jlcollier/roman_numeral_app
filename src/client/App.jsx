import { useState } from "react"
import axios from "axios";
import {Form, TextField, Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import "./App.css"

function App() {
  const [inputNumber, setInputNumber] = useState("")
  const [romanNumeral, setRomanNumeral] = useState("")

  async function onSubmit(event) {
    event.preventDefault()

    const response = await axios.get(`/romannumeral?query=${inputNumber}`)

    if (response?.data?.output) {
      setRomanNumeral(response.data.output)
    } else {
      //error
    }
  }

  function onInputChange(input) {
    setInputNumber(input)
    setRomanNumeral("")
  }

  function customValidator(value) {

    if (value === "") {
      return null
    } else if (isNaN(+value)) {
      return 'You must input a number'
    }

    let errorArr = []

    if (+value < 1) {
      errorArr.push('You must input a number that is 1 or greater')
    } else if (+value >= 4000) {
      errorArr.push('You must input a number less than 4000')
    }

    if (+value % 1 !== 0) {
      errorArr.push('You must input a whole number')
    }

    return errorArr.length > 0 ? errorArr : null
  }

  return (
    <Provider theme={defaultTheme} height="100%">
      <div className="app-wrapper">
        <h2>Roman numeral converter</h2>
        <Form onSubmit={onSubmit} maxWidth="size-3000">
          <TextField
            type="number"
            label="Enter a number"
            description={inputNumber ? "" : "Input must be a whole number between 1 and 3999"}
            value={inputNumber}
            onChange={onInputChange}
            validate={customValidator}
          />
          <Button
            type="submit"
            variant="accent"
          >
            Convert
          </Button>
        </Form>
        { romanNumeral &&
          <p>
            Roman Numeral:{" "}
            <span>{romanNumeral}</span>
          </p>
        }
      </div>
    </Provider>
  )
}

export default App;
