import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        className={`${index < rating ? 'text-secondary fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Avaliações reais de nossos clientes no Google
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-secondary transition-colors z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-secondary transition-colors z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Testimonials */}
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 left-0 right-0 translate-x-8'
                }`}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <svg className="mx-auto text-secondary" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10H10C7.24 10 5 12.24 5 15V25C5 27.76 7.24 30 10 30H15C15 35.52 10.52 40 5 40V45C13.28 45 20 38.28 20 30V10ZM45 10H35C32.24 10 30 12.24 30 15V25C30 27.76 32.24 30 35 30H40C40 35.52 35.52 40 30 40V45C38.28 45 45 38.28 45 30V10Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-xl text-white italic leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <p className="font-serif text-lg font-bold text-secondary">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-300">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm mt-2">Avaliado em {testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-secondary w-10' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?safe=active&sca_esv=008f9e8726f85704&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfzSkw3lgzlNujQcrJDlTfZ3pIPuWDKHTH7n5ON5IdxjMObv4QUv9jQYLnemWQVKu93QJbePAi-wjOlXp-0Kpm9qAkE51k_-8kIVHUySgMjzKpbgkLeU6hSGyY2WG1d_LM_FwLg%3D&q=Freitas+%26+Bittencourt+Advogados+Coment%C3%A1rios&sa=X&ved=2ahUKEwiriZOG5Y2NAxWJqZUCHVatE70Q0bkNegQIKxAE&biw=1920&bih=911&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-sm transition duration-300"
          >
            Ver Todas as Avaliações no Google
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;