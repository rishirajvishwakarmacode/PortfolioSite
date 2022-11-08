import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import '../Footer/Footer.css'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>RISHI RAJ VSHWAKARMA</a>
        
        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='https://www.linkedin.com/in/rishiraj-vishwakarma-722a7887/' target='_blank'><BsLinkedin/></a>
            <a href='https://www.instagram.com/rishiraj.vishwakarma/' target='_blank'><BsInstagram/></a>
            <a href='https://twitter.com/RishiRaj1010' target='_blank'><BsTwitter/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Rishi Raj Vishwakarma. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer