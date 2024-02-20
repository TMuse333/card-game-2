import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from '../pages'
import {GameProvider} from './components/context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GameProvider>


    <Index/>
    </GameProvider>
    </>
  )
}

export default App
