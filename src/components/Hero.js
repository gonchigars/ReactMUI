import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Paper,
} from '@mui/material';
import {
  KeyboardArrowDown,
  LinkedIn,
  GitHub,
  Email,
} from '@mui/icons-material';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'ServiceNow Developer',
    'ITSM Specialist',
    'Workflow Automation Expert',
    'Platform Consultant',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white' }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Your Name
                </Box>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  minHeight: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                I'm a{' '}
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    color: '#FFD700',
                    fontWeight: 700,
                    animation: 'fadeInOut 3s infinite',
                    '@keyframes fadeInOut': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.7 },
                    },
                  }}
                >
                  {texts[currentText]}
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: '500px',
                }}
              >
                Passionate about transforming business processes through innovative
                ServiceNow solutions. Currently working at HCL Tech, delivering
                exceptional digital experiences.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToAbout}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#333',
                    '&:hover': {
                      backgroundColor: '#FFA500',
                    },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                    },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Download CV
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button
                  variant="outlined"
                  startIcon={<LinkedIn />}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Email />}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#FFD700',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                    },
                  }}
                >
                  Email
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Paper
                elevation={20}
                sx={{
                  borderRadius: '50%',
                  p: 2,
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    fontSize: '4rem',
                    fontWeight: 700,
                  }}
                >
                  YN
                </Avatar>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <Button
          onClick={scrollToAbout}
          sx={{
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0) translateX(-50%)',
              },
              '40%': {
                transform: 'translateY(-10px) translateX(-50%)',
              },
              '60%': {
                transform: 'translateY(-5px) translateX(-50%)',
              },
            },
          }}
        >
          <KeyboardArrowDown sx={{ fontSize: 40 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;