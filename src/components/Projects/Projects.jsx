import React from 'react'
import '../Projects/Projects.css';
import img1 from '../../assets/mlproject.jpg';
import img2 from '../../assets/project2img.jpg';
import img3 from '../../assets/iotproject.jpg';



const Projects = () => {
  return (
    <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className='container projects_container'>

         <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>Attendance System with Facial Recognition</h3>
            <div className='portfolio_item_cta'>
              <a href='https://github.com/rishirajvishwakarmacode/FacialRecognitionproject' className='btn btn-primary' target='_blank'>Github</a>
              {/* <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a> */}
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img2} alt="project img" />
            </div>
            <h3>Digital Supply Chain System</h3>
            <div className='portfolio_item_cta'>
              <a href='https://github.com/rishirajvishwakarmacode/atulya_test_run' className='btn btn-primary' target='_blank'>Github</a>
              {/* <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a> */}
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img3} alt="project img" />
            </div>
            <h3>Remote Communication System</h3>
            <div className='portfolio_item_cta'>
              {/* <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a> */}
            </div>
          </article>

        </div>

        <br></br>

        <h2>Ongoing Projects</h2>

        <div className='container projects_container'>
         <article className='portfolio_item'>
            <h3>Formal Outfit Recommendation application based on Images</h3>
            <div className='portfolio_item_cta'>
              <a href='#projects' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://forms.gle/PAZDNPPQwrjMpBri6' className='btn' target='_blank'>Join Project</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <h3>Client Management System for handling timely followups</h3>
            <div className='portfolio_item_cta'>
              <a href='#projects' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://forms.gle/QfmC5ZHbXvybHudR7' className='btn' target='_blank'>Join Project</a>
            </div>
          </article>
          
        </div>
        
    </section>
  )
}

export default Projects