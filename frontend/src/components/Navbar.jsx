import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, useTheme, useMediaQuery, Container
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Code as CodeIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(11, 15, 25, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, md: 2 }, py: 1 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                onClick={() => handleNavClick('#home')}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CodeIcon sx={{ color: 'white', fontSize: 20 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Poppins, sans-serif',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Hari's Portfolio
                </Typography>
              </Box>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop nav */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <Box key={link.label} sx={{ position: 'relative' }}>
                        <Button
                          onClick={() => handleNavClick(link.href)}
                          sx={{
                            color: isActive ? '#7C3AED' : '#9CA3AF',
                            fontWeight: isActive ? 600 : 400,
                            fontSize: '0.9rem',
                            px: 2,
                            py: 1,
                            '&:hover': { color: '#F9FAFB', background: 'rgba(124,58,237,0.08)' },
                            transition: 'all 0.2s',
                          }}
                        >
                          {link.label}
                        </Button>
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            style={{
                              position: 'absolute',
                              bottom: 2,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 20,
                              height: 2,
                              background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
                              borderRadius: 2,
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleNavClick('#contact')}
                    sx={{ ml: 1 }}
                  >
                    Hire Me
                  </Button>
                </Box>
              </motion.div>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#111827',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Menu
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      borderRadius: 2,
                      background: isActive ? 'rgba(124,58,237,0.1)' : 'transparent',
                      borderLeft: isActive ? '3px solid #7C3AED' : '3px solid transparent',
                      '&:hover': { background: 'rgba(124,58,237,0.08)' },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#7C3AED' : '#9CA3AF',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
