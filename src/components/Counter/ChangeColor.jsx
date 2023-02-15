import React, { useState } from 'react'

export const ChangeColor = () => {

  const [color, setColor] = useState('object');

  const handleChangeColor = (event) => {

    const newColor = {
      backgroundColor: event.target.value      
    }
    

  }
  
  return (
    <>
      <div className={color}><p>Color</p></div>
      <input onChange={handleChangeColor} type="color" name="" id="input-color" />    
    </>
  )
}
