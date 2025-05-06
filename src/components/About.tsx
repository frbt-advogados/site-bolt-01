import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Nosso Escritório</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">O escritório Freitas & Bittencourt Advogados</h3>
            
            <p className="text-tertiary mb-6 leading-relaxed">
              O escritório Freitas & Bittencourt Advogados é composto por dois sócios fundadores e uma equipe de advogados 
              associados especializados nas diversas áreas de atuação do escritório, com ênfase à trabalhista, inventários, 
              previdenciária e cível/consumidor.
            </p>
            
            <p className="text-tertiary mb-6 leading-relaxed">
              Com mais de dez anos de atuação e mais de 1200 processos ajuizados por seus sócios ao longo de suas carreiras, 
              nosso principal objetivo é prestar bons serviços aos clientes, com ética, transparência e eficiência.
            </p>

            <p className="text-tertiary mb-6 leading-relaxed">
              Nossos resultados se comprovam pela satisfação e fidelidade de nossos clientes, a quem devemos os sinceros 
              agradecimentos pela confiança depositada.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-lg text-primary mb-2">Missão</h4>
                <p className="text-tertiary">Oferecer soluções jurídicas eficientes e personalizadas, defendendo os interesses de nossos clientes com ética e excelência.</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-lg text-primary mb-2">Valores</h4>
                <p className="text-tertiary">Ética, transparência, comprometimento, excelência técnica e responsabilidade social.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/XJBx5qHR/vitoria-es.jpg" 
                alt="Vista da cidade de Vitória - ES" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h5l2 5 2-10 2 5h5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Experiência Comprovada</h3>
            <p className="text-tertiary">Mais de 10 anos atuando nas mais diversas áreas do direito com resultados expressivos para nossos clientes.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Atendimento Personalizado</h3>
            <p className="text-tertiary">Soluções jurídicas sob medida, desenvolvidas conforme as necessidades específicas de cada cliente.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Equipe Especializada</h3>
            <p className="text-tertiary">Profissionais altamente qualificados e constantemente atualizados com as mudanças legislativas e jurisprudenciais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;