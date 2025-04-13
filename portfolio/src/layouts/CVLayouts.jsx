import React from 'react'

const CVLayouts = ({ themeColor }) => {

    return (
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950" id="cv">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: themeColor }}>
                    Mon Curriculum Vitae
                </h2>

                <div className="grid grid-cols-1  gap-12 items-center">
                    {/* Photo et bouton */}
                    <div className="flex flex-col items-center justify-center space-y-8">

                        <a
                            href="/files/CV.pdf"
                            download="CV Andrianina.pdf"
                            className="px-8 py-3 rounded-md text-white font-bold text-lg flex items-center space-x-2 hover:scale-105 transition-transform"
                            style={{ backgroundColor: themeColor }}
                        >
                            <span>Télécharger mon CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default CVLayouts