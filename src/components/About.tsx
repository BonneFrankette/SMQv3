import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 typography-fix">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block py-2">
              À propos du Salon Maçonnique
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Une rencontre exceptionnelle entre les traditions maçonniques d'Amérique du Nord et d'Europe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-playfair">Échanges Intellectuels</h3>
            <p className="text-gray-300 font-raleway">
              Des conférences et tables rondes animées par des auteurs et penseurs maçonniques de renom, explorant les traditions, symboles et philosophies qui unissent les maçons à travers le monde.
            </p>
          </div>
          
          <div className="bg-dark-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-playfair">Rencontres Fraternelles</h3>
            <p className="text-gray-300 font-raleway">
              Une occasion unique de tisser des liens avec des frères et sœurs de différentes obédiences et juridictions, dans un cadre convivial favorisant le dialogue et le partage d'expériences.
            </p>
          </div>
          
          <div className="bg-dark-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-playfair">Salon du Livre</h3>
            <p className="text-gray-300 font-raleway">
              Découvrez les dernières publications maçonniques, rencontrez les auteurs et enrichissez votre bibliothèque personnelle avec des ouvrages rares et des éditions spéciales dédicacées.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-300 mb-8 max-w-3xl mx-auto font-raleway">
            Le Salon Maçonnique du Québec est ouvert aux maçons de toutes obédiences ainsi qu'aux profanes curieux d'en apprendre davantage sur cette tradition séculaire.
          </p>
          <a href="#registration" className="btn btn-gradient font-raleway">
            Réserver votre place
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
