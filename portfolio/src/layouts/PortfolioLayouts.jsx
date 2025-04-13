import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "AchaToo",
        description: "Plateforme de renouveau des achats en entreprise avec fonctionnalités avancées",
        technologies: ["C#", "Python", "NestJS", "React"],
        year: 2025,
        links: {
            github: "https://github.com/ArtKaody/documentation.git",

        },
        image: "/placeholder-achatoo.jpg" // Remplacez par votre image
    },
    {
        title: "Iot",
        description: "Système de gestion d'objets connectés socket avec apk mobile",
        technologies: ["C++", "Express", "React"],
        year: 2025,
        links: {
            github: "https://github.com/Andri4nina/Iot.git",

        },
        image: "/placeholder-iot.jpg" // Remplacez par votre image
    },
    {
        title: "Tragnobe",
        description: "Application de gestion de stock avec recherche avancée",
        technologies: ["React", "NestJS"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-tragnobe.jpg"
    },
    {
        title: "Stockify",
        description: "Solution de gestion de stock avec analyse en temps réel",
        technologies: ["React", "NestJS"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-stockify.jpg"
    },
    {
        title: "Kalintsika Anio",
        description: "Application mobile de la gestion d'alimentation",
        technologies: ["React Native"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-kalintsika.jpg"
    },
    {
        title: "Pubnex",
        description: "Réseau social pour professionnels",
        technologies: ["React", "NestJS"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-pubnex.jpg"
    },
    {
        title: "Pisciculture",
        description: "Système de gestion de ferme piscicole",
        technologies: ["React", "Spring Boot"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-pisciculture.jpg"
    },
    {
        title: "Posteman",
        description: "Application de gestion postale",
        technologies: ["Laravel"],
        year: 2024,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-posteman.jpg"
    },
    {
        title: "Gestion de location",
        description: "Système de gestion de propriétés locatives",
        technologies: ["C#", "Java"],
        year: 2023,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-location.jpg"
    },
    {
        title: "Gestion de frais de scolarité",
        description: "Solution pour établissements éducatifs",
        technologies: ["JavaScript", "PHP"],
        year: 2023,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-scolarite.jpg"
    },
    {
        title: "F1",
        description: "Site d'information sur la Formule 1",
        technologies: ["HTML", "CSS"],
        year: 2022,
        links: {
            github: "#",
            live: "#"
        },
        image: "/placeholder-f1.jpg"
    },
    {
        title: "Portfolio (ancien)",
        description: "Mon premier portfolio personnel",
        technologies: ["HTML", "CSS"],
        year: 2022,
        links: {
            github: "#",
            live: "#"
        },
        image: "/images/Portfolio ancien.png"
    }
];

const PortfolioLayouts = ({ themeColor }) => {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-12 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center" style={{ color: themeColor }}>
                    Mes projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 100}
                        >
                            {/* Placeholder pour l'image - à remplacer */}
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`Présentation ${project.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-500 dark:text-gray-400">Image {project.title}</span>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <FaGithub className="mr-2" />
                                            Code
                                        </a>
                                    )}

                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="mr-2" />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioLayouts