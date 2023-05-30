import React, { useState } from 'react'
import './technology.css'
import data from '../../data.json'
import vehicle from './../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceport from './../../assets/technology/image-space-capsule-landscape.jpg'
import capsule from './../../assets/technology/image-spaceport-landscape.jpg'


function Technology() {

  const [metSpace, setMetSpace] = useState(0)

  let spaceImages = [
    vehicle,
    spaceport,
    capsule
  ]

  function tabChange(e) {
    setMetSpace(e.target.dataset.index)
  }

  return (
    <div className='app__technology_container'>

      {
         <>
         <div className='app__technology_left'>
        <div className='app__technology_left_intro'>
        <p>02 </p>
          <span>SPACE LAUNCH 101</span> 
        </div>

        <div className='app__technology_left_term'>
          <span>THE TERMINOLOGY</span>

        </div>

        <div className='app__technology_left_details'>
          <div className='app__technology_left_lists'>
            <ul>
              <li data-index={0} onClick={tabChange}>1</li>
              <li data-index={0} onClick={tabChange}>2</li>
              <li data-index={0} onClick={tabChange}>3</li>
            </ul>

          </div>

          <div className='app__technology_left_info'>
            <h3>{data.technology[metSpace].name}</h3>
            <span>{data.technology[metSpace].description}</span>

          </div>

        </div>
         </div>

         <div className='app__technology_right'>
          <div className='app__technology_right_img'>
            <img src={spaceImages[metSpace]} alt="pics" />

          </div>

         </div>
         </>
      }
     

    </div>
  )
}

export default Technology