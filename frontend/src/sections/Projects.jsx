import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, CardActions,
  Button, Chip, IconButton, Dialog, DialogTitle, DialogContent,
  DialogActions, Tooltip, Skeleton
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  OpenInNew as OpenInNewIcon,
  Close as CloseIcon,
  Code as CodeIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, scaleIn, fadeInUp } from '../animations/variants';
import { getProjects } from '../services/api';
import SectionHeader from '../components/SectionHeader';

const ProjectCard = ({ project, index, onViewDetails }) => {
  const gradients = [
    'linear-gradient(135deg, #7C3AED22, #06B6D422)',
    'linear-gradient(135deg, #06B6D422, #10B98122)',
    'linear-gradient(135deg, #EF444422, #7C3AED22)',
    'linear-gradient(135deg, #F59E0B22, #EF444422)',
    'linear-gradient(135deg, #10B98122, #06B6D422)',
    'linear-gradient(135deg, #7C3AED22, #EC489922)',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(17,24,39,0.9)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            border: '1px solid rgba(124,58,237,0.4)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(124,58,237,0.1)',
          },
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Card header image area */}
        <Box
          sx={{
            height: 180,
            background: gradient,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CodeIcon sx={{ fontSize: 36, color: '#7C3AED' }} />
            </Box>
          </motion.div>
          {project.featured && (
            <Chip
              label="⭐ Featured"
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(124,58,237,0.9)',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.7rem',
                backdropFilter: 'blur(10px)',
              }}
            />
          )}
        </Box>

        <CardContent sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {project.technologies.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: 'rgba(124,58,237,0.1)',
                  color: '#9F67FF',
                  border: '1px solid rgba(124,58,237,0.2)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                }}
              />
            ))}
            {project.technologies.length > 4 && (
              <Chip label={`+${project.technologies.length - 4}`} size="small" sx={{ background: 'rgba(255,255,255,0.05)', color: 'text.secondary', fontSize: '0.7rem' }} />
            )}
          </Box>
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
          <Button
            size="small"
            startIcon={<VisibilityIcon />}
            onClick={() => onViewDetails(project)}
            sx={{ color: '#7C3AED', fontWeight: 600, '&:hover': { background: 'rgba(124,58,237,0.08)' } }}
          >
            Details
          </Button>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 0.5 }}>
            <Tooltip title="GitHub">
              <IconButton
                size="small"
                component="a"
                href={project.github}
                target="_blank"
                sx={{ color: 'text.secondary', '&:hover': { color: '#F9FAFB', background: 'rgba(255,255,255,0.05)' } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Live Demo">
              <IconButton
                size="small"
                component="a"
                href={project.demo}
                target="_blank"
                sx={{ color: 'text.secondary', '&:hover': { color: '#06B6D4', background: 'rgba(6,182,212,0.08)' } }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    getProjects()
      .then(res => { setProjects(res.data || []); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)' }}>
      <Container maxWidth="xl">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader title='Featured <span class="highlight">Projects</span>' subtitle="MY WORK" />
        </motion.div>

        {/* Filter buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
          {['all', 'featured'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setFilter(f)}
              sx={filter === f ? {} : { color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {f === 'all' ? 'All Projects' : '⭐ Featured'}
            </Button>
          ))}
        </Box>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          key={filter}
        >
          <Grid container spacing={3}>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Skeleton variant="rounded" height={380} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                  </Grid>
                ))
              : filtered.map((project, i) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <ProjectCard project={project} index={i} onViewDetails={setSelectedProject} />
                  </Grid>
                ))
            }
          </Grid>
        </motion.div>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{ sx: { background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 3 } }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pb: 1 }}>
                <Box>
                  <Typography variant="h6" fontWeight={700}>{selectedProject.title}</Typography>
                  {selectedProject.featured && <Chip label="⭐ Featured" size="small" sx={{ background: 'rgba(124,58,237,0.2)', color: '#9F67FF', mt: 0.5 }} />}
                </Box>
                <IconButton onClick={() => setSelectedProject(null)} size="small" sx={{ color: 'text.secondary' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  {selectedProject.description}
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5, color: 'text.primary' }}>
                  Technologies Used:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" sx={{ background: 'rgba(124,58,237,0.1)', color: '#9F67FF', border: '1px solid rgba(124,58,237,0.2)' }} />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 3, gap: 1 }}>
                <Button startIcon={<GitHubIcon />} component="a" href={selectedProject.github} target="_blank" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.1)', color: 'text.secondary' }}>GitHub</Button>
                <Button startIcon={<OpenInNewIcon />} component="a" href={selectedProject.demo} target="_blank" variant="contained">Live Demo</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
