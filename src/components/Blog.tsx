import React from 'react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Notícias e Artigos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-tertiary max-w-3xl mx-auto">
            Acompanhe as atualizações do universo jurídico e conheça nossas análises sobre as principais 
            mudanças legislativas e tendências que impactam nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-tertiary mb-4">{post.excerpt}</p>
                
                <span className="inline-flex items-center text-primary font-bold">
                  Em breve
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;