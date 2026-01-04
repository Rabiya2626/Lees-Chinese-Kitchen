import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:8886611227';
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-[#111111]">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-60" 
          alt="Chinese spicy noodles dark background"
          src="https://images.unsplash.com/photo-1552611052-33e04de081de" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white uppercase drop-shadow-lg">
            Lee's <span className="text-[#FF9F1C]">Chinese Kitchen</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-200 mb-10 font-medium italic tracking-wide">
            Taste The Spice....Enjoy The Freshness
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleCall}
              className="bg-[#FF9F1C] hover:bg-[#E08900] text-black font-bold px-10 py-6 text-xl rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#FF9F1C]/20 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> Order Now
            </Button>
            <Button 
              onClick={scrollToMenu}
              className="border-2 border-white bg-transparent !text-white hover:bg-white hover:!text-black font-bold px-10 py-6 text-xl rounded-full transition-transform hover:scale-105"
            >
              View Menu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;