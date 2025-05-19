import React from 'react';
import Logo from './Logo';
import { navItems } from '../data/navItems';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center">
              <Logo size={40} />
              <div className="ml-3">
                <h3 className="font-serif text-white text-xl font-bold">Freitas & Bittencourt</h3>
                <p className="text-secondary-light text-sm">Advocacia</p>
              </div>
            </div>
            
            <p className="mt-4 text-gray-300">
              Mais de 15 anos oferecendo soluções jurídicas personalizadas e estratégicas para 
              proteger os interesses e garantir os direitos de nossos clientes.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/frbt-advogados/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://instagram.com/frbt.advogados" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Áreas de Atuação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito Civil</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito Empresarial</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito Tributário</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito Trabalhista</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito Imobiliário</a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-secondary transition-colors">Direito do Consumidor</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Informações de Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-300">
                  Rua General Osório, n. 127, salas 412 a 414<br/>
                  Centro, Vitória/ES, 29010-035
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-300">+55 (27)99938-2118</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-gray-300">contato@frbt.com.br</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-300">Segunda a Sexta: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Freitas & Bittencourt Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;