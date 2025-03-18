import React from 'react';

interface DirectMailchimpFormProps {
  serverPrefix?: string;
  u?: string;
  id?: string;
}

const DirectMailchimpForm: React.FC<DirectMailchimpFormProps> = ({
  serverPrefix = 'us9',
  u = 'info@souslebandeau.ca',
  id = 'Sous le Bandeau'
}) => {
  // Construire l'URL d'action pour le formulaire
  const formAction = `https://${serverPrefix}.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <form 
      action={formAction}
      method="post"
      target="_blank"
      className="space-y-2"
    >
      <input 
        type="email" 
        name="EMAIL"
        placeholder="Votre adresse email" 
        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-raleway"
        required
      />
      
      {/* Champ caché pour éviter les soumissions de bots */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name={`b_${u}_${id}`} tabIndex={-1} defaultValue="" />
      </div>
      
      <button 
        type="submit" 
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-raleway"
      >
        S'abonner
      </button>
    </form>
  );
};

export default DirectMailchimpForm;
