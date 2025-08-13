import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
} from '@mui/material';
import {
  Work,
  School,
  LocationOn,
  Email,
  Phone,
  LinkedIn,
} from '@mui/icons-material';

const About = () => {
  const personalInfo = [
    { icon: <Work />, label: 'Experience', value: '3+ Years' },
    { icon: <School />, label: 'Education', value: 'Bachelor\'s in IT' },
    { icon: <LocationOn />, label: 'Location', value: 'India' },
    { icon: <Email />, label: 'Email', value: 'your.email@hcl.com' },
    { icon: <Phone />, label: 'Phone', value: '+91 98765 43210' },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile' },
  ];

  const achievements = [
    'ServiceNow Certified System Administrator',
    'ServiceNow Certified Application Developer',
    'ITSM Implementation Specialist',
    'Workflow Automation Expert',
    'Platform Integration Specialist',
    'Customer Service Management (CSM)',
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  zIndex: 1,
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  ServiceNow Developer
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  I am a passionate ServiceNow Developer with over 3 years of experience
                  in designing, developing, and implementing innovative solutions on the
                  ServiceNow platform. Currently working at HCL Tech, I specialize in
                  ITSM, workflow automation, and platform customization.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  My expertise includes creating custom applications, integrating
                  third-party systems, and optimizing business processes through
                  ServiceNow's powerful platform capabilities. I am committed to
                  delivering high-quality solutions that drive business value and
                  enhance user experience.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I believe in continuous learning and staying updated with the latest
                  ServiceNow features and best practices to provide cutting-edge
                  solutions to my clients.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                {personalInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 2 }}>
                        <Box sx={{ color: 'primary.main', mb: 1 }}>
                          {info.icon}
                        </Box>
                        <Typography variant="subtitle2" color="textSecondary">
                          {info.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Certifications & Achievements
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {achievements.map((achievement, index) => (
                  <Chip
                    key={index}
                    label={achievement}
                    sx={{
                      backgroundColor: 'primary.light',
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            What I Do
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    color: 'white',
                    fontSize: '2rem',
                  }}
                >
                  🚀
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Platform Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Develop custom applications and workflows on the ServiceNow platform
                  to streamline business processes and improve efficiency.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    color: 'white',
                    fontSize: '2rem',
                  }}
                >
                  🔧
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  System Integration
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Integrate ServiceNow with external systems and APIs to create
                  seamless data flow and enhance platform capabilities.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    color: 'white',
                    fontSize: '2rem',
                  }}
                >
                  📊
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Process Optimization
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Analyze and optimize existing business processes to improve
                  efficiency, reduce costs, and enhance user experience.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;