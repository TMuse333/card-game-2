import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components'
import {GameProvider} from './context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GameProvider
    <Index/>
    </>
  )
}

export default App
