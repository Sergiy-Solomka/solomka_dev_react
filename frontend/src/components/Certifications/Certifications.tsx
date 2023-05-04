import React from 'react'
import './_certificacions.scss'
import '../ContactMe/_contact.scss'
import cer_tweb from '../../img/cert-web.png'
import cert_react from '../../img/cert-react.png'
import plant from '../../img/plant.png'
import cert_js from '../../img/cert-js.png'
import plant_revers from '../../img/plant-revers.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import telegram from '../../img/telegram.png'
import watsapp from '../../img/watsapp.png'
import email from '../../img/email.png'
import curriculum from '../../img/curriculum-vitae-y-cv.png'

const Certifications = () => {
  return (
    <div>
      <main className='certificacions' id='certifications'>
        <div className='certificacions-pics'>
          <p className='certificacions-pics-title'>Certificacions...</p>
          <img alt='' className='certificacions-pics-web' src={cer_tweb} />
          <img alt='' className='certificacions-pics-react' src={cert_react} />
          <img alt='' className='certificacions-pics-plant' src={plant} />
          <img alt='' className='certificacions-pics-js' src={cert_js} />
        </div>
        <div className='certificacions-bg'>
          <img alt='' className='certificacions-bg-plant' src={plant_revers} />
          <div className='contact'>
            <div className='contact-title'>
              <p className='contact-title-text'>Contact Me...</p>
            </div>
            <div className='contact-links'>
              <a
                href='https://www.dropbox.com/s/o9vyh3117a2y05c/Junior-React-CV-EN.pdf?dl=1'
                target='_blank'
                rel='noreferrer'
              >
                <img className='menu-bg-links-img' src={curriculum} alt='cv' />
              </a>
              <a
                href='https://www.linkedin.com/in/sergiy-solomka/'
                target='_blank'
                rel='noreferrer'
              >
                <img className='contact-links-img' src={linkedin} alt='linkedin' />
              </a>
              <a href='https://github.com/Sergiy-Solomka' target='_blank' rel='noreferrer'>
                <img className='contact-links-img' src={github} alt='github' />
              </a>
              <a href='https://t.me/Sergiy_Solomka' target='_blank' rel='noreferrer'>
                <img className='contact-links-img' src={telegram} alt='telegram' />
              </a>
              <a href='https://wa.me/34617262297' target='_blank' rel='noreferrer'>
                <img className='contact-links-img' src={watsapp} alt='watsapp' />
              </a>

              <a href='mailto:ssolomka@gmail.com'>
                <img className='contact-links-img' src={email} alt='email' />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Certifications
