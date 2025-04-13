import React from 'react';
import {
    FaReact,
    FaLaravel,
    FaBootstrap,
    FaJava,
    FaPython,
    FaPhp,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaCuttlefish
} from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const darkenColor = (hex, percent) => {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const Planetaire = ({ themeColor }) => {
    const darkerColor = darkenColor(themeColor, 20);
    const gradientFrom = themeColor;
    const gradientTo = darkerColor;

    return (
        <div>
            <h4 
                className="text-center"
                data-aos="fade-down"
                data-aos-delay="100"
            >
                TECHNOLOGIE
            </h4>

            <div className="relative  technoContainer">
                <div className="mt-5 text-white" >
                    {/* Première ligne d'icônes */}
                    <div className="flex gap-2 justify-center">
                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems react"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaReact className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems laravel"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaLaravel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems bootstrap"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaBootstrap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems tailwind"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <SiTailwindcss className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems java"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaJava className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems csharp"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <TbBrandCSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Deuxième ligne d'icônes */}
                    <div className="mt-2 flex gap-2 justify-center">
                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems cuttlefish"
                            data-aos="fade-right"
                            data-aos-delay="500"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaCuttlefish className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems python"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaPython className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div 
                            className="relative circletechno h-[40px] w-[40px] rounded-full text-xl z-10 technoitems php"
                            data-aos="fade-left"
                            data-aos-delay="500"
                            style={{
                                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            }}>
                            <FaPhp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>

                {/* Planète centrale */}
                <div
                    className="mx-auto w-28 h-28 relative text-white rounded-full mt-[150px] mb-20 z-10"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    style={{
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                        color: 'white',
                        boxShadow: `5px 0px 50px ${gradientFrom}`
                    }}
                >
                    <div 
                        className="absolute bottom-0 left-0 -translate-x-[37%] rounded-[100%] w-[500px] h-[50px] jsCircle"
                        data-aos="fade-right"
                        data-aos-delay="800"
                        style={{
                            borderBottom: `2px solid ${gradientFrom}`,
                        }}
                    ></div>
                    
                    <div 
                        className="absolute bottom-[20px] left-0 -translate-x-[22%] rotate-[22deg] rounded-[100%] w-[200px] h-[50px] htmlCircle"
                        data-aos="fade-right"
                        data-aos-delay="900"
                        style={{
                            borderBottom: `2px solid ${gradientFrom}`,
                        }}
                    ></div>
                    
                    <div 
                        className="absolute bottom-[20px] left-0 origin-center -translate-x-[35%] -translate-y-[20%] -rotate-[50deg] rounded-[100%] w-[350px] h-[50px] cssCircle"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        style={{
                            borderBottom: `2px solid ${gradientFrom}`,
                        }}
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-5xl">
                        A
                    </div>

                    <div 
                        className="absolute -left-48 top-16 text-white circletechno h-[40px] w-[40px] rounded-full text-xl z-10"
                        data-aos="fade-right"
                        data-aos-delay="1100"
                    >
                        <FaJs className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    
                    <div 
                        className="absolute -right-10 bottom-0 text-white circletechno h-[40px] w-[40px] rounded-full text-xl z-10"
                        data-aos="fade-left"
                        data-aos-delay="1100"
                    >
                        <FaHtml5 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    
                    <div 
                        className="absolute -left-8 -bottom-16 text-white circletechno h-[40px] w-[40px] rounded-full text-xl z-10"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        <FaCss3Alt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                <style jsx>{`
                    .python::before,
                    .cuttlefish::before,
                    .bootstrap::before,
                    .laravel::before,
                    .react::before {
                        border-left: 2px solid ${gradientFrom};
                    }
                    
                    .python::before,
                    .php::before,
                    .csharp::before, 
                    .java::before,
                    .tailwind::before {
                        border-right: 2px solid ${gradientFrom};
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Planetaire;