import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container-custom mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
          <p className="text-xl max-w-3xl">
            Découvrez l'histoire, les valeurs et l'équipe qui font de HZ2 Bâtiment un partenaire de confiance pour vos projets de construction.
          </p>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-blue-800 h-96 rounded-lg overflow-hidden flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <h3 className="text-3xl font-bold mb-4">HZ2 Bâtiment</h3>
                  <p className="text-xl">Construction & Rénovation Immobilière</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
              <p className="text-gray-700 mb-4">
                HZ2 Bâtiment est une entreprise générale de construction spécialisée dans le bâtiment, les travaux de gros œuvre, le terrassement, la rénovation et le génie civil. Forts d'une expertise éprouvée et d'une équipe qualifiée, nous accompagnons nos clients – particuliers, industriels et promoteurs – dans la réalisation de leurs projets, de la conception à la livraison finale.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Notre engagement ?</strong> Allier qualité, innovation et respect des délais pour assurer la réussite de chaque projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Vision</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Nous aspirons à être un acteur majeur du secteur du bâtiment et du génie civil au Maroc, en proposant des solutions durables et adaptées aux besoins de nos clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Construire l'avenir</h3>
              <p className="text-gray-600 text-center">
                En adoptant des pratiques modernes et respectueuses de l'environnement.
              </p>
            </div>
            
            {/* Vision 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Garantir l'excellence</h3>
              <p className="text-gray-600 text-center">
                En alliant savoir-faire et matériaux de qualité.
              </p>
            </div>
            
            {/* Vision 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Établir des relations de confiance</h3>
              <p className="text-gray-600 text-center">
                Basées sur la transparence et le professionnalisme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Domaines d'Expertise */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Domaines d'Expertise</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Nous intervenons dans plusieurs secteurs du bâtiment et des travaux publics :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Construction de bâtiments résidentiels et commerciaux</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Travaux de gros œuvre et de second œuvre</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Rénovation et réhabilitation d'anciens bâtiments</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Travaux de terrassement et d'infrastructures</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Projets de génie civil : bassins, radiers, fosses</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700">Travaux de voirie et d'aménagement urbain</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8 max-w-3xl mx-auto">
            Nous mettons un point d'honneur à respecter les normes de sécurité, les exigences réglementaires et les attentes spécifiques de nos clients.
          </p>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Une Équipe de Professionnels à Votre Service</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Notre équipe est composée d'experts du secteur de la construction, alliant savoir-faire technique et expérience terrain :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Personnel administratif et technique</h3>
              <p className="text-gray-600 text-center">
                Ingénieurs, conducteurs de travaux et gestionnaires de projet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Équipes de chantier</h3>
              <p className="text-gray-600 text-center">
                Maçons, boiseurs, ferrailleurs et ouvriers qualifiés.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Un parc matériel performant</h3>
              <p className="text-gray-600 text-center">
                Grues, bétonnières, télescopes et engins de chantier.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Notre organisation efficace nous permet de mener des projets de grande envergure tout en assurant un suivi rigoureux.
          </p>
          
          {/* Direction et administration */}
          <h3 className="text-2xl font-bold text-center mb-8">Direction et administration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Abdelatif Ezzitouni</h4>
              <p className="text-gray-600 text-sm">Directeur général</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Abdelkhalek Irrou</h4>
              <p className="text-gray-600 text-sm">Directeur financier</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Youssef Lhyani</h4>
              <p className="text-gray-600 text-sm">Comptable</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Laila Ezzitouni</h4>
              <p className="text-gray-600 text-sm">Secrétaire de direction</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Maad Bourzqui</h4>
              <p className="text-gray-600 text-sm">Coursier</p>
            </div>
          </div>
          
          {/* Chantiers */}
          <h3 className="text-2xl font-bold text-center mb-8">Chantiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Abdelatif Ezzitouni</h4>
              <p className="text-gray-600 text-sm">Directeur technique</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Ezzitouni Housseine</h4>
              <p className="text-gray-600 text-sm">Conducteur de travaux</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Abdelkeder Tirelahmam</h4>
              <p className="text-gray-600 text-sm">Chef de chantier</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">Khalid Guzoli</h4>
              <p className="text-gray-600 text-sm">Chef de chantier</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">SOFIANE ALIOUA</h4>
              <p className="text-gray-600 text-sm">Chauffeur</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">FAHIME MOHAMMED</h4>
              <p className="text-gray-600 text-sm">Grutier</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h4 className="font-semibold mb-2">RADOUAN HACHLAF</h4>
              <p className="text-gray-600 text-sm">Grutier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pourquoi choisir HZ2 Bâtiment ?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Nos équipes réalisent tous types de travaux de gros œuvre et de terrassement, garantissant des bases solides pour tous vos projets.
          </p>
          <a href="/contact" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
