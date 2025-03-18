import React, { useState, useEffect } from 'react';

interface MailchimpFormProps {
  serverPrefix?: string;
  audienceId?: string;
  u?: string;
  id?: string;
}

const MailchimpForm: React.FC<MailchimpFormProps> = ({ 
  serverPrefix = 'us9',
  audienceId = '',
  u = 'info@souslebandeau.ca',
  id = 'Sous le Bandeau'
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formAction, setFormAction] = useState('');

  useEffect(() => {
    // Si nous avons les paramètres u et id, nous pouvons construire l'URL d'action
    if (u && id) {
      setFormAction(`https://${serverPrefix}.list-manage.com/subscribe/post?u=${u}&id=${id}`);
    } else if (audienceId) {
      // Sinon, nous utilisons l'audience ID si disponible
      setFormAction(`https://${serverPrefix}.list-manage.com/subscribe/post?u=${u}&id=${audienceId}`);
    }
  }, [serverPrefix, audienceId, u, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email');
      return;
    }
    
    if (!formAction) {
      setStatus('error');
      setMessage('Configuration Mailchimp incomplète. Veuillez contacter l\'administrateur.');
      return;
    }
    
    setStatus('loading');
    
    // Créer un iframe caché pour soumettre le formulaire sans redirection
    const iframeId = 'mailchimp-iframe';
    let iframe = document.getElementById(iframeId) as HTMLIFrameElement;
    
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.setAttribute('id', iframeId);
      iframe.setAttribute('name', iframeId);
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    
    // Créer un formulaire pour soumettre à l'iframe
    const form = document.createElement('form');
    form.setAttribute('action', formAction);
    form.setAttribute('method', 'post');
    form.setAttribute('target', iframeId);
    
    // Ajouter le champ email
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'EMAIL');
    emailInput.setAttribute('value', email);
    form.appendChild(emailInput);
    
    // Ajouter un champ caché pour éviter les bots
    const botField = document.createElement('div');
    botField.style.position = 'absolute';
    botField.style.left = '-5000px';
    const botInput = document.createElement('input');
    botInput.setAttribute('type', 'text');
    botInput.setAttribute('name', 'b_' + u + '_' + id);
    botInput.setAttribute('tabindex', '-1');
    botInput.setAttribute('value', '');
    botField.appendChild(botInput);
    form.appendChild(botField);
    
    // Ajouter le formulaire au document, le soumettre, puis le supprimer
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Écouter les événements de l'iframe pour détecter la fin du chargement
    iframe.onload = () => {
      try {
        // Vérifier si l'iframe contient un message de succès
        const iframeContent = iframe.contentDocument || iframe.contentWindow?.document;
        
        if (iframeContent) {
          const title = iframeContent.title || '';
          const body = iframeContent.body.innerText || '';
          
          if (title.includes('Confirm') || body.includes('confirm') || body.includes('Almost finished') || body.includes('presque terminé')) {
            setStatus('success');
            setMessage('Merci! Veuillez vérifier votre boîte de réception pour confirmer votre abonnement.');
            setEmail('');
          } else if (body.includes('already subscribed') || body.includes('déjà inscrit')) {
            setStatus('error');
            setMessage('Cette adresse email est déjà inscrite à notre infolettre.');
          } else if (body.includes('error') || body.includes('erreur')) {
            setStatus('error');
            setMessage('Une erreur est survenue. Veuillez réessayer.');
          } else {
            setStatus('success');
            setMessage('Merci de vous être abonné à notre infolettre!');
            setEmail('');
          }
        } else {
          // Si nous ne pouvons pas accéder au contenu de l'iframe (politique de sécurité)
          setStatus('success');
          setMessage('Merci! Si votre email est valide, vous recevrez bientôt un message de confirmation.');
          setEmail('');
        }
      } catch (error) {
        // En cas d'erreur d'accès à l'iframe (politique de sécurité)
        setStatus('success');
        setMessage('Merci! Si votre email est valide, vous recevrez bientôt un message de confirmation.');
        setEmail('');
      }
    };
    
    // Définir un délai maximum pour la réponse
    setTimeout(() => {
      if (status === 'loading') {
        setStatus('success');
        setMessage('Merci! Si votre email est valide, vous recevrez bientôt un message de confirmation.');
        setEmail('');
      }
    }, 5000);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Votre adresse email" 
        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-raleway"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className={`w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-raleway ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Traitement...' : 'S\'abonner'}
      </button>
      
      {status === 'success' && (
        <div className="mt-2 text-green-400 text-sm font-raleway">
          {message}
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-2 text-red-400 text-sm font-raleway">
          {message}</div>
      )}
    </form>
  );
};

export default MailchimpForm;
