import React from 'react'


import {
    FaHtml5, FaCss3Alt, FaReact, FaLaravel,
    FaJava, FaPhp, FaPython, FaBootstrap,
    FaKeyboard, FaFilePowerpoint, FaFileExcel, FaFileWord
} from 'react-icons/fa'
import {
    SiTailwindcss, SiJavascript, SiThreedotjs,
    SiNestjs, SiC, SiNextdotjs
} from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";
import Planetaire from '../components/Planetaire';
import CompetenceCard from '../components/CompetenceCard';

const CompetenceLayouts = ({ themeColor }) => {
    const competences = {
        web: [
            { name: "HTML5", icon: FaHtml5, level: 90, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, level: 80, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, level: 75, color: "#F7DF1E" }
        ],
        frameworks: [
            { name: "React", icon: FaReact, level: 78, color: "#61DAFB" },
            { name: "Three.js", icon: SiThreedotjs, level: 40, color: "#049EF4" },
            { name: "Laravel", icon: FaLaravel, level: 52, color: "#FF2D20" },
            { name: "NestJS", icon: SiNestjs, level: 68, color: "#E0234E" }
        ],
        langages: [
            { name: "Python", icon: FaPython, level: 70, color: "#3776AB" },
            { name: "Java", icon: FaJava, level: 40, color: "#007396" },
            { name: "C#", icon: TbBrandCSharp, level: 55, color: "#239120" },
            { name: "C", icon: SiC, level: 50, color: "#A8B9CC" },
            { name: "PHP", icon: FaPhp, level: 63, color: "#777BB4" }
        ],
        outils: [
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 80, color: "#06B6D4" },
            { name: "Bootstrap", icon: FaBootstrap, level: 70, color: "#7952B3" }
        ],
        bureautique: [
            { name: "Dactylographie", icon: FaKeyboard, level: "Avancé", color: "#4F46E5" },
            { name: "PowerPoint", icon: FaFilePowerpoint, level: "Avancé", color: "#D24726" },
            { name: "Excel", icon: FaFileExcel, level: "Intermédiaire+", color: "#217346" },
            { name: "Word", icon: FaFileWord, level: "Avancé", color: "#2B579A" }
        ],
        langues: [
            { name: "Malagasy", level: 80, color: "#10B981" },
            { name: "Français", level: 60, color: "#3B82F6" },

            { name: "Anglais", level: 55, color: "#EF4444" }
        ]
    }

    return (
        <section className=" py-20 z-40 px-4 md:px-8 lg:px-12" id="competences">
            <h2
                className="text-4xl md:text-5xl font-bold mb-10 text-center"
                style={{ color: themeColor }}
                data-aos="fade-up"
            >
                Mes compétences
            </h2>

            <Planetaire themeColor={themeColor} />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className="space-y-12">
                    {/* Technologie Web */}
                    <div data-aos="fade-right" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-6 dark:text-white" style={{ color: themeColor }}>
                            Technologie Web
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {competences.web.map((tech, index) => (
                                <CompetenceCard key={index} {...tech} />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div data-aos="fade-right" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-6 dark:text-white" style={{ color: themeColor }}>
                            Frameworks & Bibliothèques
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {competences.frameworks.map((tech, index) => (
                                <CompetenceCard key={index} {...tech} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Langages de programmation */}
                    <div data-aos="fade-left" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-6 dark:text-white" style={{ color: themeColor }}>
                            Langages de programmation
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {competences.langages.map((tech, index) => (
                                <CompetenceCard key={index} {...tech} />
                            ))}
                        </div>
                    </div>

                    {/* Outils & Préprocesseurs */}
                    <div data-aos="fade-left" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-6 dark:text-white" style={{ color: themeColor }}>
                            Outils & CSS
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {competences.outils.map((tech, index) => (
                                <CompetenceCard key={index} {...tech} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Bureautique */}
            <div
                className="max-w-6xl mx-auto mt-12 md:mt-0"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white" style={{ color: themeColor }}>
                    Compétences Bureautique
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {competences.bureautique.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white dark:bg-gray-800
                rounded-lg p-4
                border border-gray-200 dark:border-gray-700
                flex flex-col items-center
                hover:shadow-md transition-shadow
              "
                        >
                            <div
                                className="p-3 rounded-full mb-3"
                                style={{ backgroundColor: `${item.color}20`, color: item.color }}
                            >
                                <item.icon className="text-2xl" />
                            </div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">{item.name}</h4>
                            <span
                                className="text-sm mt-1 px-2 py-1 rounded-full"
                                style={{
                                    backgroundColor: `${item.color}20`,
                                    color: item.color
                                }}
                            >
                                {item.level}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
                    Niveau moyen supérieur à 36 mots/min en dactylographie
                </p>
            </div>

            {/* Section Langues */}
            <div
                className="max-w-3xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white" style={{ color: themeColor }}>
                    Langues Maîtrisées
                </h3>
                <div className="space-y-4">
                    {competences.langues.map((langue, index) => (
                        <div key={index} className="space-y-1">
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-800 dark:text-gray-200">{langue.name}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{langue.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full transition-all duration-700 ease-out"
                                    style={{
                                        width: `${langue.level}%`,
                                        backgroundColor: langue.color
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CompetenceLayouts