import React from 'react';
// Import des images de services
import service1 from '../assets/services/service1.jpg';
import service3 from '../assets/services/service3.jpg';
import service5 from '../assets/services/service5.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue text-white py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions de construction professionnelles pour vos projets</h1>
            <p className="text-xl mb-8">HZ2 Bâtiment vous accompagne dans tous vos projets de construction et rénovation avec expertise et savoir-faire.</p>
            <a href="/contact" className="bg-primary hover:bg-gold-dark text-blue font-bold py-3 px-8 rounded transition duration-300 inline-block">
              Demander un devis
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-contain bg-no-repeat bg-right-bottom"></div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={service1} alt="Construction & Rénovation Immobilière" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Construction & Rénovation Immobilière</h3>
                <p className="text-gray-600 mb-4">Réalisation de projets de construction résidentielle et commerciale selon vos spécifications.</p>
                <a href="/services" className="text-blue-600 font-medium hover:text-blue-800">En savoir plus →</a>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={service3} alt="Génie Civil & Infrastructures" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Génie Civil & Infrastructures</h3>
                <p className="text-gray-600 mb-4">Notre expertise en génie civil nous permet de réaliser des infrastructures durables et fonctionnelles.</p>
                <a href="/services" className="text-blue-600 font-medium hover:text-blue-800">En savoir plus →</a>
              </div>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={service5} alt="Travaux Spécialisés et Second Œuvre" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Travaux Spécialisés et Second Œuvre</h3>
                <p className="text-gray-600 mb-4">Nos équipes qualifiées prennent en charge tous les travaux de second œuvre pour finaliser votre projet.</p>
                <a href="/services" className="text-blue-600 font-medium hover:text-blue-800">En savoir plus →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-blue-800 h-80 rounded-lg overflow-hidden flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4">HZ2 Bâtiment</h3>
                  <p className="text-lg">Construction & Rénovation Immobilière</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">À propos de HZ2 Bâtiment</h2>
              <p className="text-gray-700 mb-6">
                HZ2 Bâtiment est une entreprise générale de construction spécialisée dans le bâtiment, les travaux de gros œuvre, le terrassement, la rénovation et le génie civil. 
                Notre équipe d'experts qualifiés s'engage à fournir des services de haute qualité pour tous vos projets de construction.
              </p>
              <a href="/about" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                Découvrir notre histoire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ahmed Kacimi</h4>
                  <p className="text-sm text-gray-600">Propriétaire de maison</p>
                </div>
              </div>
              <p className="text-gray-700">
                "HZ2 Bâtiment a réalisé la rénovation complète de notre maison avec professionnalisme et dans les délais. 
                Le résultat dépasse nos attentes et nous sommes ravis."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold">ZJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Zakaria Jounir</h4>
                  <p className="text-sm text-gray-600">Gérante de commerce</p>
                </div>
              </div>
              <p className="text-gray-700">
                "L'équipe de HZ2 a transformé notre local commercial avec efficacité et un souci du détail remarquable. 
                Nous recommandons vivement leurs services."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold">NE</span>
                </div>
                <div>
                  <h4 className="font-semibold">Nabil El Amri</h4>
                  <p className="text-sm text-gray-600">Architecte</p>
                </div>
              </div>
              <p className="text-gray-700">
                "En tant qu'architecte, j'ai collaboré avec HZ2 Bâtiment sur plusieurs projets. Leur expertise technique 
                et leur capacité à résoudre les problèmes sont impressionnantes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <a href="/contact" className="inline-block bg-primary hover:bg-gold-dark text-blue font-bold py-3 px-8 rounded transition duration-300">
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
