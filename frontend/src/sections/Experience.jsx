import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Chip, Stack, Skeleton } from '@mui/material';
import { Work as WorkIcon, LocationOn as LocationIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../animations/variants';
import { getExperience } from '../services/api';
import SectionHeader from '../components/SectionHeader';

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 2, md: 4 },
        flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
        alignItems: { md: 'center' },
        position: 'relative',
        mb: 4,
      }}
    >
      {/* Timeline node */}
      <Box
        sx={{
          position: { md: 'absolute' },
          left: { md: '50%' },
          transform: { md: 'translateX(-50%)' },
          zIndex: 2,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(124,58,237,0.5)',
              border: '3px solid #0B0F19',
            }}
          >
            <WorkIcon sx={{ color: 'white', fontSize: 22 }} />
          </Box>
        </motion.div>
      </Box>

      {/* Content card — left or right */}
      <Box sx={{ flex: 1, maxWidth: { md: '45%' }, ml: { md: isEven ? 0 : 'auto' }, mr: { md: isEven ? 'auto' : 0 } }}>
        <motion.div
          variants={isEven ? fadeInLeft : fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Paper
            sx={{
              p: { xs: 2.5, md: 3.5 },
              background: 'rgba(17,24,39,0.9)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              '&:hover': { border: '1px solid rgba(124,58,237,0.3)', transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' },
              transition: 'all 0.3s ease',
            }}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
              <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.3 }}>{exp.position}</Typography>
              <Chip
                label={exp.duration}
                size="small"
                icon={<CalendarIcon sx={{ fontSize: '0.8rem !important' }} />}
                sx={{ background: 'rgba(124,58,237,0.1)', color: '#9F67FF', border: '1px solid rgba(124,58,237,0.2)', fontSize: '0.7rem' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600 }}>{exp.company}</Typography>
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: 'text.secondary' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                <LocationIcon sx={{ fontSize: '0.85rem', color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">{exp.location}</Typography>
              </Box>
            </Box>
            <Stack component="ul" spacing={0.8} sx={{ pl: 2, mb: 2.5, listStyle: 'none', p: 0 }}>
              {exp.responsibilities.map((r, i) => (
                <Box key={i} component="li" sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED', mt: 0.8, flexShrink: 0 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{r}</Typography>
                </Box>
              ))}
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {exp.technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ background: 'rgba(6,182,212,0.1)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.2)', fontSize: '0.68rem' }} />
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperience()
      .then(res => { setExperience(res.data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: '#0B0F19', position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(124,58,237,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader title='Professional <span class="highlight">Experience</span>' subtitle="MY JOURNEY" />
        </motion.div>

        {/* Timeline */}
        <Box sx={{ position: 'relative', mt: 6 }}>
          {/* Center line */}
          <Box sx={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #7C3AED, #06B6D4, #7C3AED)', transform: 'translateX(-50%)', display: { xs: 'none', md: 'block' }, opacity: 0.3 }} />

          {loading
            ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} variant="rounded" height={200} sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.05)' }} />)
            : experience.map((exp, i) => <ExperienceCard key={exp.id} exp={exp} index={i} />)
          }
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
