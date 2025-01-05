import React, { useEffect, useState, useRef } from 'react'
import Header from './Header'
const Hero = ({children, flavour, description}) => {
  const [isDone, setIsDone] = useState(false)




  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(false)
    }, 3000)
  },[]);


  return (
    <div id = "hero">
      <Header/>
      <div id = 'information'>
        <div id = 'Slogan'>
          <h3>{description}</h3>
        </div>
        <div id = 'Flavour'>
          <h1>-{flavour}-</h1>
        </div>
        <div id = 'Try-now'>
          <button>Try Now</button>
        </div>
      </div>
      <div id = 'Pringles'>
      {children}
      </div>
    </div>
  )
}

export default Hero