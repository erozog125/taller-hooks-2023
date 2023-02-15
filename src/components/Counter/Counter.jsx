import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0)

  return (
    <>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        <button onClick={()=>setCounter(counter-1)}>Substract</button>
      </div>
    </>
  )
}
