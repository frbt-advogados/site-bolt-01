import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_tc9g3tb',
        'template_001',
        form.current,
        'SFrnSuCiaOFQ7_n8p'
      )
      .then(
        () => {
          setStatus('success');
          if (form.current) {
            form.current.reset();
          }
        },
        () => {
          setStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-tertiary max-w-3xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e oferecer a assistência jurídica que você necessita. 
            Entre em contato conosco pelos canais abaixo ou preencha o formulário.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envie-nos uma Mensagem</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-tertiary mb-1">Nome completo</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-tertiary mb-1">E-mail</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium text-tertiary mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-tertiary mb-1">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Selecione...</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Contratação">Contratação</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              {status && (
                <div className={`p-4 rounded-sm ${
                  status === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}>
                  {status === 'success' 
                    ? '✅ Mensagem enviada com sucesso!' 
                    : '❌ Erro ao enviar mensagem. Por favor, tente novamente.'}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-sm transition duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-primary">Endereço</h4>
                  <p className="text-tertiary">Rua General Osório, n. 127, salas 412 a 414</p>
                  <p className="text-tertiary">Centro, Vitória/ES, 29010-035</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-primary">Telefone</h4>
                  <p className="text-tertiary">+55 (27)99938-2118</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-primary">E-mail</h4>
                  <p className="text-tertiary">contato@frbt.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-primary">Horário de Atendimento</h4>
                  <p className="text-tertiary">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8835095657163!2d-40.33791642481039!3d-20.32805814356539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817b7d5f1a301%3A0xa93a6e623f48a07f!2sR.%20Gen.%20Os%C3%B3rio%2C%20127%20-%20Centro%2C%20Vit%C3%B3ria%20-%20ES%2C%2029010-035!5e0!3m2!1spt-BR!2sbr!4v1709247051099!5m2!1spt-BR!2sbr"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;