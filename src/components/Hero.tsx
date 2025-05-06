import React, { useState, useEffect } from 'react';

const practiceAreas = [
  'Direito Trabalhista',
  'Direito Previdenciário',
  'Direito Tributário',
  'Direito Civil',
  'Direito Imobiliário',
  'Direito do Consumidor'
];

const Hero: React.FC = () => {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % practiceAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-primary"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center pt-24 md:pt-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in">
          Excelência e Compromisso<br/>em Serviços Jurídicos
        </h1>
        
        <div className="h-24 flex justify-center items-center mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-secondary animate-slide-up">
            Especialistas em <span className="font-bold underline decoration-2 underline-offset-4">{practiceAreas[currentAreaIndex]}</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 animate-fade-in">
          Soluções jurídicas personalizadas e estratégicas para proteger seus interesses e garantir seus direitos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-sm transition duration-300 text-lg"
          >
            Agende uma Consulta
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-bold rounded-sm transition duration-300 text-lg"
          >
            Conheça Nosso Escritório
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-secondary transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;