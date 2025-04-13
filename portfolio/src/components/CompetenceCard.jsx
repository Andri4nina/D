import React from 'react';

const CompetenceCard = ({ name, icon: Icon, level, color }) => {
  return (
    <div className='
      bg-white dark:bg-gray-800 
      rounded-xl shadow-md 
      p-6 hover:shadow-lg 
      transition-all duration-300 
      hover:-translate-y-1 
      border border-gray-100 dark:border-gray-700
      flex flex-col
    '>
      {/* Icone et Nom */}
      <div className='flex items-center gap-4 mb-4'>
        <div 
          className='p-3 rounded-lg'
          style={{ backgroundColor: `${color}20`, color }} // 20 = opacity 20% en hex
        >
          <Icon className='text-2xl' />
        </div>
        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>{name}</h3>
      </div>
      
      {/* Barre de progression (conditionnelle) */}
      {level && (
        <div className='mt-auto'>
          <div className='flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1'>
            <span>Maîtrise</span>
            <span>{level}%</span>
          </div>
          <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
            <div 
              className='h-2 rounded-full transition-all duration-500 ease-out' 
              style={{ width: `${level}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetenceCard;