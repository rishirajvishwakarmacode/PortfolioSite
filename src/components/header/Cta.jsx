import React from 'react'
import resume from "../../assets/Resume.pdf"
const Cta = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta