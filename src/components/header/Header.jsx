import React from 'react'
import './Header.css'
import Cta from "./Cta"
import dp1 from "../../assets/DP1final.png"
import Socials from './Socials'

const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I am</h5>
        <h1>Rishi Raj Vishwakarma</h1>
        <h5 className="text_lite">Software Development and Data Science Enthusiast</h5>
        <Cta/>
        <Socials />
        <div className='me'>
          <img src={dp1} alt="me" />
        </div>
        
      </div>
    </header>
  )
}

export default header