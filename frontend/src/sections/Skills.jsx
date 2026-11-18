import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Paper, LinearProgress, Chip, Tab, Tabs
} from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';

const skillCategories = {
  all: 'All',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
};

const skills = {
  frontend: [
    { name: 'React.js', level: 90, icon: '⚛️', color: '#61DAFB' },
    { name: 'JavaScript', level: 88, icon: '🟨', color: '#F7DF1E' },
    { name: 'HTML5', level: 95, icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: '🎨', color: '#1572B6' },
    { name: 'Redux Toolkit', level: 80, icon: '🔄', color: '#764ABC' },
    { name: 'Material UI', level: 85, icon: '🧩', color: '#007FFF' },
    { name: 'Responsive Design', level: 92, icon: '📱', color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: '🟢', color: '#339933' },
    { name: 'Express.js', level: 83, icon: '⚡', color: '#7C3AED' },
    { name: 'REST APIs', level: 88, icon: '🔗', color: '#06B6D4' },
  ],
  database: [
    { name: 'MongoDB', level: 82, icon: '🍃', color: '#47A248' },
    { name: 'MySQL', level: 70, icon: '🐬', color: '#4479A1' },
  ],
  tools: [
    { name: 'Git', level: 88, icon: '🔀', color: '#F05032' },
    { name: 'GitHub', level: 90, icon: '🐙', color: '#9CA3AF' },
    { name: 'Postman', level: 85, icon: '📮', color: '#FF6C37' },
    { name: 'VS Code', level: 95, icon: '💙', color: '#007ACC' },
  ],
};

const techStack = [
  { name: 'React.js', emoji: '⚛️' }, { name: 'Node.js', emoji: '🟢' }, { name: 'MongoDB', emoji: '🍃' },
  { name: 'Express.js', emoji: '⚡' }, { name: 'JavaScript', emoji: '🟨' }, { name: 'Redux', emoji: '🔄' },
  { name: 'Material UI', emoji: '🧩' }, { name: 'Git', emoji: '🔀' }, { name: 'REST API', emoji: '🔗' },
  { name: 'MySQL', emoji: '🐬' }, { name: 'HTML5', emoji: '🌐' }, { name: 'CSS3', emoji: '🎨' },
  { name: 'Postman', emoji: '📮' }, { name: 'VS Code', emoji: '💙' }, { name: 'GitHub', emoji: '🐙' },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <Paper
      sx={{
        p: 2.5,
        background: 'rgba(17,24,39,0.8)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 3,
        '&:hover': { border: '1px solid rgba(124,58,237,0.3)', boxShadow: '0 8px 30px rgba(124,58,237,0.1)' },
        transition: 'all 0.3s ease',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Box sx={{
          width: 44,
          height: 44,
          borderRadius: 2,
          background: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.3rem',
        }}>
          {skill.icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" fontWeight={600} sx={{ lineHeight: 1.2 }}>{skill.name}</Typography>
          <Typography variant="caption" sx={{ color: skill.color, fontWeight: 600 }}>{skill.level}%</Typography>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            borderRadius: 3,
            boxShadow: `0 0 10px ${skill.color}60`,
          }}
        />
      </Box>
    </Paper>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredSkills = () => {
    if (activeTab === 'all') return Object.values(skills).flat();
    return skills[activeTab] || [];
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#0B0F19',
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124,58,237,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader title='Technical <span class="highlight">Skills</span>' subtitle="WHAT I KNOW" />
        </motion.div>

        {/* Category Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Paper sx={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 3, p: 0.5 }}>
            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              sx={{
                '& .MuiTab-root': { color: 'text.secondary', fontWeight: 500, textTransform: 'none', minHeight: 40, px: 2.5 },
                '& .Mui-selected': { color: 'primary.main', fontWeight: 700 },
                '& .MuiTabs-indicator': { background: 'linear-gradient(90deg, #7C3AED, #06B6D4)', borderRadius: 2 },
              }}
            >
              {Object.entries(skillCategories).map(([key, label]) => (
                <Tab key={key} label={label} value={key} />
              ))}
            </Tabs>
          </Paper>
        </Box>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          key={activeTab}
        >
          <Grid container spacing={3}>
            {getFilteredSkills().map((skill, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`${skill.name}-${i}`}>
                <SkillCard skill={skill} index={i} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Tech Stack chips */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Box sx={{ mt: 10 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 4, display: 'block', textAlign: 'center', mb: 3 }}>
              FULL TECH STACK
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {techStack.map((tech, i) => (
                <motion.div key={tech.name} variants={scaleIn} whileHover={{ scale: 1.1, y: -2 }}>
                  <Chip
                    label={`${tech.emoji} ${tech.name}`}
                    sx={{
                      background: 'rgba(124,58,237,0.08)',
                      border: '1px solid rgba(124,58,237,0.2)',
                      color: 'text.primary',
                      fontWeight: 500,
                      '&:hover': { background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)' },
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
