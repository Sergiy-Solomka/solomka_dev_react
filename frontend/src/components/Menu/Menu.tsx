import React from 'react'
import './_menu.scss'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import telegram from '../../img/telegram.png'
import watsapp from '../../img/watsapp.png'
import email from '../../img/email.png'
import curriculum from '../../img/curriculum-vitae-y-cv.png'

const Menu = () => {
  return (
    <div>
      <nav className='menu' id='home'>
        <div className='menu-bg'>
          <div className='menu-bg-links'>
            <a
              href='https://www.dropbox.com/s/o9vyh3117a2y05c/Junior-React-CV-EN.pdf?dl=1'
              target='_blank'
              rel='noreferrer'
            >
              <img className='menu-bg-links-img' src={curriculum} alt='cv' />
            </a>
            <a href='https://www.linkedin.com/in/sergiy-solomka/' target='_blank' rel='noreferrer'>
              <img className='menu-bg-links-img' src={linkedin} alt='linkedin' />
            </a>
            <a href='https://github.com/Sergiy-Solomka' target='_blank' rel='noreferrer'>
              <img className='menu-bg-links-img' src={github} alt='github' />
            </a>

            <a href='https://t.me/Sergiy_Solomka' target='_blank' rel='noreferrer'>
              <img className='menu-bg-links-img' src={telegram} alt='telegram' />
            </a>

            <a href='https://wa.me/34617262297' target='_blank' rel='noreferrer'>
              <img className='menu-bg-links-img' src={watsapp} alt='watsapp' />
            </a>

            <a href='mailto:ssolomka@gmail.com'>
              <img className='menu-bg-links-img' src={email} alt='email' />
            </a>
          </div>
          <div className='menu-bg-title'>
            <span className='menu-bg-title-sname'>SOLOMKA</span>
            <span className='menu-bg-title-fname'>Sergiy</span>
            <span className='menu-bg-title-description-left'>FRONT-END REACT DEVELOPER...</span>
          </div>
          <div className='menu-bg-lenguages'>
            <span className='menu-bg-lenguages-text'>ENGLISH</span>
            <span className='menu-bg-lenguages-text'>SPANISH</span>
            <span className='menu-bg-lenguages-text'>UKRANIAN</span>
            <span className='menu-bg-lenguages-text'>RUSSIAN</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
