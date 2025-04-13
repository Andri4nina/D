import React, { useState } from 'react'
import {
    FaHome, FaUser, FaBriefcase, FaEnvelope, FaFileAlt,
    FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter,
    FaCode,
    FaTools,
    FaGraduationCap,
} from 'react-icons/fa';
import ModeSelector from './ModeSelector';
import ColorSelector from './ColorSelector';

const SideBar =  ({ 
    themeColor, 
    setThemeColor, 
    darkMode, 
    setDarkMode, 
    activeItem, 
    setActiveItem,
    scrollToSection,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { id: 'home', icon: <FaHome />, label: 'Accueil' },
        { id: 'about', icon: <FaUser />, label: 'À propos' },
        { id: 'services', icon: <FaBriefcase />, label: 'Services' },
        { id: 'competences', icon: <FaCode />, label: 'Compétences' },
        { id: 'portfolio',  icon: <FaTools />, label: 'Portfolio' },
        { id: 'parcours',  icon: <FaGraduationCap />, label: 'Parcours' },
        { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
        { id: 'resume', icon: <FaFileAlt />, label: 'CV' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com' },
        { icon: <FaTwitter />, url: 'https://twitter.com' },
    ];

    // Style dynamique basé sur themeColor
    const dynamicStyle = {
        backgroundColor: themeColor,
        borderColor: themeColor,
        hoverColor: `${themeColor}99`, // Ajoute de la transparence pour le hover
    };



    return (
        <>
            {/* Bouton Hamburger avec couleur dynamique */}
            <button
                onClick={toggleSidebar}
                style={{ backgroundColor: themeColor }}
                className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300
                    ${isOpen ? 'rotate-90' : ''} text-white`}
            >
                {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-full w-80 z-40 
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}
                shadow-xl flex flex-col
            `}>
                {/* Header avec bordure colorée */}
                <div 
                    className={`p-6 border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                    style={{ borderBottomColor: themeColor }}
                >
                    <h2 
                        className="text-2xl font-bold text-center"
                        style={{ color: themeColor }}
                    >
                        Mon Portfolio
                    </h2>
                    <p className={`text-sm mt-1 text-center ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Développeur Full Stack & Designer
                    </p>
                </div>

                {/* Menu principal */}
                <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item.id);
                                        scrollToSection(item.id);
                                        setIsOpen(false);
                                    }}
                                    style={{
                                        backgroundColor: activeItem === item.id ? themeColor : 'transparent',
                                        color: activeItem === item.id ? 'white' : (darkMode ? 'rgb(209 213 219)' : 'rgb(55 65 81)'),
                                        borderLeft: activeItem === item.id ? `4px solid ${themeColor}` : '4px solid transparent'
                                    }}
                                    className={`
                                        flex items-center px-4 py-3 rounded-lg transition-all
                                        ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}
                                    `}
                                >
                                    <span className="w-6 mr-3">{item.icon}</span>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Section Paramètres */}
                    <div 
                        className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}
                        style={{ border: `1px solid ${themeColor}` }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className={`flex items-center ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                <span className="w-6 mr-3">🌓</span>
                                <span>Thème</span>
                            </span>
                            <ModeSelector darkMode={darkMode} setDarkMode={setDarkMode} themeColor={themeColor} />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`flex items-center ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                <span className="w-6 mr-3">🎨</span>
                                <span>Couleur</span>
                            </span>
                            <ColorSelector themeColor={themeColor} setThemeColor={setThemeColor} />
                        </div>
                    </div>
                </nav>

                {/* Footer avec bordure colorée */}
                <div 
                    className={`p-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                    style={{ borderTop: `1px solid ${themeColor}` }}
                >
                    <div className="flex justify-center space-x-4 mb-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: themeColor }}
                                className="p-2 rounded-full transition-all hover:opacity-80"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <p className={`text-xs text-center ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        © {new Date().getFullYear()} Tous droits réservés
                    </p>
                </div>
            </div>
        </>
    );
};

export default SideBar