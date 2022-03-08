import React, { useState } from 'react'

const InputText = ({ setInputValue }) => {
  const [value, setValue] = useState('')

  const handler = () => {
    setInputValue(value)
    setValue('')
  }

  return (
    <div className='inputContainer'>
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input 
          type="text"
          placeholder='paste link here'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handler}>Shorten</button>
      </div>
    </div>
  )
}

export default InputText