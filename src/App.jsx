import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

// import Lenis from '@studio-freight/lenis'

//   useEffect(() => {
//     const lenis = new Lenis()

//     function raf(time) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
//   }, [])


function App() {

  return (
    <div className='App'>
      <Nav />
      <Main />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
