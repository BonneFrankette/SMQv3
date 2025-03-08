import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-white font-playfair">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">SMQ</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-colors font-raleway">À propos</a>
            <a href="#schedule" className="text-white hover:text-blue-400 transition-colors font-raleway">Programme</a>
            <a href="#speakers" className="text-white hover:text-blue-400 transition-colors font-raleway">Conférenciers et Auteurs</a>
            <a href="#venue" className="text-white hover:text-blue-400 transition-colors font-raleway">Lieu</a>
            <a href="#registration" className="btn btn-sm btn-gradient font-raleway">S'inscrire</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-800 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="text-white hover:text-blue-400 transition-colors font-raleway"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#schedule" 
                className="text-white hover:text-blue-400 transition-colors font-raleway"
                onClick={() => setIsOpen(false)}
              >
                Programme
              </a>
              <a 
                href="#speakers" 
                className="text-white hover:text-blue-400 transition-colors font-raleway"
                onClick={() => setIsOpen(false)}
              >
                Conférenciers et Auteurs
              </a>
              <a 
                href="#venue" 
                className="text-white hover:text-blue-400 transition-colors font-raleway"
                onClick={() => setIsOpen(false)}
              >
                Lieu
              </a>
              <a 
                href="#registration" 
                className="btn btn-sm btn-gradient inline-block text-center font-raleway"
                onClick={() => setIsOpen(false)}
              >
                S'inscrire
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
