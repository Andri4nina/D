import React from 'react'
import { FaGamepad } from 'react-icons/fa';

const Footer =  ({ playGame, setPlayGame }) => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mon Portfolio - Tous droits réservés
          </p>
        </div>

        <div className="flex space-x-6">
          <button
            onClick={() => setPlayGame(!playGame)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all bg-indigo-600 hover:bg-indigo-700
            `}
          >
            <FaGamepad />
            <span>
              Mode Immersif 3D
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer