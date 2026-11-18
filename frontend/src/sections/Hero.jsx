import React, { useEffect, useState } from 'react';
import {
  Box, Container, Typography, Button, IconButton, Avatar, Chip, Stack
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  ArrowDownward as ArrowDownIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';
import image from '../assets/mine.png'
const roles = ['Full-Stack Developer', 'React.js Developer', 'Node.js Developer', 'MERN Stack Developer'];

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(6,182,212,0.6)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Gradient orbs */}
      <Box sx={{ position: 'absolute', width: 500, height: 500, top: '-10%', right: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <Box sx={{ position: 'absolute', width: 400, height: 400, bottom: '10%', left: '-5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      {/* Grid */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </Box>
  );
};

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts]);

  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 800,
          minWidth: 300,
          display: 'inline-block',
        }}
      >
        {displayed}
      </Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: 3,
          height: '1em',
          background: '#7C3AED',
          borderRadius: 1,
          animation: 'blink 1s infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Box>
  );
};

const Hero = () => {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 10, md: 8 },
        pb: 4,
        overflow: 'hidden',
      }}
    >
      <ParticleBackground />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Stack spacing={3}>
              <motion.div variants={fadeInUp}>
                <Chip
                  label="👋 Available for Work"
                  size="small"
                  sx={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    border: '1px solid rgba(16,185,129,0.3)',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Harihara Viswa
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.6rem' },
                    fontWeight: 400,
                    color: 'text.secondary',
                    lineHeight: 1.5,
                  }}
                >
                  A passionate{' '}
                  <TypewriterText texts={roles} />
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    maxWidth: 500,
                    lineHeight: 1.8,
                  }}
                >
                  I craft high-performance web applications using the Full stack. 
                  With 2+ years of experience, I transform ideas into elegant digital solutions.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<VisibilityIcon />}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
                      boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)',
                        boxShadow: '0 6px 25px rgba(124,58,237,0.6)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    component="a"
                    href="C:\Users\skart\Downloads\Harihara_Viswa_M_FINAL.pdf"
                    download
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: 'rgba(124,58,237,0.5)',
                      color: '#7C3AED',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: '#7C3AED',
                        background: 'rgba(124,58,237,0.08)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Resume
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem', letterSpacing: 1 }}>
                    CONNECT
                  </Typography>
                  <Box sx={{ width: 30, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                  {[
                    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
                    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/harihara-viswa-115459276/', label: 'LinkedIn' },
                    { icon: <EmailIcon />, href: 'hariharaviswa2909@gmail.com', label: 'Email' },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          color: 'text.secondary',
                          border: '1px solid rgba(255,255,255,0.08)',
                          background: 'rgba(255,255,255,0.03)',
                          '&:hover': {
                            color: '#7C3AED',
                            border: '1px solid rgba(124,58,237,0.4)',
                            background: 'rgba(124,58,237,0.08)',
                          },
                          transition: 'all 0.2s',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Stack>
          </motion.div>

          {/* Right side — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              {/* Animated gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -6,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, #7C3AED)',
                  zIndex: 0,
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -3,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 180deg, transparent 60%, rgba(124,58,237,0.5) 100%)',
                  zIndex: 0,
                }}
              />
              <Avatar
                src= {image}
                alt="Harihara viswa"
                sx={{
                  width: { xs: 220, md: 300, lg: 350 },
                  height: { xs: 220, md: 300, lg: 350 },
                  position: 'relative',
                  zIndex: 1,
                  border: '6px solid #0B0F19',
                  background: 'linear-gradient(135deg, #111827, #1F2937)',
                  fontSize: '8rem',
                }}
              />
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ position: 'absolute', top: 10, right: -30, zIndex: 2 }}
              >
                <Box sx={{ background: 'rgba(124,58,237,0.9)', backdropFilter: 'blur(10px)', borderRadius: 2, px: 1.5, py: 0.8, border: '1px solid rgba(124,58,237,0.5)', boxShadow: '0 4px 15px rgba(124,58,237,0.3)' }}>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>⚛️ React.js</Typography>
                </Box>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                style={{ position: 'absolute', bottom: 30, left: -40, zIndex: 2 }}
              >
                <Box sx={{ background: 'rgba(6,182,212,0.9)', backdropFilter: 'blur(10px)', borderRadius: 2, px: 1.5, py: 0.8, border: '1px solid rgba(6,182,212,0.5)', boxShadow: '0 4px 15px rgba(6,182,212,0.3)' }}>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>🟢 Node.js</Typography>
                </Box>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                style={{ position: 'absolute', bottom: -20, right: -10, zIndex: 2 }}
              >
                <Box sx={{ background: 'rgba(16,185,129,0.9)', backdropFilter: 'blur(10px)', borderRadius: 2, px: 1.5, py: 0.8, border: '1px solid rgba(16,185,129,0.5)', boxShadow: '0 4px 15px rgba(16,185,129,0.3)' }}>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>🍃 MongoDB</Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconButton
              onClick={handleScrollDown}
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': { color: '#7C3AED', borderColor: 'rgba(124,58,237,0.4)' },
              }}
            >
              <ArrowDownIcon />
            </IconButton>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
