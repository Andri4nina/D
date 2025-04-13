import React from 'react';

const ColorSelector = ({ themeColor, setThemeColor }) => {
  const handleColorChange = (event) => {
    setThemeColor(event.target.value); // Met à jour la couleur sélectionnée
  };

  return (
    <div className="relative border-2 dark:border-slate-950 border-slate-50 w-[30px] h-[30px] rounded-full overflow-hidden">
      <input
        id="drone-color"
        type="color"
        value={themeColor} // Utilise la couleur actuelle
        onChange={handleColorChange} // Gère le changement de couleur
        className="absolute -translate-y-5 -translate-x-5 w-[80px] h-[80px] cursor-pointer"
        style={{
          appearance: "none", // Supprime l'apparence par défaut de l'input
          backgroundColor: "transparent", // Fond transparent
          padding: 0, // Supprime le padding par défaut
        }}
      />
    </div>
  );
};

export default ColorSelector;