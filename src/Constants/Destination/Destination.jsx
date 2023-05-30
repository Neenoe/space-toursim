import React, { useState } from 'react'
import './destination.css'
import moon from './../../assets/destination/image-moon.png'
import mars from './../../assets/destination/image-mars.png'
import europa from './../../assets/destination/image-europa.png'
import titan from './../../assets/destination/image-titan.png'
import data from '../../data.json'

function Destination() {
  console.log(data.destinations)
const [planetNumber, setPlanetNumber] = useState(0)

let planetImages = [
  moon,
  mars,
  europa,
  titan
]

function tabChange(e) {
 setPlanetNumber(e.target.dataset.index)
}

return (

 
    <div className='app__destination_container'>

      {
        

            <>
              <div  className='app__destination_left'>
      <div className='app__destination_left_pick'>
    <span>01</span>
    <p>PICK YOUR DESTINATION</p>
      </div>

      <div className='app__destination_left_img'>
    <img src={planetImages[planetNumber]} alt="moon" />

      </div>

    </div >

    <div className='app__destination_right'>
      <div className='spp__destination_right_lists'>
        <ul className='app__destination_right_lists_ul'>
          <li data-index={0} onClick={tabChange}>Moon</li>
          <li data-index={1} onClick={tabChange}>Mars</li>
          <li data-index={2} onClick={tabChange}>Europs</li>
          <li data-index={3} onClick={tabChange}>Titan</li>
        </ul>

      </div>

      <div className='app__destination_right_texts'>
        <h1>
          {data.destinations[planetNumber].name}
        </h1>
        <p>{data.destinations[planetNumber].description}</p>

      </div>
      <div className='app__destination_right_line' />

      <div className='app__destination_right_distance'>
        <div className='app__destination_right_distance_km'>
          <span>AVG. DISTANCE</span>
          <p>{data.destinations[planetNumber].distance}</p>

        </div>

        <div className='app__destination_right_distance_time'>
          <span>EST. TRAVEL TIME</span>
          <p>{data.destinations[planetNumber].travel}</p>

        </div>

      </div>

      
    </div>
            </>
          
        }
      

  </div>
  )
}

export default Destination