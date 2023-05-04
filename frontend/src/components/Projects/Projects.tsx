import React from 'react'
import './_projects.scss'
const Projects = () => {
  return (
    <div>
      <main className='projects'>
        <div className='projects-head'>
          <div className='projects-head-bg'>
            <div className='projects-head-title'>
              <p className='projects-head-title-text'>Projects...</p>
            </div>
          </div>
        </div>

        <div className='block' id='projects'>
          <div className='block-project'>
            <div className='card-container'>
              <div className='card-wrapper'>
                <div className='card-banner-image booking-img'></div>
                <p className='block-project-text'>
                  Restaurant Bookings App. REACT, REACT-ROUTER, AXIOS, TYPESCRIPT,SASS,MATERIAL
                  DESIGN, BOOTSTRAP 5, NODEJS, EXPRESS, MONGODB.
                </p>
              </div>
              <div className='card-button-wrapper'>
                <button className='card-btn card-outline'>
                  <a
                    href='https://github.com/Sergiy-Solomka/react_restaurant_booking'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CODE
                  </a>
                </button>
                <button className='card-btn card-fill'>
                  <a
                    href='https://restaurant-bookings.solomka.dev/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='block-project'>
            <div className='card-container'>
              <div className='card-wrapper'>
                <div className='card-banner-image react-img'></div>
                <p className='block-project-text'>
                  React Web Page as part of course.
                  <br />
                  REACT,REACT-ROUTER, REDUX, SASS, TYPESCRIPT.
                </p>
              </div>
              <div className='card-button-wrapper'>
                <button className='card-btn card-outline'>
                  <a
                    href='https://github.com/Sergiy-Solomka/react_example_page'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CODE
                  </a>
                </button>
                <button className='card-btn card-fill'>
                  <a
                    href='https://react-example-page.solomka.dev/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='block-project'>
            <div className='card-container'>
              <div className='card-wrapper'>
                <div className='card-banner-image store-img'></div>
                <p className='block-project-text'>
                  Web store with shopping cart, items saved in to localstorage.
                  <br />
                  HTML5, SASS, TYPESCRIPT.
                </p>
              </div>
              <div className='card-button-wrapper'>
                <button className='card-btn card-outline'>
                  <a
                    href='https://github.com/Sergiy-Solomka/Web-Store'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CODE
                  </a>
                </button>
                <button className='card-btn card-fill'>
                  <a href='https://webstore-project.solomka.dev/' target='_blank' rel='noreferrer'>
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='block-project'>
            <div className='block-project'>
              <div className='card-container'>
                <div className='card-wrapper'>
                  <div className='card-banner-image figma-img'></div>
                  <p className='block-project-text'>
                    Figma community design , responsive site . <br />
                    HTML5 and SASS.
                  </p>
                </div>
                <div className='card-button-wrapper'>
                  <button className='card-btn card-outline'>
                    <a
                      href='https://github.com/Sergiy-Solomka/Figma-design-responsive-site'
                      target='_blank'
                      rel='noreferrer'
                    >
                      CODE
                    </a>
                  </button>
                  <button className='card-btn card-fill'>
                    <a href='https://figma-project.solomka.dev/' target='_blank' rel='noreferrer'>
                      DEMO
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='block-project'>
            <div className='card-container'>
              <div className='card-wrapper'>
                <div className='card-banner-image cash-img'></div>
                <p className='block-project-text'>
                  App to count money in the till <br />
                  Kotlin
                </p>
              </div>
              <div className='card-button-wrapper'>
                <button className='card-btn card-outline'>
                  <a
                    href='https://github.com/Sergiy-Solomka/Cash_Counter_Dark'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CODE
                  </a>
                </button>
                <button className='card-btn card-fill'>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.solomka.cash_counter_dark_1&pli=1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
