import React from 'react';
import image from '../../assets/DP2finalfinal.jpg';
import {BsAwardFill} from 'react-icons/bs';
import {BsFolderCheck} from 'react-icons/bs';
import {FaUserGraduate} from 'react-icons/fa';
import '../About/About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_img_div">
          <div className="about_img">
            <img src={image} alt="me" />
          </div>
        </div>
        
        <div className="about_contents">
          <div className="about_cards">

            <article className="about_card">
              <BsAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>College Student</small>
            </article>

            <article className="about_card">
              <BsFolderCheck className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>

            <article className="about_card">
              <FaUserGraduate className='about_icon'/>
              <h5>Education</h5>
              <small>B.Tech. ECE</small>
            </article>

          </div>

          <p>Despite my background in electronics, my interests have always centred on software and data science. My interest in data science and machine learning came about as a result of my involvement in certain Real Life projects relating to business and technology.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About