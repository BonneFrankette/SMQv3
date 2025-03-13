import React, { useRef, useEffect } from 'react'
import { Calendar, MapPin, Star } from 'lucide-react'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const eventbriteLink = "https://www.eventbrite.com/e/salon-maconnique-du-quebec-2025-tickets-1276560750569?aff=oddtdtcreator";

  // This effect will handle video playback when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Fallback to poster image if autoplay fails
      });
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="absolute object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1582653291997-079b4f1c9696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="/videos/conferencefm.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75"></div>
      </div>

      <div className="container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full">
            <span className="text-blue-300 font-medium flex items-center">
              <Star className="w-4 h-4 mr-2 text-blue-300" />
              Événement inédit en Amérique du Nord
            </span>
          </div>
          
          {/* Ajout de padding horizontal pour éviter la troncature du texte */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-playfair px-2">
            Salon Maçonnique du Québec
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-raleway">
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
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p className="text-white text-justify font-raleway">
              Pour la première fois sur le continent américain, un rassemblement maçonnique d'envergure dévoile les trésors intellectuels de la franc-maçonnerie à travers ses plus brillants auteurs et conférenciers. Une confluence unique des courants de pensée maçonniques du Québec, du Canada, de France et d'Europe, réunis sous les colonnes de la fraternité à Montréal.
            </p>
          </div>
          
          {/* Nouveau bouton d'inscription */}
          <div className="mb-24">
            <a 
              href="#registration" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-raleway"
            >
              S'inscrire maintenant
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
