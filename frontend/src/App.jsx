import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Loading screen component
const LoadingScreen = () => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      background: '#0B0F19',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      gap: 2,
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#7C3AED',
          borderRightColor: '#06B6D4',
        }}
      />
    </motion.div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif', fontSize: '14px', letterSpacing: '2px' }}
    >
      LOADING...
    </motion.p>
  </Box>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Box id="home"><Hero /></Box>
            <Box id="about"><About /></Box>
            <Box id="skills"><Skills /></Box>
            <Box id="projects"><Projects /></Box>
            <Box id="experience"><Experience /></Box>
            <Box id="education"><Education /></Box>
            <Box id="contact"><Contact /></Box>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
