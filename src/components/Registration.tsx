import React from 'react'
import { Check } from 'lucide-react'

const Registration = () => {
  const eventbriteLink = "https://www.eventbrite.com/e/salon-maconnique-du-quebec-2025-tickets-1276560750569?aff=oddtdtcreator";

  return (
    <section id="registration" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Inscription
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Réservez votre place pour cet événement exceptionnel
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-700 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Salon Maçonnique du Québec</h3>
              <p className="text-white font-raleway">1er Juin 2025 - Centre Saint-Pierre, Montréal</p>
            </div>
            
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white font-playfair">$10</span>
                  <span className="text-gray-300 ml-2 font-raleway">CAD</span>
                  <p className="text-gray-400 mt-1 font-raleway">par personne</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 font-raleway">Accès à toutes les conférences et tables rondes</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 font-raleway">Visite du salon du livre maçonnique</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 font-raleway">Pauses café et rafraîchissements</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 font-raleway">Rencontres avec les auteurs et dédicaces</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 font-raleway">Documentation et programme de l'événement</p>
                </div>
              </div>
              
              <div className="bg-dark-600 p-4 rounded-lg mb-8">
                <p className="text-gray-300 text-sm font-raleway">
                  <span className="font-semibold text-blue-400">Note:</span> Le dîner n'est pas inclus dans le prix d'entrée. Une réservation de groupe est prévue au Bistro Sofia (à proximité du Centre Saint-Pierre). Le Bistro Sofia sera sur place pour la nourriture. Les participants devront payer pour leur repas (10$ par personne). Merci d'indiquer votre participation lors de l'inscription.
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href={eventbriteLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-gradient inline-block font-raleway"
                >
                  S'inscrire maintenant
                </a>
                <p className="text-gray-400 mt-4 text-sm font-raleway">
                  Pour toute question, contactez-nous à <a href="mailto:contact@salonmaconniquequebec.org" className="text-blue-400 hover:underline">contact@salonmaconniquequebec.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
