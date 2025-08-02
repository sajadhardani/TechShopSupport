import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css';
import Hero from './components/Hero/Hero';
import Service from './components/Services/Service';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore.jsx/AppStore';
import Footer from './components/Footer/Footer';
import Testimonial from '../src/components/Testimonial/Testimonial.jsx'

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {



  useEffect(() => {
    AOS.init ({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);



  return (
    
    
    <div>
    
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
      </div>
  )
 }

export default App