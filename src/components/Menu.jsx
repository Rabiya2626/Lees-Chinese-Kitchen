import React from 'react';
import { motion } from 'framer-motion';

const MenuCategory = ({ title, items, imageSrc }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6">
      <h3 className="text-2xl md:text-3xl font-bold bg-[#FF9F1C] text-black px-6 py-2 rounded-r-full inline-block uppercase shadow-md shadow-orange-500/20">
        {title}
      </h3>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 relative overflow-hidden">
        {/* Decorative paint stroke effect */}
        <div className="absolute top-0 right-0 w-20 h-full bg-[#FF9F1C] opacity-10 skew-x-12 transform origin-top-right"></div>
        
        <ul className="space-y-3 relative z-10">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-lg border-b border-gray-800 pb-2 last:border-0 last:pb-0">
              <span className="text-gray-100 font-medium">{item.name}</span>
              <span className="text-[#FF9F1C] font-bold text-xl">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {imageSrc && (
        <div className="hidden md:block rounded-full overflow-hidden border-4 border-[#FF9F1C] shadow-2xl shadow-orange-500/10 w-48 h-48 lg:w-64 lg:h-64 mx-auto object-cover bg-black">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  </div>
);

const Menu = () => {
  const menuData = [
    {
      title: "Soups",
      imageSrc: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/34c5294c47f70903ea7a2db374eea826.webp",

      items: [
        { name: "VEG HOT & SOUR SOUP", price: "80" },
        { name: "Veg Manchow Soup", price: "90" },
        { name: "Chicken Hot & Sour Soup", price: "100" },
        { name: "Chicken Manchow Soup", price: "110" },
      ]
    },
    {
      title: "Veg Starters",
      imageSrc: "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
      items: [
        { name: "Veg Manchurian", price: "80" },
        { name: "Gobi Manchurian", price: "90" },
        { name: "Paneer Chilli", price: "120" },
        { name: "Paneer Manchurian", price: "110" },
        { name: "Gobi 65", price: "90" },
        { name: "Gobi Chilli", price: "90" },
        { name: "Paneer 65", price: "120" },
        { name: "Mushroom Chilli", price: "100" },
        { name: "Mushroom 65", price: "110" },
        { name: "Baby Corn 65", price: "90" },
        { name: "Baby Corn Chilli", price: "90" },
      ]
    },
    {
      title: "Non-Veg Starters",
      imageSrc: "https://brightcaterers.com/wp-content/uploads/2021/07/cropped-WhatsApp-Image-2021-07-12-at-5.37.45-AM-9-1.jpeg",

      // imageSrc: "https://horizons-cdn.hostinger.com/a5b8a9fe-a8b3-417b-a965-52f54e33c581/34c5294c47f70903ea7a2db374eea826.webp",
      items: [
        { name: "Chicken 65", price: "130" },
        { name: "Chilli Chicken", price: "130" },
        { name: "Dragon Chicken", price: "140" },
        { name: "Egg Manchurian", price: "90" },
        { name: "Egg Chilli", price: "100" },
        { name: "Chicken Manchurian", price: "120" },
        { name: "Chicken Majestic", price: "130" },
        { name: "Schezwan Chicken", price: "140" },
        { name: "Pepper Chicken", price: "140" },
        { name: "Ginger Chicken", price: "140" },
      ]
    },
    {
      title: "Veg Noodles",
      imageSrc: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
      items: [
        { name: "Veg Noodles", price: "70" },
        { name: "Veg Manchurian Noodles", price: "80" },
        { name: "Gobi Noodles", price: "80" },
        { name: "Veg Garlic Noodles", price: "80" },
        { name: "Veg Schezwan Noodles", price: "90" },
        { name: "Veg Manchurian Schezwan Noodles", price: "90" },
      ]
    },
    {
      title: "Non-Veg Noodles",
      imageSrc: "https://images.unsplash.com/photo-1555126634-323283e090fa",
      items: [
        { name: "Egg Noodles", price: "80" },
        { name: "Double Egg Noodles", price: "90" },
        { name: "Egg Schezwan Noodles", price: "90" },
        { name: "Chicken Noodles", price: "90" },
        { name: "Double Egg Chicken Noodles", price: "100" },
        { name: "Chicken Garlic Noodles", price: "100" },
        { name: "Chicken Schezwan Noodles", price: "100" },
        { name: "Egg Garlic Noodles", price: "90" },
      ]
    },
    {
      title: "Veg Rice",
      imageSrc: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      items: [
        { name: "Veg Fried Rice", price: "70" },
        { name: "Jeera Rice", price: "70" },
        { name: "Veg Manchurian Fried Rice", price: "80" },
        { name: "Gobi Fried Rice", price: "80" },
        { name: "Veg Garlic Fried Rice", price: "80" },
        { name: "Veg Schezwan Fried Rice", price: "80" },
        { name: "Veg Manchurian Schezwan Rice", price: "90" },
        { name: "Schezwan Fried Rice", price: "100" },
      ]
    },
    {
      title: "Non-Veg Rice",
      imageSrc: "https://peddlermart.com/seller_sub_domain/item/item_img68a2b660230a41755493984.png",
      items: [
        { name: "Egg Fried Rice", price: "80" },
        { name: "Double Egg Fried Rice", price: "90" },
        { name: "Egg Schezwan Fried Rice", price: "90" },
        { name: "Chicken Fried Rice", price: "90" },
        { name: "Double Egg Chicken Fried Rice", price: "100" },
        { name: "Chicken Garlic Fried Rice", price: "100" },
        { name: "Chicken Schezwan Fried Rice", price: "100" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF9F1C] uppercase tracking-wider mb-4">Our Menu</h2>
          <p className="text-gray-400 italic">Authentic flavors prepared fresh daily</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
          {menuData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MenuCategory 
                title={category.title} 
                items={category.items} 
                imageSrc={category.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;