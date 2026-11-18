import React from 'react';
import { Box, Container, Typography, IconButton, Button, Grid, Divider, Tooltip } from '@mui/material';
import {
  GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon,
  Code as CodeIcon, ArrowUpward as ArrowUpIcon, Favorite as FavoriteIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub', color: '#9CA3AF' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <EmailIcon />, href: 'mailto:alex@example.com', label: 'Email', color: '#7C3AED' },
];

const Footer = () => {
  const handleNavClick = (href) => {
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      component="footer"
      sx={{
        background: '#111827',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #7C3AED)' }} />
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124,58,237,0.03) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CodeIcon sx={{ color: 'white', fontSize: 20 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Hari's Portfolio
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, maxWidth: 300 }}>
              A passionate Full-Stack Developer crafting modern digital experiences with React.js and Node.js.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socials.map((s) => (
                <Tooltip key={s.label} title={s.label}>
                  <motion.div whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      sx={{ color: 'text.secondary', border: '1px solid rgba(255,255,255,0.08)', '&:hover': { color: s.color, borderColor: s.color, background: `${s.color}10` }, transition: 'all 0.2s' }}
                    >
                      {s.icon}
                    </IconButton>
                  </motion.div>
                </Tooltip>
              ))}
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5, fontSize: '1rem' }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navLinks.map((link) => (
                <Box
                  key={link.label}
                  component="button"
                  onClick={() => handleNavClick(link.href)}
                  sx={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', p: 0, color: 'text.secondary', fontSize: '0.9rem', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: '#7C3AED' }, transition: 'color 0.2s' }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#7C3AED', opacity: 0.5 }} />
                  {link.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5, fontSize: '1rem' }}>Contact Info</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" color="text.secondary">📧 hariharaviswa2909@gmail.com</Typography>
              <Typography variant="body2" color="text.secondary">📍 Chennai(Open to Remote)</Typography>
              <Typography variant="body2" color="text.secondary">⏰ Mon–Fri, 9AM–6PM IST</Typography>
              <Typography variant="body2" color="text.secondary">2+ Years</Typography>
              <Typography variant="body2" color="text.secondary">+91 8754128376</Typography>

            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            © {new Date().getFullYear()} Hari's Portfolio. Made with{' '}
            <FavoriteIcon sx={{ fontSize: '0.9rem', color: '#EF4444' }} /> by Hari
          </Typography>
          <Tooltip title="Back to Top">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={scrollToTop}
                sx={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', color: 'white', width: 40, height: 40, '&:hover': { background: 'linear-gradient(135deg, #6D28D9, #7C3AED)', boxShadow: '0 4px 15px rgba(124,58,237,0.5)' } }}
              >
                <ArrowUpIcon />
              </IconButton>
            </motion.div>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
