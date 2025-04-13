import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fonction pour générer une couleur plus sombre
const darkenColor = (hex, percent) => {
    // Supprimer le # si présent
    hex = hex.replace(/^#/, '');

    // Convertir en RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Assombrir
    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);

    // Retourner en hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
const HomeLayouts = ({ themeColor }) => {
    // Création des couleurs dérivées
    const darkerColor = darkenColor(themeColor, 20);
    const gradientFrom = themeColor;
    const gradientTo = darkerColor;

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });

        const typed = new Typed('#profil', {
            strings: [
                'Développeur Full Stack JS',
                'Concepteur UI/UX',
                'Concepteur 3D',
                'Passionné de technologie'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => typed.destroy();
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center">
            {/* Fond animé avec la couleur du thème */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            backgroundColor: `${themeColor}20`, // 20% d'opacité
                        }}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            opacity: 0.1
                        }}
                        animate={{
                            x: [null, Math.random() * window.innerWidth],
                            y: [null, Math.random() * window.innerHeight],
                            transition: {
                                duration: Math.random() * 30 + 20,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-end">
                    {/* Partie texte */}
                    <motion.div
                        className="lg:w-1/2 w-full text-center lg:text-right order-2 lg:order-1"
                        data-aos="fade-left"
                    >
                        <motion.div className="mb-8" whileHover={{ scale: 1.05 }}>
                            <h2 className="text-4xl md:text-6xl font-light mb-4">
                                Salut, je suis <br />
                                <motion.span
                                    className="Myname font-bold bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Rasoamanana Razafimanantsoa Andrianina
                                </motion.span>
                            </h2>

                            <h3 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
                                Je suis <span
                                    className="font-bold"
                                    style={{ color: themeColor }}
                                    id="profil"
                                ></span>
                            </h3>
                        </motion.div>

                        {/* Boutons */}
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a
                                href="#contact"
                                className="px-8 py-3 rounded-lg font-medium shadow-lg transition-colors"
                                style={{
                                    backgroundColor: themeColor,
                                    color: 'white',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: darkerColor
                                }}
                                whileTap={{ scale: 0.95 }}
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                Me contacter
                            </motion.a>
                            <motion.a
                                href="#portfolio"
                                className="px-8 py-3 border-2 rounded-lg font-medium transition-colors"
                                style={{
                                    borderColor: themeColor,
                                    color: themeColor,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: `${themeColor}10` // 10% d'opacité
                                }}
                                whileTap={{ scale: 0.95 }}
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                Voir mon travail
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Indicateur de défilement */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div
                    className="w-6 h-10 border-2 rounded-full flex justify-center"
                    style={{ borderColor: themeColor }}
                >
                    <motion.div
                        className="w-1 h-2 rounded-full mt-2"
                        style={{ backgroundColor: themeColor }}
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HomeLayouts