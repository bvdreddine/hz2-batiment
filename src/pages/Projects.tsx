import React, { useState } from 'react';
import project1Image from '../assets/projects/projet1.jpeg';
import project2Image from '../assets/projects/projet2.png';
import project3Image from '../assets/projects/projet3.png';
import project4Image from '../assets/projects/projet4.png';
import project5Image from '../assets/projects/projet5.png';
import project6Image from '../assets/projects/projet6.png';
import project7Image from '../assets/projects/projet7.png';
import project8Image from '../assets/projects/projet8.png';

// Define project categories
const categories = ['Tous', 'Construction neuve', 'Rénovation', 'Gros œuvre', 'Second œuvre', 'Aménagement extérieur'];

// Define project data
const projects = [
  {
    id: 1,
    title: 'Projet River Palme',
    category: 'Construction neuve',
    description: 'Construction de 368 villas à Marrakech',
    image: 'projet1.jpeg',

  },
  {
    id: 2,
    title: 'Projet Janat Azaitoun',
    category: 'Construction neuve',
    description: 'Appart-hôtel',
    image: 'projet2.png',
  
  },
  {
    id: 3,
    title: 'Projet HARHOURA Hills',
    category: 'Gros œuvre',
    description: 'Réalisation du gros œuvre à Rabat.',
    image: 'projet3.png',
  },
  {
    id: 4,
    title: 'Projet Dar Chaoui ain chok',
    category: 'Athens, GR',
    description: 'COnstruction de A à Z',
    image: 'projet4.png',
  
  },
  {
    id: 5,
    title: 'Projet Zohor Targa',
    category: 'Construction neuve',
    description: 'Moyen standing 34 Immeubles à Marrakech.',
    image: 'projet5.png',
  },
  {
    id: 6,
    title: 'Projet Charaf 2',
    category: 'Construction neuve',
    description: 'Logement social 32 immeubles à Casablanca',
    image: 'projet6.png',
  
  },
  {
    id: 7,
    title: 'Projet Les Jardins de Lissasfa',
    category: 'Rénovation',
    description: 'Logement social 16 immeubles',
    image: 'projet7.png',

  },
  {
    id: 8,
    title: 'Projet Anfa City Tamaris',
    category: 'Gros œuvre',
    description: 'Réalisation de 65 villas à Casablanca.',
    image: 'projet8.png',
  
  },
 
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle project click to show details
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  // Get selected project details
  const getSelectedProject = () => {
    return projects.find(project => project.id === selectedProject);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue text-white py-16 relative" style={{ backgroundImage: 'url(/images/construction-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue opacity-80"></div>
        <div className="container-custom mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projets</h1>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                  selectedProject === project.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="h-64 bg-gray-300 relative">
                  <img 
                    src={project.image === 'projet1.jpeg' ? project1Image : 
                         project.image === 'projet2.png' ? project2Image :
                         project.image === 'projet3.png' ? project3Image :
                         project.image === 'projet4.png' ? project4Image :
                         project.image === 'projet5.png' ? project5Image :
                         project.image === 'projet6.png' ? project6Image :
                         project.image === 'projet7.png' ? project7Image :
                         project.image === 'projet8.png' ? project8Image : ''}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun projet ne correspond à cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{getSelectedProject()?.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="h-80 bg-gray-300 mb-6 rounded-lg">
                {/* This would be replaced with actual images */}
                <img 
                  src={getSelectedProject()?.image === 'projet1.jpeg' ? project1Image : 
                       getSelectedProject()?.image === 'projet2.png' ? project2Image :
                       getSelectedProject()?.image === 'projet3.png' ? project3Image :
                       getSelectedProject()?.image === 'projet4.png' ? project4Image :
                       getSelectedProject()?.image === 'projet5.png' ? project5Image :
                       getSelectedProject()?.image === 'projet6.png' ? project6Image :
                       getSelectedProject()?.image === 'projet7.png' ? project7Image :
                       getSelectedProject()?.image === 'projet8.png' ? project8Image : ''}
                  alt={getSelectedProject()?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Catégorie</h3>
                  <p>{getSelectedProject()?.category}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Localisation</h3>
                  <p>Maroc</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Client</h3>
                  <p>Client confidentiel</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600">
                  {getSelectedProject()?.description}
                  {/* Extended description would go here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, 
                  nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia,
                  nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Galerie</h3>
                <div className="grid grid-cols-3 gap-2">
                  {/* This would be replaced with actual thumbnail images */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="h-24 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Fermer
              </button>
              <a 
                href="/contact" 
                className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Demander un projet similaire
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-blue text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez un projet en tête ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons le réaliser ensemble.
          </p>
          <a href="/contact" className="inline-block bg-primary hover:bg-gold-dark text-blue font-bold py-3 px-8 rounded transition duration-300">
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
