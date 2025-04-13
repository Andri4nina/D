import { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Experience3D from "./components/Experience3D";
import HomeLayouts from "./layouts/HomeLayouts";
import AboutLayouts from "./layouts/AboutLayouts";
import ServiceLayouts from "./layouts/ServiceLayouts";
import CompetenceLayouts from "./layouts/CompetenceLayouts";
import PortfolioLayouts from "./layouts/PortfolioLayouts";
import ParcoursLayouts from "./layouts/ParcoursLayouts";
import ContactLayouts from "./layouts/ContactLayouts";
import CVLayouts from "./layouts/CVLayouts";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ThreeDPage from "./pages/ThreeDPage";
import Loader from "./components/Loader";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);
  const [playGame, setPlayGame] = useState(false);
  const [show3DLoader, setShow3DLoader] = useState(false); // Nouvel état pour le loader 3D
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [themeColor, setThemeColor] = useState(() => {
    return localStorage.getItem("themeColor") || "#3b82f6";
  });
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    return () => clearTimeout(timer);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  // Fonction pour gérer la transition vers le 3D
  useEffect(() => {
    if (playGame) {
      setShow3DLoader(true);
      const timer = setTimeout(() => {
        setShow3DLoader(false);
      }, 1500); // Durée du loader 3D
      return () => clearTimeout(timer);
    }
  }, [playGame]);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    competences: useRef(null),
    parcours: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
    resume: useRef(null)
  };

  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: 'home', ref: sectionRefs.home },
        { id: 'about', ref: sectionRefs.about },
        { id: 'services', ref: sectionRefs.services },
        { id: 'competences', ref: sectionRefs.competences },
        { id: 'portfolio', ref: sectionRefs.portfolio },
        { id: 'parcours', ref: sectionRefs.parcours },
        { id: 'contact', ref: sectionRefs.contact },
        { id: 'resume', ref: sectionRefs.resume }
      ];

      for (const section of sections) {
        if (!section.ref.current) continue;

        const element = section.ref.current;
        const rect = element.getBoundingClientRect();
        const topOffset = rect.top + window.scrollY;
        const bottomOffset = topOffset + rect.height;

        if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  const scrollToSection = (sectionId) => {
    if (loading) return;
    
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Si en mode jeu et le loader 3D est terminé, afficher ThreeDPage
  if (playGame && !show3DLoader) {
    return <ThreeDPage setPlayGame={setPlayGame} />;
  }

  // Afficher le loader 3D pendant la transition
  if (show3DLoader) {
    return <Loader customMessage="Passage en mode 3D..." />;
  }

  // Afficher le loader initial pendant le chargement
  if (loading) {
    return <Loader onLoaded={() => setLoading(false)} />;
  }

  // Contenu principal après le chargement
  return (
    <>
      <section className='relative w-full overflow-x-hidden dark:text-white'>
        <SideBar
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeItem={activeSection}
          setActiveItem={setActiveSection}
          scrollToSection={scrollToSection}
          login={login}
          setLogin={setLogin}
        />

        <div className="fixed z-10 top-0 left-0 h-screen w-full">
          <Experience3D 
            themeColor={themeColor} 
            darkMode={darkMode} 
            sectionRefs={sectionRefs}
            activeSection={activeSection} 
          />
        </div>

        <div className='relative z-20'>
          <div ref={sectionRefs.home} id="home">
            <HomeLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.about} id="about">
            <AboutLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.services} id="services">
            <ServiceLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.competences} id="competences">
            <CompetenceLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.portfolio} id="portfolio">
            <PortfolioLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.parcours} id="parcours">
            <ParcoursLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.contact} id="contact">
            <ContactLayouts themeColor={themeColor} />
          </div>

          <div ref={sectionRefs.resume} id="resume">
            <CVLayouts themeColor={themeColor} />
          </div>

          <Footer setPlayGame={setPlayGame} />
          <Cursor themeColor={themeColor}/>
        </div>
      </section>
    </>
  );
}

export default App;