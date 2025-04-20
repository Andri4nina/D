import { useState, useRef } from "react";

const MobileControls = () => {
    const joystickRef = useRef(null);
    const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
    const [joystickActive, setJoystickActive] = useState(false);
    const joystickBase = useRef({ x: 0, y: 0 });

    // Simuler une touche clavier
    const simulateKey = (key, type) => {
        const event = new KeyboardEvent(type, {
            key,
            code: `Key${key.toUpperCase()}`,
            keyCode: key.charCodeAt(0),
            which: key.charCodeAt(0),
            bubbles: true
        });
        document.dispatchEvent(event);
    };

    // Gestion du joystick
    const startJoystick = (e) => {
        const rect = joystickRef.current.getBoundingClientRect();
        joystickBase.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        setJoystickActive(true);
        updateJoystick(e);
    };

    const updateJoystick = (e) => {
        if (!joystickActive) return;

        const touch = e.touches ? e.touches[0] : e;
        const deltaX = touch.clientX - joystickBase.current.x;
        const deltaY = touch.clientY - joystickBase.current.y;
        const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 40);

        const angle = Math.atan2(deltaY, deltaX);
        const newX = distance * Math.cos(angle);
        const newY = distance * Math.sin(angle);

        setJoystickPos({ x: newX, y: newY });

        // Activer les touches selon la direction
        simulateKey('w', newY < -15 ? 'keydown' : 'keyup');
        simulateKey('s', newY > 15 ? 'keydown' : 'keyup');
        simulateKey('a', newX < -15 ? 'keydown' : 'keyup');
        simulateKey('d', newX > 15 ? 'keydown' : 'keyup');
    };

    const endJoystick = () => {
        setJoystickPos({ x: 0, y: 0 });
        setJoystickActive(false);
        ['w', 'a', 's', 'd'].forEach(key => simulateKey(key, 'keyup'));
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Bouton Start - Top Left - Version améliorée */}
            <button
                onClick={() => {
                    simulateKey('p', 'keydown');
                    setTimeout(() => simulateKey('p', 'keyup'), 100);
                }}
                className="pointer-events-auto absolute top-4 left-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all group"
                style={{
                    background: 'radial-gradient(circle at 65% 35%, rgba(74,222,128,0.9) 0%, rgba(22,163,74,0.85) 70%)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 4px 15px rgba(34,197,94,0.4), inset 0 1px 1px rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.15)'
                }}
            >
                <span className="group-active:scale-90 transition-transform">Start</span>
                {/* Effet de halo au hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(74,222,128,1) 0%, transparent 70%)'
                    }}></div>
            </button>

            {/* Joystick - Bottom Left - Version premium */}
            <div
                ref={joystickRef}
                className="pointer-events-auto absolute bottom-5 left-8 w-28 h-28"
            >
                {/* Base du joystick améliorée */}
                <div className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(31,41,55,0.5) 0%, rgba(17,24,39,0.6) 100%)',
                        backdropFilter: 'blur(6px)',
                        boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                    {/* Marques directionnelles */}
                    <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="absolute w-2 h-2 bg-white/30 rounded-full"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-40px)`
                                }}></div>
                        ))}
                    </div>
                </div>

                {/* Bouton du joystick premium */}
                <div
                    className="absolute w-14 h-14 rounded-full shadow-lg transition-transform duration-150 z-10"
                    style={{
                        transform: `translate(calc(50% + ${joystickPos.x}px), calc(50% + ${joystickPos.y}px)`,
                        left: '0%',
                        top: '0%',
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(229,231,235,0.9) 100%)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
                        border: '1px solid rgba(255,255,255,0.3)'
                    }}
                ></div>

                {/* Zone de détection (inchangée fonctionnellement) */}
                <div
                    className="absolute inset-0 opacity-0"
                    onTouchStart={startJoystick}
                    onTouchMove={updateJoystick}
                    onTouchEnd={endJoystick}
                    onMouseDown={startJoystick}
                    onMouseMove={updateJoystick}
                    onMouseUp={endJoystick}
                    onMouseLeave={endJoystick}
                ></div>
            </div>

            {/* Boutons Haut/Bas - Bottom Right - Version design */}
            <div className="pointer-events-auto absolute bottom-8 right-8 flex flex-col gap-5">
                <button
                    onTouchStart={() => simulateKey('z', 'keydown')}
                    onTouchEnd={() => simulateKey('z', 'keyup')}
                    onMouseDown={() => simulateKey('z', 'keydown')}
                    onMouseUp={() => simulateKey('z', 'keyup')}
                    onMouseLeave={() => simulateKey('z', 'keyup')}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all relative overflow-hidden group"
                    style={{
                        background: 'radial-gradient(circle at 65% 35%, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.85) 70%)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 4px 15px rgba(59,130,246,0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.15)'
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-active:translate-y-[1px] transition-transform">
                        <path d="M5 15l7-7 7 7" />
                    </svg>
                    {/* Effet de clic */}
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-active:opacity-100 scale-0 group-active:scale-100 transition-all duration-150"></div>
                </button>

                <button
                    onTouchStart={() => simulateKey('x', 'keydown')}
                    onTouchEnd={() => simulateKey('x', 'keyup')}
                    onMouseDown={() => simulateKey('x', 'keydown')}
                    onMouseUp={() => simulateKey('x', 'keyup')}
                    onMouseLeave={() => simulateKey('x', 'keyup')}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all relative overflow-hidden group"
                    style={{
                        background: 'radial-gradient(circle at 65% 35%, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.85) 70%)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 4px 15px rgba(59,130,246,0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.15)'
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-active:translate-y-[1px] transition-transform">
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* Effet de clic */}
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-active:opacity-100 scale-0 group-active:scale-100 transition-all duration-150"></div>
                </button>
            </div>
        </div>
    );
};

export default MobileControls;