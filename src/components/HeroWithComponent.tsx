import React from 'react'
import { Calendar, MapPin, Star } from 'lucide-react'
import ImageSlider from './ImageSlider'

const HeroWithComponent = () => {
  const eventbriteLink = "https://www.eventbrite.com/e/salon-maconnique-du-quebec-2025-tickets-1276560750569?aff=oddtdtcreator";
  
  // Images pour le slider avec les nouvelles URLs
  const sliderImages = [
    "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/slide1.jpg",
    "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/slide2.jpg",
    "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/slide3.jpg",
    "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/slide4.jpg"
  ];

  return (
    <section id="hero" className="flex flex-col w-full pt-16">
      {/* Slider d'images en pleine largeur avec espace sur les côtés */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-slate-900">
        <ImageSlider images={sliderImages} interval={6000} />
      </div>
      
      {/* Contenu textuel en dessous du slider */}
      <div className="w-full bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-600/40 backdrop-blur-sm rounded-full">
              <span className="text-blue-100 font-medium flex items-center justify-center">
                <Star className="w-4 h-4 mr-2 text-blue-300" />
                Événement inédit en Amérique du Nord
              </span>
            </div>
            
            {/* Titre avec effet de texte amélioré */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4 typography-fix">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 inline-block py-2">
                Salon Maçonnique du Québec
              </span>
            </h1>
            
            <p className="font-raleway text-xl md:text-2xl mb-8 text-blue-100">
              La première agora nord-américaine où la sagesse maçonnique prend vie à travers ses auteurs et conférenciers d'exception
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-white">1er Juin 2025</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-blue-400 mx-2"></div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-white">Centre Saint-Pierre, Montréal</span>
              </div>
            </div>
            
            {/* Boîte de description */}
            <div className="bg-slate-800 p-6 rounded-lg mb-8 border border-blue-900/30 max-w-3xl mx-auto">
              <p className="text-white text-justify font-raleway">
                Pour la première fois sur le continent américain, un rassemblement maçonnique d'envergure dévoile les trésors intellectuels de la franc-maçonnerie à travers ses plus brillants auteurs et conférenciers. Une confluence unique des courants de pensée maçonniques du Québec, du Canada, de France et d'Europe, réunis sous les colonnes de la fraternité à Montréal.
              </p>
            </div>
            
            {/* Bouton d'inscription */}
            <div className="mb-8">
              <a 
                href="#registration" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 font-raleway border border-blue-400/30"
              >
                S'inscrire maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithComponent
