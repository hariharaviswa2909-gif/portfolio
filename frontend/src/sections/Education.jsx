import React from 'react';
import { Box, Container, Grid, Paper, Typography, Chip } from '@mui/material';
import { School as SchoolIcon, EmojiEvents as CertIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, scaleIn } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';

const education = [
  {
    degree: 'Bachelor of Technology in Polymer Technology',
    institution: 'MIT - Anna University',
    duration: '2020 – 2024',
    grade: 'CGPA: 7.9 / 10',
        icon: '🎓',
  },
  {
    degree: 'Higher Secondary (12th Science)',
    institution: 'Central Board of Secondary Education',
    duration: '2019 – 2020',
    grade: '93%',
    description: 'Physics, Chemistry, Mathematics with Biology as an elective.',
    icon: '📚',
  },
];

const certifications = [
  { name: 'Fullstack web developer', issuer: 'Udemy', year: '2024', color: '#7C3AED' },
  { name: 'Claude Certified Associate', issuer: 'Anthropic', year: '2026', color: '#06B6D4' },
  { name: 'AI/ML', issuer: 'Naan Mudhalvan', year: '2024', color: '#F59E0B',  },
  { name: 'UI/UX for Beginners', issuer: 'Great Learning', year: '2024', color: '#10B981' },
];

const Education = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)' }}>
    <Container maxWidth="xl">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <SectionHeader title='Education & <span class="highlight">Certifications</span>' subtitle="MY BACKGROUND" />
      </motion.div>

      <Grid container spacing={6}>
        {/* Education cards */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon sx={{ color: 'primary.main' }} /> Education
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {education.map((edu, i) => (
              <motion.div key={edu.degree} variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Paper sx={{ p: 3, background: 'rgba(17,24,39,0.9)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 3, position: 'relative', overflow: 'hidden', '&:hover': { border: '1px solid rgba(124,58,237,0.3)' }, transition: 'all 0.3s' }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ fontSize: '2rem', lineHeight: 1 }}>{edu.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight={700} sx={{ fontSize: '1rem', lineHeight: 1.4, mb: 0.5 }}>{edu.degree}</Typography>
                      <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, mb: 0.5 }}>{edu.institution}</Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                        <Chip label={edu.duration} size="small" sx={{ background: 'rgba(124,58,237,0.1)', color: '#9F67FF', fontSize: '0.7rem' }} />
                        <Chip label={edu.grade} size="small" sx={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', fontSize: '0.7rem' }} />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{edu.description}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Grid>

        {/* Certifications */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CertIcon sx={{ color: 'secondary.main' }} /> Certifications
          </Typography>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Grid container spacing={2}>
              {certifications.map((cert) => (
                <Grid item xs={12} sm={6} key={cert.name}>
                  <motion.div variants={scaleIn} whileHover={{ scale: 1.03, y: -4 }}>
                    <Paper sx={{ p: 2.5, background: 'rgba(17,24,39,0.9)', border: `1px solid ${cert.color}20`, borderRadius: 3, position: 'relative', overflow: 'hidden', height: '100%', '&:hover': { border: `1px solid ${cert.color}50`, boxShadow: `0 8px 25px ${cert.color}15` }, transition: 'all 0.3s' }}>
                      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: cert.color }} />
                      <Typography sx={{ fontSize: '1.6rem', mb: 1 }}>{cert.emoji}</Typography>
                      <Typography variant="body2" fontWeight={700} sx={{ lineHeight: 1.4, mb: 0.5 }}>{cert.name}</Typography>
                      <Typography variant="caption" sx={{ color: cert.color, fontWeight: 600 }}>{cert.issuer}</Typography>
                      <Chip label={cert.year} size="small" sx={{ display: 'block', mt: 1, width: 'fit-content', background: `${cert.color}15`, color: cert.color, fontSize: '0.65rem' }} />
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Education;
