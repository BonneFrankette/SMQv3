import React from 'react'

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold mb-6 text-blue-500">
            Programme de l'événement
          </h2>
          <p className="text-xl text-gray-300 font-raleway">
            Une journée complète dédiée à l'exploration de la pensée maçonnique
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-1/2 z-10"></div>
          
          {/* Timeline items */}
          {/* Item 1 - Accueil */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Accueil des participants</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Enregistrement et café de bienvenue</p>
              <p className="text-gray-400 font-raleway">Équipe d'accueil</p>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">9:00 - 9:30</span>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">9:30 - 10:30</span>
              </div>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Regard croisé sur la franc-maçonnerie</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Introduction générale à la maçonnerie</p>
              <p className="text-gray-400 font-raleway">Alain-Noël Dubart et Marie-Thérèse Besson</p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Pause café et visite des stands</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Moment d'échange et de découverte</p>
              <p className="text-gray-400 font-raleway">Espace exposition</p>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">10:30 - 11:00</span>
              </div>
            </div>
          </div>
          
          {/* Item 4 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">11:00 - 12:00</span>
              </div>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">La Franc-Maçonnerie et le vivant</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Conférence par Yves Vaillancourt</p>
              <p className="text-gray-400 font-raleway">Yves Vaillancourt</p>
            </div>
          </div>
          
          {/* Item 5 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Dîner et réseautage</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Repas au Bistro Sofia</p>
              <p className="text-gray-400 font-raleway">Espace restauration</p>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">12:00 - 13:00</span>
              </div>
            </div>
          </div>
          
          {/* Item 6 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">13:00 - 14:00</span>
              </div>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Les couleurs de l'alchimie</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Conférence par Damien Charitat</p>
              <p className="text-gray-400 font-raleway">Damien Charitat</p>
            </div>
          </div>
          
          {/* Item 7 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Pause café et séance de dédicaces</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Rencontre avec les auteurs</p>
              <p className="text-gray-400 font-raleway">Espace librairie</p>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">14:00 - 14:30</span>
              </div>
            </div>
          </div>
          
          {/* Item 8 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-16 text-right">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">14:30 - 15:30</span>
              </div>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Tolkien chez les Franc-Maçons</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Conférence par Alain-Noël Dubart</p>
              <p className="text-gray-400 font-raleway">Alain-Noël Dubart</p>
            </div>
          </div>
          
          {/* Item 9 */}
          <div className="flex items-center relative">
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Clôture et verre de l'amitié</h3>
              <p className="text-blue-500 mb-2 font-raleway text-xl">Synthèse et échanges informels</p>
              <p className="text-gray-400 font-raleway">Comité d'organisation</p>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-20"></div>
            
            <div className="w-1/2 pl-16">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <span className="text-3xl font-bold text-white font-playfair">15:30 - 16:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
