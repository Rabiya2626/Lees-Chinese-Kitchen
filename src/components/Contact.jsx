import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleCall = () => {
    window.location.href = 'tel:8886611227';
  };

  return (
    <section id="contact" className="py-20 bg-[#111111] text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#FF9F1C] mb-8 uppercase">Visit Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FF9F1C]/20 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-[#FF9F1C]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Our Location</h3>
            <p className="text-gray-300 text-lg px-4">
              Chinese Hub, TNGO'S COLONY, Phase 2, Gachibowli, Gowlidoddy Area, Financial District, 500046
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FF9F1C]/20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#FF9F1C]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Order Now</h3>
            <p className="text-gray-300 text-lg mb-4">+91 8886611227</p>
            <Button 
              onClick={handleCall}
              className="bg-[#FF9F1C] hover:bg-[#E08900] text-black font-bold rounded-full px-8"
            >
              Call to Order
            </Button>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 inline-block w-full max-w-2xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Available On</h3>
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" 
                  alt="Zomato" 
                  className="w-full h-auto"
                />
              </div>
              <span className="text-gray-400 font-medium">Zomato</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-xl flex items-center justify-center p-2 shadow-lg">
                <img 
                    src="https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/a4482ed0973a7a3840a99d4c73de0701.png" 

                //   src="https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/34c5294c47f70903ea7a2db374eea826.webp" 
                  alt="Swiggy" 
                  className="w-full h-auto"
                />
              </div>
              <span className="text-gray-400 font-medium">Swiggy</span>
            </div>
          </div>
        </div>
        
        {/* Embedded Google Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452664746813!2d78.3496660751662!3d17.437792683457786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a37d896475%3A0x8673322b621e8e89!2sChinese%20Hub!5e0!3m2!1sen!2sin!4v1709664585123!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lee's Chinese Kitchen Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;