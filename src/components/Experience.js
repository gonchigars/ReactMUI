import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Chip,
  Paper,
} from '@mui/material';
import {
  Work,
  Business,
  LocationOn,
  CalendarToday,
} from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      company: 'HCL Tech',
      position: 'ServiceNow Developer',
      duration: '2022 - Present',
      location: 'India',
      description: [
        'Develop and maintain custom ServiceNow applications and workflows',
        'Implement ITSM processes including Incident, Change, and Problem Management',
        'Create and customize Service Portal pages and widgets',
        'Integrate ServiceNow with external systems using REST/SOAP APIs',
        'Optimize platform performance and user experience',
        'Provide technical support and training to end users',
      ],
      technologies: ['ServiceNow', 'JavaScript', 'REST APIs', 'ITSM', 'Service Portal'],
    },
    {
      company: 'Previous Company',
      position: 'Junior ServiceNow Developer',
      duration: '2020 - 2022',
      location: 'India',
      description: [
        'Assisted in ServiceNow platform administration and configuration',
        'Developed business rules and client scripts for automation',
        'Created custom reports and dashboards',
        'Supported incident and change management processes',
        'Participated in platform upgrades and migrations',
      ],
      technologies: ['ServiceNow', 'JavaScript', 'SQL', 'ITIL', 'Reporting'],
    },
  ];

  const achievements = [
    {
      title: 'Platform Optimization',
      description: 'Improved system performance by 40% through query optimization and workflow streamlining',
      year: '2023',
    },
    {
      title: 'Automation Implementation',
      description: 'Automated 15+ manual processes, reducing average resolution time by 60%',
      year: '2023',
    },
    {
      title: 'Integration Success',
      description: 'Successfully integrated 8 third-party systems with ServiceNow platform',
      year: '2022',
    },
    {
      title: 'User Training',
      description: 'Trained 50+ users on new ServiceNow features and best practices',
      year: '2022',
    },
  ];

  return (
    <Box
      id="experience"
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
          Work Experience
        </Typography>

        <Grid container spacing={6}>
          {/* Work Experience Timeline */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
              Professional Journey
            </Typography>
            <Timeline position="alternate">
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: 'primary.main',
                        width: 16,
                        height: 16,
                      }}
                    />
                    {index < experiences.length - 1 && (
                      <TimelineConnector sx={{ backgroundColor: 'primary.light' }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card
                      sx={{
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Business sx={{ color: 'primary.main', mr: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                        <Typography variant="h5" sx={{ mb: 1, color: 'primary.main' }}>
                          {exp.position}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarToday sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="textSecondary">
                              {exp.duration}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="textSecondary">
                              {exp.location}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                          {exp.description.map((desc, descIndex) => (
                            <Typography
                              key={descIndex}
                              variant="body2"
                              sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: 'primary.main',
                                  mr: 1,
                                  mt: 0.7,
                                  flexShrink: 0,
                                }}
                              />
                              {desc}
                            </Typography>
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'primary.light',
                                color: 'white',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>

          {/* Key Achievements */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
              Key Achievements
            </Typography>
            <Box sx={{ space: 2 }}>
              {achievements.map((achievement, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    mb: 3,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {achievement.title}
                    </Typography>
                    <Chip
                      label={achievement.year}
                      size="small"
                      sx={{
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {achievement.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Current Role Highlights */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Current Role at HCL Tech
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                  }}
                >
                  📈
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Performance Improvement
                </Typography>
                <Typography variant="body2">
                  Achieved 40% improvement in system performance through optimization
                  and best practices implementation.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                  }}
                >
                  ⚡
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Process Automation
                </Typography>
                <Typography variant="body2">
                  Automated 15+ manual processes, reducing resolution time by 60%
                  and improving user satisfaction.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                  }}
                >
                  🔗
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  System Integration
                </Typography>
                <Typography variant="body2">
                  Successfully integrated 8 third-party systems, creating seamless
                  data flow and enhanced functionality.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;