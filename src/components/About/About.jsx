import React from 'react';
import image from '../../assets/DP2finalfinal.jpg';
import {BsAwardFill} from 'react-icons/bs';
import {BsFolderCheck} from 'react-icons/bs';
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
              <BsFolderCheck className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id fuga, corporis laboriosam assumenda et minima distinctio. Rem corporis quam, mollitia veritatis maxime necessitatibus porro beatae libero natus dolorem perferendis!</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About