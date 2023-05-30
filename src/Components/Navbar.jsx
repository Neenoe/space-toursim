
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import './navbar.css'
import OpenHam from '../assets/shared/icon-hamburger.svg'
import CloseHam from '../assets/shared/icon-close.svg'
import React, { useState } from 'react'

const Menu = () => (
<>
<ul> 
    <li><span>01</span> <Link to='Home'> HOME </Link></li>
    <li> <span>02</span> <Link to='Crew'> CREW </Link> </li>
    <li> <span>03</span> <Link to='Destination'> DESTINATION </Link></li>
    <li><span>04</span> <Link to='Technology'> TECHNOLOGY </Link> </li>

  </ul>
</>
)

function Navbar() {

const [ toggleMenu, setToggleMenu] = useState (false)
  return (
    <div className='app_navbar'>
      <div className='app_navbar_img'>
        <Link to='Home'>        <img src={logo} alt='logo' className='app__navbar-img' />
</Link>
</div>

<div className='app_navbar_line'/>

<div className='app__navbar__lists'>
 <Menu/>

</div>

<div className='app__navbar-icons'>
  {toggleMenu
  ? <img src={CloseHam} alt='close' color='#fff' size={27} onClick={() => setToggleMenu(false)} />
  : <img src={OpenHam} alt='open' color='#fff' size={27} onClick={() => setToggleMenu(true)} />}

  {toggleMenu && (
    <div className='gpt3__navbar-menu_container scale-up-center gradient__bg'>
    <div className='gpt3__navbar-menu_container-links'>
      <Menu/>

    </div>
  </div>

  )
  
  }

  


</div>


    </div>
  )
}

export default Navbar