import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-4 bg-[#161616] text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF9F1C] mb-6 uppercase tracking-wide">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="text-[#FF9F1C] font-semibold">Lee's Chinese Kitchen</span>, Lee’s Chinese Kitchen is dedicated to bringing you authentic Chinese flavors made with fresh ingredients and traditional cooking techniques. Our menu features a wide variety of soups, starters, noodles, and rice dishes, each prepared with care to deliver rich taste and consistent quality.
          </p>
    

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

            We believe that great food starts with the right ingredients and attention to detail. Every dish is freshly prepared using high-quality vegetables, carefully selected spices, and time-tested recipes that reflect the true essence of Chinese cuisine. Whether you are craving a quick meal or planning a relaxed dining experience, our kitchen ensures satisfying flavors in every bite.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

At Lee’s Chinese Kitchen, we value hygiene, quality, and customer satisfaction. With warm service and a welcoming atmosphere, we aim to make every visit enjoyable. Dine in, take away, or order online, and experience Chinese food crafted with passion and authenticity.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;