import React from 'react';
import Billboard from '../components/3d/Billboard';


const TeamScene = () => {
    const teamTextures = [
        "/textures/teamMate/ArtKaody.jpg",
        "/textures/teamMate/Digivol.jpeg",
        "/textures/teamMate/TechN.jpg",
        "/textures/teamMate/Edat.jpg"
    ];

    return (
        <>
            <group position={[-25, 0, 0]}>
                {teamTextures.map((texture, index) => (
                    <group key={index} position={[0, 0, -index * 9]} rotation={[0, Math.PI / 6, 0]}>
                        <Billboard texture={texture} />
                    </group>
                ))}
            </group>
        </>
    );
}

export default TeamScene;
