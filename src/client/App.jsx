import { useState } from "react"
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import "./App.css"

function App() {


  return (
    <Provider theme={defaultTheme} className="provider" height="100%">
      <div className="app-wrapper">
        <Button
          variant="accent"
          onPress={() => {}}
        >
          Convert
        </Button>
      </div>
    </Provider>
  )
}

export default App;
