import React, { useState } from "react";

const VolumeSelected = ({ setMute }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    setMute((prev) => !prev);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="hidden"
        id="checkboxInput"
        checked={isMuted}
        onChange={toggleMute}
      />
      <label
        htmlFor="checkboxInput"
        className="w-[50px] h-[50px] relative flex items-center justify-center bg-gray-700 rounded-full cursor-pointer overflow-hidden hover:bg-gray-600 transition-colors"
      >
        {/* Icône haut-parleur actif */}
        <div
          className={`speaker w-full h-full flex justify-center items-center absolute transition-opacity ${
            isMuted ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" className="w-[18px]">
            <path
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
              style={{
                stroke: "#fff",
                strokeWidth: 5,
                strokeLinejoin: "round",
                fill: "#fff",
              }}
            />
            <path
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
              style={{
                fill: "#fff",
                stroke: "#fff",
                strokeWidth: 5,
                strokeLinecap: "round",
              }}
            />
          </svg>
        </div>

        {/* Icône muet */}
        <div
          className={`mute-speaker absolute w-full h-full flex items-center justify-center transition-opacity ${
            isMuted ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg version="1.0" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5" className="w-[18px]">
            <path
              d="m39,14-17,15H6V48H22l17,15z"
              fill="#fff"
              strokeLinejoin="round"
            />
            <path d="m49,26 20,24m0-24-20,24" fill="#fff" strokeLinecap="round" />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default VolumeSelected;