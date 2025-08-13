import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  ArrowUpward,
} from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5',
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      url: 'https://github.com/yourusername',
      color: '#333',
      label: 'GitHub',
    },
    {
      icon: <Email />,
      url: 'mailto:your.email@hcl.com',
      color: '#ea4335',
      label: 'Email',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        position: 'relative',
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
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Main Footer Content */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                Your Name
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                ServiceNow Developer at HCL Tech, passionate about creating innovative
                solutions that drive business value and enhance user experience.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                    }}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      opacity: 0.9,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  📧 your.email@hcl.com
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  📱 +91 98765 43210
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  🏢 HCL Tech, India
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  💼 ServiceNow Developer
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Your Name. All rights reserved.
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Built with ❤️ using React & Material-UI
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>

      {/* Floating Action Button for Mobile */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUpward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;