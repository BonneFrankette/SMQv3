import React from 'react'

const Obediences = () => {
  // Données des obédiences
  const obediences = [
    {
      id: 1,
      name: "Grande Loge ANI du Canada",
      logo: "https://glanicanada.com/wp-content/uploads/2019/03/GLANIweb.png",
      description: "La Grande Loge ANI du Canada est une fédération de loges bleues, membre du COMAM et CLIPSAS depuis 2016. Elle exerce juridiction sur les trois grades traditionnels et se définit comme une fraternité de Maçons libres et de Loges souveraines, toutes mixtes ou pouvant être masculines ou féminines, basée sur la recherche de la vérité et la pratique de la solidarité.",
      website: "https://glanicanada.com/"
    },
    {
      id: 2,
      name: "Grand Orient du Québec",
      logo: "https://www.godq.org/wp-content/uploads/cropped-cropped-cropped-GODQ_Logo_Couleur.png",
      description: "Fondé le 4 août 2012, le Grand Orient du Québec est une obédience maçonnique québécoise dont la laïcité et la mixité sont les pierres d'angle. Ce qui la distingue est sa volonté d'extériorisation et de prise en compte des enjeux contemporains dans une perspective résolument progressiste, perpétuant ainsi l'héritage des loges maçonniques progressistes au Québec.",
      website: "https://www.godq.org/"
    }
  ];

  return (
    <section id="obediences" className="py-20 bg-dark-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              Obédiences Participantes
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Le Salon Maçonnique du Québec est fier d'accueillir ces obédiences maçonniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {obediences.map((obedience) => (
            <div 
              key={obedience.id} 
              className="bg-dark-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="p-8">
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src={obedience.logo} 
                    alt={`Logo ${obedience.name}`} 
                    className="h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-white font-playfair">{obedience.name}</h3>
                <p className="text-gray-300 mb-6 text-center font-raleway leading-relaxed">{obedience.description}</p>
                <div className="text-center">
                  <a 
                    href={obedience.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-raleway"
                  >
                    Visiter le site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-300 mb-8 max-w-3xl mx-auto font-raleway">
            D'autres obédiences et juridictions maçonniques seront annoncées prochainement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Obediences
