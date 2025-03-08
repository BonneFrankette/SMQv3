import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import VenueMap from './VenueMap'

const Venue = () => {
  return (
    <section id="venue" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              Lieu de l'événement
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Un cadre historique au cœur de Montréal
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-dark-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Centre Saint-Pierre</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 font-raleway">
                  1212 Rue Panet<br />
                  Montréal, QC H2L 2Y7<br />
                  Canada
                </p>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 font-raleway">
                  Dimanche 1er Juin 2025<br />
                  9:00 - 17:00
                </p>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 font-raleway">
                  +1 (514) 524-3561
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-bold text-white mb-3 font-playfair">Comment s'y rendre</h4>
              <ul className="space-y-2 text-gray-300 list-disc list-inside font-raleway">
                <li>Métro: Station Beaudry (Ligne Verte)</li>
                <li>Bus: Lignes 15, 30, 125</li>
                <li>Stationnement disponible à proximité</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-bold text-white mb-3 font-playfair">Hébergement</h4>
              <p className="text-gray-300 mb-3 font-raleway">
                Plusieurs options d'hébergement sont disponibles à proximité du lieu de l'événement. Nous recommandons:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside font-raleway">
                <li>Hôtel Bonaventure Montréal</li>
                <li>Le Dauphin Montréal Centre-Ville</li>
                <li>Hôtel Faubourg Montréal</li>
              </ul>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <VenueMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
