import React from 'react'
import Navbar from './components/Navbar'
import HeroWithComponent from './components/HeroWithComponent'
import About from './components/About'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Obediences from './components/Obediences'
import Venue from './components/Venue'
import Sponsors from './components/Sponsors'
import Registration from './components/Registration'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-800 text-white w-full">
      <Navbar />
      <HeroWithComponent />
      <About />
      <Schedule />
      <Speakers />
      <Obediences />
      <Venue />
      <Sponsors />
      <Registration />
      <Footer />
    </div>
  )
}

export default App
