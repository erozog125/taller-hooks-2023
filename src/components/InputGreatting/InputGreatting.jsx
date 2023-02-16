import React, { useState } from 'react'

export const InputGreatting = () => {

  const [text, setText] = useState("InputGreatting")

  const handleText = event => setText(event.target.value)

  return (
    <>
      <div className='object'>{text}</div>
      <input placeholder='Insert your text' className='txt-into' onChange={handleText} type="text" />    
    </>
  )
}
