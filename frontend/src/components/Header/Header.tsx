import React from 'react'
import './_header.scss'
import '../../sass/_variables.scss'

const Header = () => {
  return (
    <div>
      {' '}
      <header className='header'>
        <div className='header-logo'>
          <div className='header-logo-bg'>
            <span className='header-logo-bg-first-splash'>/</span>
            <span className='header-logo-bg-first-letter'>S</span>
            <span className='header-logo-bg-second-letter'>S</span>
            <span className='header-logo-bg-second-splash'>/</span>
          </div>
        </div>
        <div className='header-menu'>
          <span className='header-menu-item menu-btn'>
            <a href='/#'>Home &gt;</a>
          </span>
          <span className='header-menu-item menu-btn'>
            <a href='/#experience'>Experience &gt; </a>
          </span>
          <span className='header-menu-item menu-btn'>
            <a href='/#projects'> My projects &gt; </a>
          </span>
          <span className='header-menu-item menu-btn'>
            <a href='/#technologies'>Technologies &gt; </a>
          </span>
          <span className='header-menu-item menu-btn'>
            <a href='/#certificacions'>Certifications &gt; </a>
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header
