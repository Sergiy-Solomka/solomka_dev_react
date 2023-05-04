import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Technologies from '../Technologies/Technologies'
import Certifications from '../Certifications/Certifications'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <Experience />
      <Projects />
      <Technologies />
      <Certifications />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
