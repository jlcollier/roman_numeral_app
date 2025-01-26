import { useState } from "react"
import axios from "axios";
import {Form, TextField, Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import "./App.css"

function App() {
  const [inputNumber, setInputNumber] = useState("")

  async function onSubmit(event) {
    event.preventDefault()

    let currentInputNumber = inputNumber

    if (currentInputNumber === "") {
      return
    } else if (isNaN(+inputNumber)) {
      return
    } else if (+inputNumber < 1) {
      return
    } else if (+inputNumber > 3999) {
      return
    } else if (+inputNumber % 1 !== 0) {
      return
    }

    const response = await axios.get(`/romannumeral?query=${currentInputNumber}`)

    console.log(response.data)
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
            onChange={setInputNumber}
            isRequired
          />
          <Button
            type="submit"
            variant="accent"
          >
            Convert
          </Button>
        </Form>
      </div>
    </Provider>
  )
}

export default App;
