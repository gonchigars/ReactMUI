import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Paper,
} from '@mui/material';

const Skills = () => {
  const technicalSkills = [
    { name: 'ServiceNow Platform', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'REST APIs', level: 88 },
    { name: 'SQL', level: 82 },
    { name: 'ITSM', level: 92 },
  ];

  const servicenowSkills = [
    'Service Portal Development',
    'Workflow Automation',
    'Business Rules & Scripts',
    'Custom Applications',
    'Integration Hub',
    'Performance Analytics',
    'Service Catalog',
    'Incident Management',
    'Change Management',
    'Problem Management',
    'Asset Management',
    'Configuration Management',
  ];

  const toolsTechnologies = [
    'ServiceNow Studio',
    'ServiceNow CLI',
    'Git & GitHub',
    'Postman',
    'Jira',
    'Confluence',
    'Microsoft Office',
    'Agile/Scrum',
    'ITIL Framework',
    'RESTful APIs',
    'SOAP APIs',
    'JSON/XML',
  ];

  const softSkills = [
    'Problem Solving',
    'Analytical Thinking',
    'Communication',
    'Team Collaboration',
    'Project Management',
    'Client Interaction',
    'Documentation',
    'Training & Mentoring',
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={6}>
          {/* Technical Skills */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Technical Skills
              </Typography>
              <Box sx={{ space: 3 }}>
                {technicalSkills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* ServiceNow Skills */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                ServiceNow Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {servicenowSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'primary.light',
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Tools & Technologies */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                Tools & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {toolsTechnologies.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    variant="outlined"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Soft Skills */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                Soft Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {softSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'secondary.light',
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Skills Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Platform Capabilities
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
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
                  🎯
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Core Platform
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Deep expertise in ServiceNow core platform including system administration,
                  user management, and platform configuration.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
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
                  🔗
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Integration
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Experience with REST/SOAP APIs, web services, and third-party system
                  integrations to extend platform functionality.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
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
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Custom Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Proficient in creating custom applications, business rules, and
                  workflows to meet specific business requirements.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;