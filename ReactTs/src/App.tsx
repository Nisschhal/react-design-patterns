import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import SplitScreen from "./components/SplitScreen"
import Left from "./components/Left"
import Right from "./components/Right"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Left title="Lefty" />
        <Right title="Righty" />
      </SplitScreen>
    </>
  )
}

export default App
