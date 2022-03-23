import React from 'react';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
// import Why from "./sections/Why";
import Blogs from './sections/Blogs';
import ScrollToTop from './components/ScrollToTop';
import { motion } from 'framer-motion';
import { withRoot } from './withRoot';
import Register from './sections/Register';
import Schedule from './sections/Schedule';
import Connect from './sections/Connect';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Hero />
      <About />
      <Schedule />
      <Blogs />
      {/* <Why /> */}
      <Testimonials />
      <Register />
      <Connect />
      {/* <Footer /> */}
    </motion.div>
  );
}
export default App;
