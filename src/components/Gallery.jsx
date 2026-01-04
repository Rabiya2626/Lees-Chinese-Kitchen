import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { 
      alt: "Spicy Chicken Starters", 
      url: "https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375-750x750.jpg"
    },
    { 
      alt: "Fried Rice Bowl", 
      url: "https://content.jdmagicbox.com/v2/comp/mumbai/50/022p880150/catalogue/femistic-chinese-fast-food-bhendi-bazar-mumbai-fast-food-CvYK8gNFXx.jpg"
    },
    { 
      alt: "Crispy Appetizer", 
      url: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/416e4a5dd39a625ef5cb2bafd54ed75a.jpg" 
    },
    { 
      alt: "Chicken 65", 
      url: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/64721fa96f99214de71d8d97f3dbed4c.jpg" 
    },
    { 
      alt: "Hakka Noodles", 
      url: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/151802adf42c1011b8fb5df6070db414.jpg" 
    },
    { 
      alt: "Vegetable Noodles", 
      url: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/7464e78531e8fa0efcff155dc70ebde3.jpg" 
    },
    { 
      alt: "Chicken Soup", 
      url: "https://cdn.uengage.io/uploads/7057/image-6716-1666791013.jpg" 
    },
    { 
      alt: "Chicken Soup", 
      url: "https://cdn.uengage.io/uploads/7057/image-9165-1761799622.jpeg" 
    },
    { 
      alt: "Chicken Soup", 
      url: "https://ae.freshtohome.com/blog/wp-content/uploads/2024/08/ChickenStarter1.png" 
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FF9F1C] text-center mb-12 uppercase">Food Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`aspect-square relative overflow-hidden rounded-xl cursor-pointer group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;