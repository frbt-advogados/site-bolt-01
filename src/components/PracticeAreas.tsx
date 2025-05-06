import React, { useState } from 'react';
import { practiceAreas } from '../data/practiceAreas';
import { Scale, Building, Landmark, Briefcase, Home, ShoppingCart } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'scale':
      return <Scale size={40} className="text-secondary" />;
    case 'building':
      return <Building size={40} className="text-secondary" />;
    case 'landmark':
      return <Landmark size={40} className="text-secondary" />;
    case 'briefcase':
      return <Briefcase size={40} className="text-secondary" />;
    case 'home':
      return <Home size={40} className="text-secondary" />;
    case 'shopping-cart':
      return <ShoppingCart size={40} className="text-secondary" />;
    default:
      return <Scale size={40} className="text-secondary" />;
  }
};

const PracticeAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number | null>(null);

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-tertiary max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência e no atendimento personalizado às necessidades de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div 
              key={area.id}
              className={`p-8 rounded-lg shadow-md transition-all duration-300 ${
                activeArea === area.id 
                  ? 'bg-primary text-white transform -translate-y-2' 
                  : 'bg-white text-tertiary hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <div className="mb-6">
                {getIcon(area.icon)}
              </div>
              
              <h3 className={`text-xl font-serif font-bold mb-4 ${
                activeArea === area.id ? 'text-white' : 'text-primary'
              }`}>{area.title}</h3>
              
              <p className={activeArea === area.id ? 'text-gray-200' : 'text-tertiary'}>
                {area.description}
              </p>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center ${
                    activeArea === area.id 
                      ? 'text-secondary hover:text-secondary-light' 
                      : 'text-primary hover:text-secondary'
                  } font-bold transition-colors duration-300`}
                >
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;