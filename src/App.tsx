import React from 'react'
import Navbar from './components/Navbar'
import HeroWithComponent from './components/HeroWithComponent'
import About from './components/About'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Venue from './components/Venue'
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
      <Venue />
      <Registration />
      <Footer />
    </div>
  )
}

export default App
