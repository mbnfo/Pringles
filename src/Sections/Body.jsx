import React from 'react'

const Body = ({children}) => {
  return (
    <div id = 'Body'>
      <div id = 'PringlesCan'>
        <div id = 'chips'>
          <img src='/Pringles/assets/chip.png' className='chip'/>
          <img src='/Pringles/assets/chip.png' className='chip'/>
          <img src='/Pringles/assets/chip.png' className='chip'/>
          <img src='/Pringles/assets/chip.png' className='chip'/>
          <img src='/Pringles/assets/chip.png' className='chip'/>
          <img src='/Pringles/assets/chip.png' className='chip'/>
        </div>
          <div id = 'circle'>
            {children}
          </div>
      </div>
      <div id='descriptors'>
        <div id='descriptor_1'>
          <img src='/Pringles/assets/Arrow_1.png' id = 'Arrow_1' alt = 'Arrow_1'/>
            <div id = 'descriptor_1_text'>
              <p>a blend of ingredients and crispy, crunchy texture for a deliciously complex tasting experience unlike one you’ve ever had from Pringles®</p>
            </div>
          </div>
          <div id='descriptor_2'>
            <img src='/Pringles/assets/Arrow_2.png' id = 'Arrow_2' alt = 'Arrow_2'/>
            <div id = 'descriptor_2_text'>
              <h2>Stack it, snack it, or share it—because when you pop, the fun never stops!</h2>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Body