import React from 'react';
// Import des images de services
import service1 from '../assets/services/service1.jpg';
import service2 from '../assets/services/service2.jpg';
import service3 from '../assets/services/service3.jpg';
import service4 from '../assets/services/service4.jpg';
import service5 from '../assets/services/service5.jpg';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue text-white py-16 relative" style={{ backgroundImage: 'linear-gradient(rgba(0, 71, 171, 0.8), rgba(0, 71, 171, 0.8))', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue opacity-80"></div>
        <div className="container-custom mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        </div>
      </section>

      {/* Services Title */}
      <section className="py-12">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-2xl font-medium text-primary mb-2">Nos Métiers</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue mb-6">Expertise et Polyvalence</h3>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          {/* Service 1 */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80">
              <img src={service1} alt="Construction & Rénovation Immobilière" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Construction & Rénovation Immobilière</h2>
              <p className="text-gray-700 mb-6">
                Nous réalisons des projets de construction résidentielle et commerciale selon vos spécifications et exigences.
                Notre équipe d'experts vous accompagne de la conception à la livraison finale.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Maisons individuelles</li>
                <li>Immeubles résidentiels</li>
                <li>Locaux commerciaux</li>
                <li>Bâtiments industriels</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 rounded-lg overflow-hidden h-80">
              <img src={service2} alt="Gros Œuvre & Travaux de Structure" className="w-full h-full object-cover" />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Gros Œuvre & Travaux de Structure</h2>
              <p className="text-gray-700 mb-6">
                Nous réalisons tous les travaux de gros œuvre pour assurer la solidité et la durabilité de votre bâtiment.
                Notre expertise garantit des fondations et structures robustes conformes aux normes en vigueur.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Fondations</li>
                <li>Maçonnerie</li>
                <li>Structures en béton</li>
                <li>Charpentes</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80">
              <img src={service3} alt="Génie Civil & Infrastructures" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Génie Civil & Infrastructures</h2>
              <p className="text-gray-700 mb-6">
                Notre expertise en génie civil nous permet de réaliser des infrastructures durables et fonctionnelles.
                Nous intervenons sur tous types de projets d'infrastructures publiques et privées.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Ouvrages d'art</li>
                <li>Infrastructures routières</li>
                <li>Réseaux hydrauliques</li>
                <li>Structures industrielles</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 rounded-lg overflow-hidden h-80">
              <img src={service4} alt="Aménagements Extérieurs et Travaux Publics" className="w-full h-full object-cover" />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Aménagements Extérieurs et Travaux Publics</h2>
              <p className="text-gray-700 mb-6">
                Complétez votre projet avec nos services d'aménagement extérieur pour créer un environnement
                harmonieux et fonctionnel autour de votre bâtiment.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Terrasses et balcons</li>
                <li>Allées et accès</li>
                <li>Clôtures et portails</li>
                <li>Aménagements paysagers</li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80">
              <img src={service5} alt="Travaux Spécialisés et Second Œuvre" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Travaux Spécialisés et Second Œuvre</h2>
              <p className="text-gray-700 mb-6">
                Nos équipes qualifiées prennent en charge tous les travaux de second œuvre pour finaliser votre projet
                avec des finitions soignées et des matériaux de qualité.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Plâtrerie et isolation</li>
                <li>Menuiserie</li>
                <li>Électricité et plomberie</li>
                <li>Peinture et revêtements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un service sur mesure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet spécifique et découvrir comment nous pouvons vous aider.
          </p>
          <a href="/contact" className="inline-block bg-primary hover:bg-gold-dark text-blue font-bold py-3 px-8 rounded transition duration-300">
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
