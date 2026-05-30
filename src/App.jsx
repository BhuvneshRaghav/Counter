import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {

    if (count < 20) {
      setCount(count + 1);
    }
    else {
      console.log("Bas");

    }
  }
  const removeValue = () => {

    if (count > 0) {
      setCount(count - 1);

    }
    else {
      console.log("Bas");

    }
  }
  return (
    <>
      <section id="center">
        <h1>counter = {count}</h1>
        <button onClick={addValue}>Add  </button>
        <button onClick={removeValue}>reduce value</button>


      </section>


    </>
  )
}

export default App
