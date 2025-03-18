import React from 'react'

const Sponsors = () => {
  // Forfaits de commandite
  const sponsorshipPackages = [
    {
      id: 1,
      tier: "Platine",
      price: "500$",
      color: "from-gray-200 to-gray-400",
      benefits: [
        "Logo en grande taille sur la page d'accueil du site web",
        "Logo sur tous les supports imprimés (affiches, programmes, etc.)",
        "Mention spéciale lors des discours d'ouverture et de clôture",
        "Espace d'exposition premium (table de 6 pieds avec emplacement privilégié)",
        "4 entrées gratuites pour l'événement",
        "Publication dédiée sur nos réseaux sociaux",
        "Bannière exclusive dans la salle principale"
      ]
    },
    {
      id: 2,
      tier: "Or",
      price: "300$",
      color: "from-yellow-300 to-yellow-500",
      benefits: [
        "Logo en taille moyenne sur le site web",
        "Logo sur les programmes imprimés",
        "Mention lors du discours d'ouverture",
        "Espace d'exposition standard (table de 6 pieds)",
        "2 entrées gratuites pour l'événement",
        "Mention dans une publication groupée sur nos réseaux sociaux"
      ]
    },
    {
      id: 3,
      tier: "Argent",
      price: "200$",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Logo en petite taille sur le site web",
        "Nom mentionné dans le programme imprimé",
        "Espace partagé d'exposition (demi-table)",
        "1 entrée gratuite pour l'événement"
      ]
    },
    {
      id: 4,
      tier: "Bronze",
      price: "100$",
      color: "from-yellow-600 to-yellow-800",
      benefits: [
        "Nom mentionné sur le site web",
        "Nom mentionné dans le programme imprimé",
        "Possibilité de distribuer des dépliants promotionnels"
      ]
    }
  ];

  // Liste des commanditaires actuels
  const currentSponsors = [
    {
      id: 1,
      name: "Consultants BGH",
      tier: "Platine",
      logo: "https://static.wixstatic.com/media/c26734_f8c80cd304e8467187b0c43a7ccf4250~mv2.png/v1/fill/w_302,h_302,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c26734_f8c80cd304e8467187b0c43a7ccf4250~mv2.png", // Logo de Consultants BGH mis à jour
      website: "https://www.consultantsbgh.com/",
      description: "Consultants BGH est une société de conseil établie à Montréal, spécialisée dans l'optimisation des centres de contact et l'intelligence d'affaires. Notre but est d'aider les centres de contact, quels que soient leur taille, à améliorer leur efficacité opérationnelle. Nous avons l'expertise pour gérer divers aspects de la gestion de centres de contact, incluant la gestion des appels, la planification des effectifs, la formation du personnel, et la réduction de l'absentéisme. Par ailleurs, nous offrons des solutions avancées dans le domaine de l'intelligence d'affaires, permettant le suivi efficace des indicateurs de performance clés pour maximiser la satisfaction de la clientèle."
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        {/* Commanditaires actuels */}
        {currentSponsors.length > 0 && (
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 typography-fix">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
                Nos Commanditaires
              </span>
            </h2>
            
            {/* Commanditaires Platine */}
            {currentSponsors.filter(sponsor => sponsor.tier === "Platine").length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 font-playfair">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                    Commanditaires Platine
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {currentSponsors
                    .filter(sponsor => sponsor.tier === "Platine")
                    .map(sponsor => (
                      <div key={sponsor.id} className="bg-dark-700 rounded-lg p-6 shadow-lg border border-gray-300/20 transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                            <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                              <img 
                                src={sponsor.logo} 
                                alt={`${sponsor.name} logo`} 
                                className="h-32 w-auto object-contain"
                              />
                            </a>
                          </div>
                          <div className="md:w-2/3 md:pl-8">
                            <h4 className="text-xl font-bold text-white mb-3 font-playfair">{sponsor.name}</h4>
                            <p className="text-gray-300 font-raleway text-sm mb-4 text-justify">{sponsor.description}</p>
                            <a 
                              href={sponsor.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-raleway text-sm"
                            >
                              Visiter le site web
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {/* Autres niveaux de commanditaires (Or, Argent, Bronze) - à ajouter au besoin */}
          </div>
        )}
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              Devenez Commanditaire
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-raleway mb-4">
            Soutenez le Salon Maçonnique du Québec et gagnez en visibilité auprès d'un public engagé et influent
          </p>
          <p className="text-md text-gray-400 font-raleway">
            Choisissez le forfait qui correspond le mieux à vos objectifs et à votre budget
          </p>
        </div>
        
        {/* Forfaits de commandite */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {sponsorshipPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-dark-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 border border-opacity-20"
              style={{ borderColor: pkg.tier === "Platine" ? "#e5e7eb" : pkg.tier === "Or" ? "#fcd34d" : pkg.tier === "Argent" ? "#9ca3af" : "#92400e" }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-2 font-playfair">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}>
                    {pkg.tier}
                  </span>
                </h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300 font-raleway text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a 
                    href={`mailto:sponsors@salonmaconniquequebec.org?subject=Commandite%20${pkg.tier}&body=Bonjour,%0A%0AJe%20suis%20intéressé(e)%20par%20le%20forfait%20de%20commandite%20${pkg.tier}%20à%20${pkg.price}.%0A%0AMerci%20de%20me%20contacter%20pour%20plus%20d'informations.`} 
                    className={`inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-raleway w-full text-center`}
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Avantages supplémentaires */}
        <div className="max-w-4xl mx-auto bg-dark-700 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center font-playfair">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Pourquoi devenir commanditaire?
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/20 mr-4">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white font-playfair">Réseau Influent</h4>
                <p className="text-gray-300 font-raleway text-sm">Accédez à un réseau de professionnels, d'intellectuels et de leaders d'opinion issus de divers horizons.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/20 mr-4">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white font-playfair">Visibilité Ciblée</h4>
                <p className="text-gray-300 font-raleway text-sm">Présentez votre marque à un public engagé, curieux et ouvert aux nouvelles idées et services.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/20 mr-4">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white font-playfair">Opportunités d'Affaires</h4>
                <p className="text-gray-300 font-raleway text-sm">Développez de nouvelles relations d'affaires et explorez des collaborations potentielles avec d'autres participants.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/20 mr-4">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white font-playfair">Soutien Culturel</h4>
                <p className="text-gray-300 font-raleway text-sm">Contribuez à la promotion de la culture, de l'histoire et des valeurs maçonniques au Québec.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Appel à l'action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-300 mb-8 max-w-3xl mx-auto font-raleway">
            Vous avez des questions sur nos forfaits de commandite ou souhaitez une offre personnalisée? N'hésitez pas à nous contacter.
          </p>
          <a 
            href="mailto:sponsors@salonmaconniquequebec.org?subject=Renseignements%20commandites" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 transition-colors font-raleway text-lg shadow-lg"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
