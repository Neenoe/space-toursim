import React from 'react'
import './crew.css'
import data from '../../data.json'
import anousheh from './../../assets/crew/image-anousheh-ansari.png'
import douglas from './../../assets/crew/image-douglas-hurley.png'
import mark from './../../assets/crew/image-mark-shuttleworth.png'
import victor from './../../assets/crew/image-victor-glover.png'

function Crew() {
 
  

  const [metCrew, setMetCrew] = React.useState(0)


  let crewImage = [
    douglas,
    anousheh,
    mark,
    victor
  ]

  function tabChange (e) {
  setMetCrew(e.target.dataset.index)
  }


  return (
    <div className='app__crew_container'>

      {

        <>
      <div className='app__crew_left'>
        <div className='app__crew_left_intro'>
          <p>02 </p>
          <span>MEET YOUR CREW</span> 
          

        </div>

        <div className='app__crew_left_details'>
          <h3>{data.crew[metCrew].role}</h3>
          <h2>{data.crew[metCrew].name}</h2>
          <p>{data.crew[metCrew].bio}</p>

        </div>

        <div className='app__crew_left_toggle'>
          <ul className='app__crew_left_ul'>
            <li data-index={0} onClick={tabChange}>1</li>
            <li data-index={1} onClick={tabChange}>2</li>
            <li data-index={2} onClick={tabChange}>3</li>
            <li data-index={3} onClick={tabChange}>4</li>
          </ul>

        </div>

      </div>
      <div className='app__crew_right'>
        <img src={crewImage[metCrew]} alt="" />

      </div>
     
      </>

}

    </div>


  )
}

export default Crew