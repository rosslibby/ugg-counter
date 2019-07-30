import React from 'react'
import { Buttons, Counter } from './components'
import './style.css'

const App = () => {
  return (
    <div className="app">
      <h1 className='app__heading'>Counter</h1>
      <Counter />
      <Buttons />
    </div>
  )
}

export default App
