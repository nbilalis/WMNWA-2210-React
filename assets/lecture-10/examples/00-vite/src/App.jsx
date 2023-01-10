import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello name="World" />
    </div>
  )
}

export default App
