import React from 'react'

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              Programme de l'événement
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Une journée complète dédiée à l'exploration de la pensée maçonnique
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600/30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 0 - Accueil */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Accueil des participants</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Enregistrement et café de bienvenue</p>
                  <p className="text-gray-400 font-raleway">Équipe d'accueil</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">9:00 - 9:30</span>
                  </div>
                </div>
              </div>
              
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Regard croisé sur la franc-maçonnerie</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Introduction générale à la maçonnerie</p>
                  <p className="text-gray-400 font-raleway">Alain-Noël Dubart et Marie-Thérèse Besson</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">9:30 - 10:30</span>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">11:00 - 12:00</span>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">La franc-maçonnerie et le vivant</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Perspectives écologiques et philosophiques</p>
                  <p className="text-gray-400 font-raleway">Yves Vaillancourt</p>
                </div>
              </div>
              
              {/* Item 3 - Pause dîner */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Pause dîner</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Bistro Sofia</p>
                  <p className="text-gray-400 font-raleway">Repas et réseautage</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">12:00 - 13:00</span>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">13:30 - 14:00</span>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Les couleurs de l'alchimie</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Symbolisme et transformation</p>
                  <p className="text-gray-400 font-raleway">Damien Charitat</p>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Pause café</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Espace détente</p>
                  <p className="text-gray-400 font-raleway">Rafraîchissements et discussions</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">14:30 - 15:00</span>
                  </div>
                </div>
              </div>
              
              {/* Item 6 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">15:30 - 16:30</span>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Tolkien chez les francs-maçons</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Mythologie et initiation</p>
                  <p className="text-gray-400 font-raleway">Alain-Noël Dubart</p>
                </div>
              </div>
              
              {/* Item 7 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">Clôture officielle</h3>
                  <p className="text-blue-300 mb-1 font-raleway">Synthèse et perspectives</p>
                  <p className="text-gray-400 font-raleway">Comité organisateur</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-dark-900 z-10"></div>
                </div>
                <div className="flex-1 md:pl-10 order-3">
                  <div className="bg-dark-700 p-4 rounded-lg shadow-lg">
                    <span className="text-xl font-semibold text-white font-raleway">16:30 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
