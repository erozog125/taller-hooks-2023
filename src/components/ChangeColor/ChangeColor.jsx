import React, { useState, useRef } from 'react'

export const ChangeColor = () => {

  // const [color, setColor] = useState('object');
  const container = useRef();

  const handleChangeColor = event => container.current.style.backgroundColor = event.target.value;
  
  return (
    <>
      <div ref={container} className="object"><p>Color</p></div>
      <input onChange={handleChangeColor} type="color" name="" id="input-color" />    
    </>
  )
}
