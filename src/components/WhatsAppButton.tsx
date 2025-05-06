import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5527999382118?text=Ol%C3%A1,%20quero%20conversar%20com%20um%20advogado.%20Minha%20d%C3%BAvida%20%C3%A9%20a%20seguinte"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary-light w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Iniciar conversa no WhatsApp"
    >
      <img 
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" 
        alt="WhatsApp"
        className="w-7 h-7 invert brightness-0" 
      />
    </a>
  );
};

export default WhatsAppButton;