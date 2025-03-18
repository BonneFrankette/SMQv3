import React from 'react'

const Speakers = () => {
  const speakers = [
    {
      name: "Franco Huard",
      title: "Grand Maître, Grande Loge ANI du Canada",
      bio: "Figure engagée de la Franc-Maçonnerie, Grand Chancelier du Suprême Conseil du Québec et actif au sein du CLIPSAS. Auteur de « Lucifer et la Franc-Maçonnerie : Anatomie d'un mythe » et animateur de l'émission maçonnique « Sous le Bandeau ».",
      image: "http://roseraiedesphilosophes.ca/wp-content/uploads/2023/02/Franco-Huard-Souriant.jpg",
      position: "custom-position-face"
    },
    {
      name: "Yves Vaillancourt",
      title: "Passé Grand Maître, GODQ",
      bio: "Fondateur du Grand Orient du Québec et du Suprême Conseil du Québec. Son livre « Souviens-toi que tu es vivant » est un essai critique sur la pertinence des principes et rituels maçonniques face aux enjeux du 21ème siècle.",
      image: "http://roseraiedesphilosophes.ca/wp-content/uploads/2023/02/yves-vaillancourt-souriant.jpg",
      position: "custom-position-face"
    },
    {
      name: "Marie-Thérèse Besson",
      title: "Ancienne Grande Maîtresse, GLFF",
      bio: "Franc-Maçonne depuis 1979, Marie-Thérèse Besson a marqué l'histoire de la Grande Loge Féminine de France en tant que Grande Maîtresse. Sage-femme de formation et ingénieure en management de la santé.",
      image: "https://images.lindependant.fr/api/v1/images/view/6789071f37f9f60e7d2cd72d/full/image.jpg?v=9",
      position: "custom-position-center"
    },
    {
      name: "Alain-Noël Dubart",
      title: "Ancien Grand Maître, GLDF",
      bio: "Chirurgien orthopédiste de profession et Franc-Maçon depuis 1984, Alain-Noël Dubart a marqué l'histoire de la Grande Loge de France en tant que Grand Maître. Président de multiples associations culturelles maçonniques.",
      image: "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-09-at-15.34.49-1.jpeg",
      position: "custom-position-face"
    },
    {
      name: "Damien Charitat",
      title: "Co-Président, SCRCF",
      bio: "Co-Président du Suprême Conseil des Rites Confédérés de France (SCRCF), Damien Charitat est un chercheur et praticien reconnu des traditions initiatiques occidentales. Héritier des filiations Ambelain-Leterme & Font.",
      image: "http://roseraiedesphilosophes.ca/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-02-at-17.27.38.jpeg",
      position: "custom-position-face"
    },
    {
      name: "Jacques G. Ruelland",
      title: "Historien et Philosophe",
      bio: "Historien, philosophe et professeur émérite à l'Université de Montréal, Jacques G. Ruelland est spécialiste de George Orwell et critique des pseudosciences. Membre de la Grande Loge du Québec depuis 1994.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Jacques-g-ruelland_7-mars-2006.jpg",
      position: "custom-position-top"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Conférenciers et Auteurs
          </h2>
          <p className="text-lg text-gray-300 font-raleway">
            Des experts reconnus dans le monde maçonnique
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card bg-dark-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-blue-500/20">
              <div className="speaker-image-container h-64 relative overflow-hidden">
                <div className="blue-filter-overlay absolute inset-0 bg-blue-900/30 z-10"></div>
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className={`speaker-image w-full h-full object-cover object-center ${speaker.position}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 font-playfair">{speaker.name}</h3>
                <p className="text-blue-400 mb-3 font-raleway">{speaker.title}</p>
                <p className="text-gray-300 font-raleway speaker-bio">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .speaker-image-container {
          position: relative;
          overflow: hidden;
          height: 250px;
        }
        
        .blue-filter-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(30, 64, 175, 0.3);
          z-index: 1;
        }
        
        .speaker-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          position: relative;
          z-index: 0;
        }
        
        .speaker-card:hover .speaker-image {
          transform: scale(1.05);
        }
        
        .custom-position-face {
          object-position: center 20%;
        }
        
        .custom-position-center {
          object-position: center center;
        }
        
        .custom-position-top {
          object-position: center top;
        }
        
        .speaker-bio {
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}

export default Speakers
