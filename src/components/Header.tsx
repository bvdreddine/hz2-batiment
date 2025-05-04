import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png' ;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue text-white">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HZ2 Bâtiment Logo" className="h-12" />
        </Link>

        {/* Contact Info */}
        <div className="hidden lg:block text-right text-primary font-medium">
          <p>06 61 54 16 45 / 06 61 91 49 87</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-dark py-3">
        <div className="container-custom flex justify-between items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-primary font-medium transition duration-300">
              Accueil
            </Link>
            <Link to="/services" className="text-white hover:text-primary font-medium transition duration-300">
              Nos Métiers
            </Link>
            <Link to="/projects" className="text-white hover:text-primary font-medium transition duration-300">
              Projets
            </Link>
            <Link to="/about" className="text-white hover:text-primary font-medium transition duration-300">
              À Propos
            </Link>
            <Link to="/contact" className="text-white hover:text-primary font-medium transition duration-300">
              Nous Contacter
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-primary hover:bg-gold-dark text-blue font-bold py-2 px-6 rounded transition duration-300">
              DEMANDER UN DEVIS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary focus:outline-none transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-dark py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-primary font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-primary font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Nos Métiers
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-primary font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Projets
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary font-medium transition duration-300"
              onClick={toggleMenu}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Nous Contacter
            </Link>
            <Link
              to="/contact"
              className="bg-primary hover:bg-gold-dark text-blue font-bold py-2 px-6 rounded transition duration-300 inline-block mt-2"
              onClick={toggleMenu}
            >
              DEMANDER UN DEVIS
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
