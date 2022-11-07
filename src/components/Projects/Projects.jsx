import React from 'react'
import '../Projects/Projects.css';
import img1 from '../../assets/portfolio1.jpg';



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
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Demo</a>
            </div>
          </article>

        </div>

        <br></br>

        <h2>Ongoing Projects</h2>

        <div className='container projects_container'>
         <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Join Project</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Join Project</a>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='project_image'>
              <img src={img1} alt="project img" />
            </div>
            <h3>This is Project Title</h3>
            <div className='portfolio_item_cta'>
              <a href='https://www.github.com' className='btn btn-primary' target='_blank'>Github</a>
              <a href='https://www.bizupeach.com' className='btn' target='_blank'>Join Project</a>
            </div>
          </article>
          
        </div>
        
    </section>
  )
}

export default Projects