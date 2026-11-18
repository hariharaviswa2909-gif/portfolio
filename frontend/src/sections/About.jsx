import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Container, Typography, Grid, Paper, Avatar, Chip, Stack
} from '@mui/material';
import {
  Code as CodeIcon,
  Rocket as RocketIcon,
  Psychology as PsychologyIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';
import image from '../assets/mine.png'
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { label: 'Projects Completed', value: 2, suffix: '+', icon: '🚀' },
  { label: 'Years Experience', value: 2, suffix: '+', icon: '💼' },
  { label: 'Technologies', value: 14, suffix: '+', icon: '⚡' },
];

const interests = [
  { icon: <CodeIcon />, title: 'Clean Code', desc: 'Writing maintainable, scalable, well-documented code' },
  { icon: <RocketIcon />, title: 'Performance', desc: 'Optimizing apps for speed and best user experience' },
  { icon: <PsychologyIcon />, title: 'Problem Solving', desc: 'Turning complex requirements into elegant solutions' },
  { icon: <TrophyIcon />, title: 'Continuous Learning', desc: 'Staying updated with the latest technologies and trends' },
];

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader title='About <span class="highlight">Me</span>' subtitle="WHO I AM" />
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Left: Image & quick bio */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                {/* Profile card */}
                <Paper
                  sx={{
                    p: 4,
                    background: 'rgba(17,24,39,0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      src={image}
                      sx={{
                        width: 120,
                        height: 120,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 0 30px rgba(124,58,237,0.4)',
                      }}
                    />
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h5" fontWeight={700}>Harihara Viswa</Typography>
                      <Typography variant="body2" color="text.secondary">Full-Stack Developer</Typography>
                      <Chip
                        label="🟢 Available for Work"
                        size="small"
                        sx={{
                          mt: 1,
                          background: 'rgba(16,185,129,0.1)',
                          color: '#10B981',
                          border: '1px solid rgba(16,185,129,0.3)',
                          fontSize: '0.7rem',
                        }}
                      />
                    </Box>
                  </Box>
                  {[
                    { label: '📍 Location', value: 'Chennai )' },
                    { label: '🎓 Education', value: 'B.Tech' },
                    { label: '💼 Experience', value: '2+ Years' },
                    { label: '🌐 Languages', value: 'English, Tamil' },
                  ].map((info) => (
                    <Box key={info.label} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <Typography variant="body2" color="text.secondary">{info.label}</Typography>
                      <Typography variant="body2" fontWeight={500}>{info.value}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Text content */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <Stack spacing={3}>
                <motion.div variants={fadeInRight}>
                  <Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Building Digital Experiences That{' '}
                    <Box component="span" sx={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      Matter
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInRight}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    Front-End Developer with 2 years of professional experience building responsive, scalable web applications using React.js,
                    JavaScript (ES6+), HTML5, and CSS3. Skilled in React Hooks, functional components, Redux Toolkit state management, and
                    REST API integration. Experienced working in Agile/Scrum teams, performing code reviews, and delivering client-focused
                    enhancements across the full SDLC. Proficient with Git/GitHub, Postman, and Visual Studio Code.
                  </Typography>
                </motion.div>

                {/* Interests */}
                <motion.div variants={fadeInRight}>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    {interests.map((item) => (
                      <Grid item xs={12} sm={6} key={item.title}>
                        <Paper
                          sx={{
                            p: 2,
                            background: 'rgba(124,58,237,0.05)',
                            border: '1px solid rgba(124,58,237,0.15)',
                            borderRadius: 2,
                            display: 'flex',
                            gap: 1.5,
                            alignItems: 'flex-start',
                            '&:hover': { border: '1px solid rgba(124,58,237,0.4)', background: 'rgba(124,58,237,0.08)' },
                            transition: 'all 0.3s',
                          }}
                        >
                          <Box sx={{ color: 'primary.main', mt: 0.2 }}>{item.icon}</Box>
                          <Box>
                            <Typography variant="body2" fontWeight={700} sx={{ mb: 0.5 }}>{item.title}</Typography>
                            <Typography variant="caption" color="text.secondary">{item.desc}</Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Grid container spacing={3} sx={{ mt: 8 }}>
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div variants={fadeInUp}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'rgba(17,24,39,0.8)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { border: '1px solid rgba(124,58,237,0.3)', transform: 'translateY(-4px)' },
                      transition: 'all 0.3s',
                    }}
                  >
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
                    <Typography sx={{ fontSize: '2rem', mb: 0.5 }}>{stat.icon}</Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                        background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>{stat.label}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
