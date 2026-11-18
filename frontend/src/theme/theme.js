import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7C3AED', light: '#9F67FF', dark: '#5B21B6' },
    secondary: { main: '#06B6D4', light: '#38BDF8', dark: '#0891B2' },
    background: { default: '#0B0F19', paper: '#111827' },
    text: { primary: '#F9FAFB', secondary: '#9CA3AF' },
    success: { main: '#10B981' },
    error: { main: '#EF4444' },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: '10px', padding: '10px 24px' },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #9F67FF 100%)',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
          '&:hover': { background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.6)', transform: 'translateY(-1px)' },
        },
        outlinedPrimary: {
          borderColor: '#7C3AED',
          '&:hover': { borderColor: '#9F67FF', backgroundColor: 'rgba(124, 58, 237, 0.08)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.05)' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
            '&:hover fieldset': { borderColor: 'rgba(124, 58, 237, 0.5)' },
            '&.Mui-focused fieldset': { borderColor: '#7C3AED' },
          },
        },
      },
    },
  },
});

export default theme;
