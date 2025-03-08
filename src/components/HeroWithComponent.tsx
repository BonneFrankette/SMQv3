import React from 'react'
import VideoBackground from './VideoBackground'
import { Calendar, MapPin, Star } from 'lucide-react'

const HeroWithComponent = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden w-full"
    >
      {/* Video Background Component */}
      <VideoBackground 
        videoSrc="http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/conferencefm.webm" 
        posterSrc="https://images.unsplash.com/photo-1582653291997-079b4f1c9696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full">
            <span className="text-blue-300 font-medium flex items-center">
              <Star className="w-4 h-4 mr-2 text-blue-300" />
              Événement inédit en Amérique du Nord
            </span>
          </div>
          
          {/* Titre avec padding augmenté et classe spéciale pour éviter la troncature */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              Salon Maçonnique du Québec
            </span>
          </h1>
          <p className="font-raleway text-xl md:text-2xl mb-8 text-blue-100">
            La première agora nord-américaine où la sagesse maçonnique prend vie à travers ses auteurs et conférenciers d'exception
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-white">1er Juin 2025</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-blue-400 mx-2"></div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-white">Centre Saint-Pierre, Montréal</span>
            </div>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p className="text-white text-justify font-raleway">
              Pour la première fois sur le continent américain, un rassemblement maçonnique d'envergure dévoile les trésors intellectuels de la franc-maçonnerie à travers ses plus brillants auteurs et conférenciers. Une confluence unique des courants de pensée maçonniques du Québec, du Canada, de France et d'Europe, réunis sous les colonnes de la fraternité à Montréal.
            </p>
          </div>
          
          {/* Augmentation de la marge inférieure pour assurer la visibilité des boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <a href="#registration" className="btn btn-gradient font-raleway">
              S'inscrire maintenant
            </a>
            <a href="#about" className="btn btn-secondary font-raleway">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#0f172a" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroWithComponent
