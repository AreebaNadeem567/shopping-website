
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Shop from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <main>
    <Navbar />
    <Hero />
    <About />
    <Shop />
    <Contact />
    <Footer /> 
    </main>
  )
}

export default Home