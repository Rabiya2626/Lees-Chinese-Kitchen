import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2 uppercase">
            Lee's <span className="text-[#FF9F1C]">Chinese Kitchen</span>
          </h2>
          <p className="text-gray-500 italic">Taste The Spice....Enjoy The Freshness</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300">
            <MapPin className="w-5 h-5 text-[#FF9F1C]" />
            <span>Chinese Hub, TNGO'S COLONY, Phase 2, Gachibowli, Gowlidoddy Area, Financial District, 500046</span>
          </div>
          <a href="tel:8886611227" className="flex items-center gap-3 justify-center md:justify-start text-gray-300 hover:text-[#FF9F1C] transition-colors">
            <Phone className="w-5 h-5 text-[#FF9F1C]" />
            <span>+91 8886611227</span>
          </a>
        </div>

        <div className="flex gap-4 items-center bg-gray-900 px-4 py-2 rounded-lg">
           <span className="text-sm text-gray-400">Find us on:</span>
           <img 
             src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" 
             alt="Zomato" 
             className="h-6 w-auto bg-white p-1 rounded"
           />
           <img 
             src="https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/a4482ed0973a7a3840a99d4c73de0701.png" 
             alt="Swiggy" 
             className="h-6 w-auto bg-transparent p-1 rounded" 
           />
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-700 text-sm">
        <p>&copy; {new Date().getFullYear()} Lee's Chinese Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;