import React, { useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaPalette } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServiceLayouts = ({ themeColor }) => {
    useEffect(() => {
      AOS.init({
        duration: 800,
        once: false
      });
    }, []);
  
    const services = [
      {
        title: "Développement Web",
        icon: <FaLaptopCode className="text-4xl" />,
        description: "Création de sites web modernes et réactifs avec ReactJs et Tailwind CSS. Interfaces utilisateur optimisées pour une expérience fluide et intuitive.",
        aosDelay: "100"
      },
      {
        title: "Applications Mobile",
        icon: <FaMobileAlt className="text-4xl" />,
        description: "Développement d'applications mobiles cross-platform avec React Native. Performantes, esthétiques et adaptées à tous les appareils.",
        aosDelay: "200"
      },
      {
        title: "Applications Desktop",
        icon: <FaDesktop className="text-4xl" />,
        description: "Solutions logicielles Windows/macOS avec Java et C#. Applications robustes, sécurisées et hautement performantes.",
        aosDelay: "300"
      },
      {
        title: "Design UI/UX",
        icon: <FaPalette className="text-4xl" />,
        description: "Conception d'interfaces suivant les meilleures pratiques. Wireframes, prototypes et designs finaux pour une expérience utilisateur optimale.",
        aosDelay: "400"
      }
    ];
  
    return (
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center" style={{ color: themeColor }}>
              Mes Services
            </h2>
            <p 
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Des solutions complètes pour vos besoins numériques
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-opacity-20"
                style={{ 
                  borderColor: themeColor,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="flex justify-center mb-6 p-4 rounded-full bg-opacity-10 inline-block mx-auto"
                  style={{ 
                    backgroundColor: `${themeColor}20`,
                    transform: 'translateZ(20px)'
                  }}
                >
                  <div style={{ color: themeColor }}>
                    {service.icon}
                  </div>
                </div>
                <h3 
                  className="text-2xl font-bold mb-4 text-center"
                  style={{ color: themeColor }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default ServiceLayouts