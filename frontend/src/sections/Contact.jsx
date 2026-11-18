import React, { useState } from 'react';
import {
  Box, Container, Grid, Paper, Typography, TextField, Button,
  CircularProgress, Alert, Snackbar, Stack
} from '@mui/material';
import {
  Email as EmailIcon, LocationOn as LocationIcon,
  GitHub as GitHubIcon, LinkedIn as LinkedInIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '../animations/variants';
import { submitContactForm } from '../services/api';
import SectionHeader from '../components/SectionHeader';

const contactInfo = [
  { icon: <EmailIcon />, label: 'Email', value: 'hariharaviswa2909@gmail.com', href: 'mailto:hariharaviswa2909@gmail.com', color: '#7C3AED' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/harihara-viswa-115459276/', href: 'https://www.linkedin.com/in/harihara-viswa-115459276/', color: '#0A66C2' },
  { icon: <LocationIcon />, label: 'Location', value: 'Chennai (Open to Remote)', href: null, color: '#06B6D4' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim() || form.subject.length < 2) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await submitContactForm(form);
      setSnackbar({ open: true, message: "Message sent! I'll get back to you soon. 🎉", severity: 'success' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSnackbar({ open: true, message: err.message || 'Failed to send. Please try again.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: '#0B0F19', position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader title='Get In <span class="highlight">Touch</span>' subtitle="CONTACT ME" />
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left: Info */}
          <Grid item xs={12} md={5}>
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Let's Work <Box component="span" sx={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Together</Box></Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </Typography>
              </Box>
              <Stack spacing={2}>
                {contactInfo.map((info) => (
                  <motion.div key={info.label} whileHover={{ x: 6 }}>
                    <Paper
                      component={info.href ? 'a' : 'div'}
                      href={info.href}
                      target={info.href?.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      sx={{
                        p: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        background: 'rgba(17,24,39,0.8)',
                        border: `1px solid ${info.color}20`,
                        borderRadius: 3,
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: info.href ? 'pointer' : 'default',
                        '&:hover': { border: `1px solid ${info.color}50`, background: `${info.color}08` },
                        transition: 'all 0.3s',
                      }}
                    >
                      <Box sx={{ width: 44, height: 44, borderRadius: 2, background: `${info.color}15`, border: `1px solid ${info.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: info.color, flexShrink: 0 }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600, letterSpacing: 0.5 }}>{info.label}</Typography>
                        <Typography variant="body2" fontWeight={500}>{info.value}</Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} md={7}>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 },
                  background: 'rgba(17,24,39,0.9)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      disabled={loading}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={18} sx={{ color: 'white' }} /> : <SendIcon />}
                      sx={{ py: 1.8, fontSize: '1rem', fontWeight: 700, background: 'linear-gradient(135deg, #7C3AED, #9F67FF)', '&:hover': { background: 'linear-gradient(135deg, #6D28D9, #7C3AED)' } }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
