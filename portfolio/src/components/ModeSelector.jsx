import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"; // Importer gsap
import "./ModeSelector.css";

const ModeSelector = ({ darkMode, setDarkMode }) => {
    const svgRef = useRef(null); // Référence à l'élément SVG

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode); // Inverser l'état de darkMode
    };
    // Utiliser useEffect pour appliquer une animation de rotation à l'icône lors du changement de darkMode
    useEffect(() => {
        gsap.fromTo(
            svgRef.current,
            { rotation: 0 }, // Initialiser la rotation à 0
            { rotation: 360, duration: 0.5, ease: "power2.out" } // Animation de rotation
        );
    }, [darkMode]); // L'animation se déclenche chaque fois que darkMode change

    return (
        <div className="container relative w-[30px] h-[30px] text-black">
            {/* Toggle button */}
            <div
                className="relative z-10 cursor-pointer block toggle"
                htmlFor="switch"
                onClick={toggleDarkMode}
            >
                <input
                    id="switch"
                    className="input"
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />

                {/* Icones de Soleil et Lune */}
                <div className={`icon ${darkMode ? "icon--sun" : "icon--moon"}`}>
                    {darkMode ? (
                        <svg
                            ref={svgRef} // Attacher la référence GSAP
                            height="20"
                            width="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    ) : (
                        <svg
                            ref={svgRef} // Attacher la référence GSAP
                            height="20"
                            width="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    )}
                </div>
            </div>

            {/* Animation du bouton de Light/Dark mode */}
            <div
                className="w-[50px] z-0 rounded-full animate-ping h-full  absolute top-0 left-0"
            ></div>
        </div>
    )
}

export default ModeSelector