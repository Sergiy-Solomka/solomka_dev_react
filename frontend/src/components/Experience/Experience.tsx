import React from 'react'
import './_experience.scss'

const Experience = () => {
  return (
    <div>
      <main className='experience' id='experience'>
        <div className='experience-block-title'>
          <p className='experience-block-title-name'>Experience...</p>
        </div>
        <div className='experience-block-work'>
          <div className='experience-work'>
            <p className='experience-position'>Junior React Developer</p>
            <p className='experience-buisnes-name'>
              NGO `&quot;`Treasure house of projects`&quot;` Ukraine,(Remote)
            </p>
            <p className='experience-job-description'>
              In charge of implementing new functions and tabs.
            </p>
            <p className='experience-dates'>March, 2023 - Present</p>
          </div>
          <div className='experience-work'>
            <p className='experience-position'>Co-owner /Manager</p>
            <p className='experience-buisnes-name'>Restaurante Christopher Torrevieja, Alicante</p>
            <p className='experience-job-description'>
              Supervise and co-ordinate the entire front of house team.
            </p>
            <p className='experience-dates'>February, 2007 - February, 2023</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Experience
