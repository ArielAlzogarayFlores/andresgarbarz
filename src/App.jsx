import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './Pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing></Landing>
    </>
  )
}

export default App
