import React, { useState } from 'react';
import { teamMembers } from '../data/teamMembers';

const Team: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Sócios Fundadores</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-tertiary max-w-3xl mx-auto">
            O escritório Freitas & Bittencourt Advogados é liderado pelos renomados advogados Gustavo Faria de Freitas (OAB/ES 21.172 – OAB/BA 71.514) e Renzo Lopes Bittencourt (OAB/ES 20.555 – OAB/BA 71.354), profissionais com sólida reputação no cenário jurídico nacional.
          </p>
          <p className="text-tertiary max-w-3xl mx-auto mt-4">
            Com ampla experiência em Direito Previdenciário, Tributário e Trabalhista, os sócios atuam há mais de uma década com excelência técnica, protagonizando milhares de atendimentos e processos de alta complexidade. Seu histórico de resultados expressivos e compromisso ético consolidam o escritório como uma referência no setor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="relative group"
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70 transition-opacity duration-300 ${
                  activeId === member.id ? 'opacity-90' : 'opacity-70'
                }`}></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary text-sm mb-2">{member.role}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeId === member.id ? 'max-h-40' : 'max-h-0'
                  }`}>
                    <p className="text-gray-200 text-sm mt-4">{member.bio}</p>
                    
                    <div className="flex space-x-3 mt-4">
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;