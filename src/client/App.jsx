import { useState } from "react"
import axios from "axios";
import {Form, TextField, Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import "./App.css"

function App() {
  const [inputNumber, setInputNumber] = useState("")
  const [romanNumeral, setRomanNumeral] = useState("")

  async function onSubmit(event) {
    event.preventDefault()

    let currentInputNumber = inputNumber

    if (currentInputNumber === "") {
      //error
      return
    } else if (isNaN(+inputNumber)) {
      //error
      return
    } else if (+inputNumber < 1) {
      //error
      return
    } else if (+inputNumber > 3999) {
      //error
      return
    } else if (+inputNumber % 1 !== 0) {
      //error
      return
    }

    const response = await axios.get(`/romannumeral?query=${currentInputNumber}`)

    if (response.data.output) {
      setRomanNumeral(response.data.output)
    } else {
      //error
    }
  }

  function onInputChange(input) {
    setInputNumber(input)
    setRomanNumeral("")
  }

  return (
    <Provider theme={defaultTheme} height="100%">
      <div className="app-wrapper">
        <h2>Roman numeral converter</h2>
        <Form validationBehavior="native" onSubmit={onSubmit} maxWidth="size-3000">
          <TextField
            type="number"
            label="Enter a number"
            description="Input must be a whole number between 1 and 3999"
            value={inputNumber}
            onChange={onInputChange}
            isRequired
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
