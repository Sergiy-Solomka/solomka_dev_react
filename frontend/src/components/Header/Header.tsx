import React, { useEffect, useState } from 'react'
import './_header.scss'
import '../../sass/_variables.scss'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className='header-logo'>
          <div className='header-logo-bg'>
            <span className='header-logo-bg-first-splash'>/</span>
            <span className='header-logo-bg-first-letter'>S</span>
            <span className='header-logo-bg-second-letter'>S</span>
            <span className='header-logo-bg-second-splash'>/</span>
          </div>
        </div>
        <div className='header-menu'>
          <div className='header-menu-section'>
            <span className='header-menu-item menu-btn'>
              <a
                href='/#'
                onClick={(event) => {
                  event.preventDefault()
                  const element = document.getElementById('home')
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Home &gt;
              </a>
            </span>
            <span className='header-menu-item menu-btn'>
              <a
                href='/#'
                onClick={(event) => {
                  event.preventDefault()
                  const element = document.getElementById('experience')
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Experience &gt;{' '}
              </a>
            </span>
          </div>
          <div className='header-menu-section'>
            <span className='header-menu-item menu-btn'>
              <a
                href='/#'
                onClick={(event) => {
                  event.preventDefault()
                  const element = document.getElementById('projects')
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                My projects &gt;
              </a>
            </span>
            <span className='header-menu-item menu-btn'>
              <a
                href='/#'
                onClick={(event) => {
                  event.preventDefault()
                  const element = document.getElementById('technologies')
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Technologies &gt;
              </a>
            </span>
          </div>
          <div className='header-menu-section'>
            <span className='header-menu-item menu-btn'>
              <a
                href='/#'
                onClick={(event) => {
                  event.preventDefault()
                  const element = document.getElementById('certifications')
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Certifications &gt;
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
