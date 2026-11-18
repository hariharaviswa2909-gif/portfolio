import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <Box sx={{ mb: 8, textAlign: centered ? 'center' : 'left' }}>
      <motion.div variants={fadeInUp}>
        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 4,
            fontSize: '0.75rem',
            display: 'block',
            mb: 1,
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            '& .highlight': {
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            },
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Box
          sx={{
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
            borderRadius: 2,
            mt: 2,
            mx: centered ? 'auto' : 0,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default SectionHeader;
