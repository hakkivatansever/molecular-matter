import React from 'react';

export default function MyCard({ title, description, imageUrl, buttonText }) {


  return (
    
    <div class="max-w-xs bg-white rounded-xl shadow-md overflow-hidden p-4 m-4">
      
      
      <img class="w-full h-40 object-cover rounded-lg" src={imageUrl} alt={title} />
      
     
      <h3 class="text-xl font-bold mt-3 text-gray-800">{title}</h3>
      
     
      <p class="text-gray-600 text-sm mt-1 mb-4">{description}</p>
      
      

      <button 
        onClick={() => alert(`${title} butonuna tiklandi!`)}
        class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 "
      >
        {buttonText}

      </button>

    </div>
  );
}