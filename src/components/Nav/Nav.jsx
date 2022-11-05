import React from 'react'
import {GoHome} from 'react-icons/go'
import {MdContacts} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {FiUserCheck} from 'react-icons/fi'
import {BsBookmarkPlus} from 'react-icons/bs'
import '../Nav/Nav.css';
import {useState} from 'react';


function Nav() {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUserCheck /></a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkPlus /></a>
        <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={()=>setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><MdContacts /></a>
    </nav>
  )
}

export default Nav