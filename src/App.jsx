import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Lee's Chinese Kitchen - Authentic Chinese Fast Food in Hyderabad</title>
        <meta name="description" content="Experience the authentic taste of Chinese cuisine at Lee's Chinese Kitchen in Madhapur, Hyderabad. Taste the spice, enjoy the freshness." />
      </Helmet>
      <div className="min-h-screen bg-[#111111] text-white font-poppins">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;


