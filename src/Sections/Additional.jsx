import React, { useState } from 'react'
import {Can_Images} from '../Constants/index'

const Additional = () => {
  const numbers = [0, 1, 2]

  const [shown, setShown] = useState(numbers.slice(0, 3))

  const handleLeftClick = () => {
    setShown(prevState => prevState.map(lastValue => (lastValue + 1) % numbers.length))
  }

  const handleRightClick = () => {
    setShown(prevState => prevState.map(firstValue => (firstValue - 1 + numbers.length) % numbers.length))
  }

  return (
    <div id='additional'>
      <div id='number_scroll'>
        <h3 onClick={handleLeftClick}>🡠</h3>
        {shown.map((number, index) => (
        <div>
        {
          index === 0 || index === 2 ? 
          <div key={index} id='number' style={{color: '#ffffffaa' , border:'1px #ffffffaa solid'}}>
          <p>{number}</p>
          </div>
          
          :

          <div key={index} id='number'>
          <p>{number}</p>
          </div>
          
          }</div>
        ))}
        <h3 onClick={handleRightClick}>🡢</h3>
      </div>
      <div id='can_title'>
        <h1>{Can_Images[shown[1]].category}</h1>
      </div>
      <div id='Cans'>

      {Can_Images[shown[1]].images.map((image, index) => (
          <img src={image.imageUrl} key = {index}/>
        ))}
      </div>
    </div>
  )
}

export default Additional