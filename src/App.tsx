import React from 'react'
import Navbar from './components/Navbar'
import HeroWithComponent from './components/HeroWithComponent'
import About from './components/About'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import Obediences from './components/Obediences'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <HeroWithComponent />
        <About />
        <Speakers />
        <Schedule />
        <Obediences />
        <Venue />
        <Registration />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

export default App
