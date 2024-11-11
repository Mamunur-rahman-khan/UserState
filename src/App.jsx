import { useState, useRef } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(1);
  let countRef = useRef(1)

  // UseState
  let handleClick = () => {
    count++
    setCount(count)
  }
  // UseState

  // UseRef
  let handleClick2 = () => {
      console.log(countRef.current++)
  }
  // UseRef
  
  return (
    <>
    {/* // UseState */}
      <h1 className='font-bold ml-2'>Use State</h1>
      <h2 className='font-bold text-2xl ml-4'>{count}</h2>
      <button className='p-1 bg-teal-500 rounded-xl ml-2' onClick={handleClick}>Click</button>
    {/* // UseState */}
      
    {/* // UseRef */}
      <h1 className='font-bold ml-2'>Use Ref</h1>
      <h2 className='font-bold text-2xl ml-4'>{countRef.current}</h2>
      <button className='p-1 bg-teal-500 rounded-xl ml-2' onClick={handleClick2}>Click</button>
    {/* // UseRef */}
    </>
  )
}

export default App
