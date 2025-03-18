import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const eventbriteLink = "https://www.eventbrite.com/e/salon-maconnique-du-quebec-2025-tickets-1276560750569?aff=oddtdtcreator";
  const logoUrl = "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/logosmqv2.png";

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Détection de la section active
      const sections = ["about", "schedule", "speakers", "obediences", "venue", "sponsors", "registration"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-900/95 to-blue-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center group">
            <img 
              src={logoUrl} 
              alt="SMQ Logo" 
              className="h-12 w-auto transition-all duration-300 group-hover:brightness-125"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Menu items with enhanced hover effects */}
            <NavItem href="#about" label="À propos" isActive={activeSection === "about"} />
            <NavItem href="#schedule" label="Programme" isActive={activeSection === "schedule"} />
            <NavItem href="#speakers" label="Conférenciers et Auteurs" isActive={activeSection === "speakers"} />
            <NavItem href="#obediences" label="Obédiences" isActive={activeSection === "obediences"} />
            <NavItem href="#venue" label="Lieu" isActive={activeSection === "venue"} />
            <NavItem href="#sponsors" label="Commanditaires" isActive={activeSection === "sponsors"} />
            
            {/* Registration button with enhanced styling - Updated to link to registration section */}
            <a 
              href="#registration" 
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 border border-blue-400/30 font-raleway relative overflow-hidden group"
            >
              <span className="relative z-10">S'inscrire</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none bg-blue-600/30 p-2 rounded-lg hover:bg-blue-600/50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Enhanced with animations */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-blue-900/90 backdrop-blur-md rounded-b-xl shadow-xl overflow-hidden animate-slideDown border border-blue-800/30">
            <div className="flex flex-col space-y-3 px-4 py-5">
              <MobileNavItem href="#about" label="À propos" onClick={() => setIsOpen(false)} isActive={activeSection === "about"} />
              <MobileNavItem href="#schedule" label="Programme" onClick={() => setIsOpen(false)} isActive={activeSection === "schedule"} />
              <MobileNavItem href="#speakers" label="Conférenciers et Auteurs" onClick={() => setIsOpen(false)} isActive={activeSection === "speakers"} />
              <MobileNavItem href="#obediences" label="Obédiences" onClick={() => setIsOpen(false)} isActive={activeSection === "obediences"} />
              <MobileNavItem href="#venue" label="Lieu" onClick={() => setIsOpen(false)} isActive={activeSection === "venue"} />
              <MobileNavItem href="#sponsors" label="Commanditaires" onClick={() => setIsOpen(false)} isActive={activeSection === "sponsors"} />
              
              <div className="pt-3">
                <a 
                  href="#registration"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg text-center font-raleway border border-blue-400/30 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  S'inscrire
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Composant pour les éléments de navigation desktop avec effets améliorés
const NavItem = ({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => {
  return (
    <a 
      href={href} 
      className={`relative px-4 py-2.5 transition-all duration-300 font-raleway group ${
        isActive 
          ? 'text-blue-300 font-bold' 
          : 'text-white hover:text-blue-200 font-bold'
      }`}
    >
      <span className="relative z-10 nav-text-effect">{label}</span>
      
      {/* Ligne de soulignement animée */}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
      
      {/* Effet de surbrillance au survol */}
      <span 
        className={`absolute inset-0 bg-blue-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : ''
        }`}
      ></span>
    </a>
  );
};

// Composant pour les éléments de navigation mobile avec effets améliorés
const MobileNavItem = ({ href, label, onClick, isActive }: { href: string; label: string; onClick: () => void; isActive: boolean }) => {
  return (
    <a 
      href={href} 
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 font-raleway ${
        isActive 
          ? 'bg-blue-600/30 text-blue-200 font-bold' 
          : 'text-white hover:bg-blue-600/20 font-bold'
      }`}
      onClick={onClick}
    >
      <span className="nav-text-effect">{label}</span>
      <ChevronDown className={`h-4 w-4 ml-auto ${isActive ? 'text-blue-300' : 'text-blue-400'}`} />
    </a>
  );
};

export default Navbar
