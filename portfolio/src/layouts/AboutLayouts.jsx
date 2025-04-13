import React, { useEffect } from 'react';
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie, FaLaptopCode, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutLayouts = ({ themeColor }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });
    }, []);

    const profileItems = [
        { icon: <FaUserTie className="mr-2" />, label: "Expérience", value: "1 an", delay: "300" },
        { icon: <FaLaptopCode className="mr-2" />, label: "Spécialité", value: "Front-end", delay: "350" },
        { icon: <FaMapMarkerAlt className="mr-2" />, label: "Adresse", value: "Antananarivo, Madagascar", delay: "400" },
        { icon: <FaEnvelope className="mr-2" />, label: "E-mail", value: <a href="mailto:raso4m4ndrianina@gmail.com" className="hover:underline">raso4m4ndrianina@gmail.com</a>, delay: "450" },
        { icon: <FaPhone className="mr-2 rotate-90" />, label: "Téléphone", value: "+261 34 13 208 74", delay: "500" },
        { icon: <FaGraduationCap className="mr-2" />, label: "Niveau d'étude", value: "Master 1 Science des données et IA", delay: "550" },
        { icon: <FaCalendarAlt className="mr-2" />, label: "Freelance", value: "Disponible", delay: "600" }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center py-20 z-40" id="renseignement">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 w-full">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                    style={{ color: themeColor }}
                    data-aos="fade-up"
                >
                    Renseignement
                </h2>
                <div
                    className=" p-8 md:p-12 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2 flex justify-center">
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4
                                className="text-3xl md:text-4xl font-bold mb-6"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Je suis <span style={{ color: themeColor }}>Andrianina</span>
                            </h4>
                            <div
                                className="h-1 w-24 mb-8 rounded-full"
                                style={{ backgroundColor: themeColor }}
                                data-aos="fade-up"
                                data-aos-delay="250"
                            ></div>
                            <div className="space-y-4">
                                {profileItems.map((item, index) => (
                                    <ProfileInfo
                                        key={index}
                                        icon={item.icon}
                                        label={item.label}
                                        value={item.value}
                                        delay={item.delay}
                                    />
                                ))}
                            </div>
                            <div
                                className="mt-10 text-center lg:text-left"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <a
                                    href="#projects"
                                    className="inline-flex items-center px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
                                    style={{ background: themeColor }}
                                >
                                    Voir mes projets <FaArrowRight className="ml-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProfileInfo = ({ icon, label, value, delay }) => (
    <div
        className="flex items-start p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <span className="text-lg mt-1" style={{ color: 'inherit' }}>{icon}</span>
        <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{value}</p>
        </div>
    </div>
);

export default AboutLayouts