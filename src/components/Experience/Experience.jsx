import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import "../Experience/Experience.css"

const Experience = () => {
  return (
    <section id="experience">
        <h5> Experience </h5>
        <h2>Skills I have</h2>

        <div className="container experience_container">
          <div className="experience_webdev">
            <h3>Web Development</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>CSS</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>Django REST</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>Django</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>ReactJs</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_software">
            <h3>Software/Technologies</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>C++</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>Python</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>SQL</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>Git</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>Problem Solving</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container experience_container">
          <div className="experience_webdev">
            <h3>Data Science</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>ML Algorithms</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>OpenCV</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>Tableau</h4>
                <small className='text-lite'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>SAP</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div><h4>SQL</h4>
                <small className='text-lite'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>

          <div className="experience_software">
            <h3>Just Started Learning about</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>DSA</h4>
                <small className='text-lite'>(Algorithms)</small>
                </div>
             
              </article>

              <article className='experience_details'>
                <BsFillCheckCircleFill className='expicon'/>
                <div>
                <h4>Blockchain</h4>
                </div>
              </article>

              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience