import React, { useEffect } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactLayouts = ({ themeColor }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis');
    };

    return (
        <section className="py-20 px-4 dark:text-white bg-slate-50 dark:bg-slate-950" id="contact">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-bold mb-12 text-center"
                    style={{ color: themeColor }}
                    data-aos="fade-down"
                >
                    Contactez-moi
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Formulaire de contact */}
                    <div data-aos="fade-right" data-aos-delay="100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div data-aos="fade-right" data-aos-delay="150">
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-b-4 transition-all placeholder:text-slate-400"
                                    style={{ borderColor: themeColor }}
                                    required
                                />
                            </div>

                            <div data-aos="fade-right" data-aos-delay="200">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-b-4 transition-all placeholder:text-slate-400"
                                    style={{ borderColor: themeColor }}
                                    required
                                />
                            </div>

                            <div data-aos="fade-right" data-aos-delay="250">
                                <input
                                    type="text"
                                    placeholder="Sujet"
                                    className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-b-4 transition-all placeholder:text-slate-400"
                                    style={{ borderColor: themeColor }}
                                    required
                                />
                            </div>

                            <div data-aos="fade-right" data-aos-delay="300">
                                <textarea
                                    placeholder="Votre message"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none focus:border-b-4 transition-all placeholder:text-slate-400"
                                    style={{ borderColor: themeColor }}
                                    required
                                ></textarea>
                            </div>

                            <div data-aos="fade-right" data-aos-delay="350">
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-md text-white font-medium flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                                    style={{ backgroundColor: themeColor }}
                                >
                                    <span>Envoyer</span>
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div
                            className="flex items-start space-x-4"
                            data-aos="fade-left"
                            data-aos-delay="150"
                        >
                            <div className="p-3 rounded-full" style={{ backgroundColor: themeColor + '20', color: themeColor }}>
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 dark:text-white">Localisation</h3>
                                <p className="text-gray-600 dark:text-gray-300">Fianarantsoa, Madagascar</p>
                            </div>
                        </div>

                        <div
                            className="flex items-start space-x-4"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <div className="p-3 rounded-full" style={{ backgroundColor: themeColor + '20', color: themeColor }}>
                                <FaPhone className="text-xl rotate-90" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 dark:text-white">Téléphone</h3>
                                <p className="text-gray-600 dark:text-gray-300">+261 34 13 208 74</p>
                            </div>
                        </div>

                        <div
                            className="flex items-start space-x-4"
                            data-aos="fade-left"
                            data-aos-delay="250"
                        >
                            <div className="p-3 rounded-full" style={{ backgroundColor: themeColor + '20', color: themeColor }}>
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 dark:text-white">Email</h3>
                                <a
                                    href="mailto:raso4m4ndrianina@gmail.com"
                                    className="text-gray-600 dark:text-gray-300 hover:underline"
                                >
                                    raso4m4ndrianina@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactLayouts