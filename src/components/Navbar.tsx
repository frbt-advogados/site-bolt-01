import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/navItems';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-primary shadow-lg' : 'bg-transparent'
      } ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center" onClick={handleLinkClick}>
          <Logo size={scrolled ? 40 : 50} />
          <div className="ml-3">
            <h1 className={`font-serif text-white ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-bold transition-all`}>
              Freitas & Bittencourt
            </h1>
            <p className={`text-secondary-light ${scrolled ? 'text-xs' : 'text-sm'} transition-all`}>
              Advocacia
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-secondary transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuClick}
          className="md:hidden p-2 text-white hover:text-secondary focus:outline-none transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[${scrolled ? '56px' : '72px'}] bg-primary transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="block py-4 text-white hover:text-secondary text-lg font-medium border-b border-primary-light last:border-b-0 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;