import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  Code,
  Settings,
  IntegrationInstructions,
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'ITSM Process Automation',
      description: 'Comprehensive ITSM solution with automated incident, change, and problem management workflows.',
      shortDescription: 'Automated ITSM workflows for improved efficiency',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=ITSM+Automation',
      technologies: ['ServiceNow', 'JavaScript', 'Workflow', 'ITSM', 'Automation'],
      features: [
        'Automated incident categorization and assignment',
        'Change management approval workflows',
        'Problem management integration',
        'Performance analytics dashboard',
        'Custom reporting and metrics',
      ],
      challenges: [
        'Complex approval matrix implementation',
        'Integration with legacy systems',
        'Performance optimization for large datasets',
      ],
      solutions: [
        'Implemented dynamic approval routing based on business rules',
        'Used REST APIs for seamless integration',
        'Optimized database queries and workflow efficiency',
      ],
      impact: 'Reduced incident resolution time by 45% and improved change success rate by 30%',
    },
    {
      id: 2,
      title: 'Service Portal Enhancement',
      description: 'Modern, responsive service portal with custom widgets and improved user experience.',
      shortDescription: 'Enhanced user experience with modern portal design',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Service+Portal',
      technologies: ['ServiceNow', 'HTML/CSS', 'JavaScript', 'AngularJS', 'REST APIs'],
      features: [
        'Responsive design for mobile and desktop',
        'Custom knowledge base integration',
        'Real-time chat support widget',
        'Multi-language support',
        'Advanced search functionality',
      ],
      challenges: [
        'Mobile responsiveness across different devices',
        'Performance optimization for custom widgets',
        'Integration with external knowledge systems',
      ],
      solutions: [
        'Implemented CSS Grid and Flexbox for responsive design',
        'Used lazy loading and caching for better performance',
        'Developed custom REST endpoints for external integrations',
      ],
      impact: 'Increased portal usage by 60% and improved user satisfaction scores by 25%',
    },
    {
      id: 3,
      title: 'Asset Management System',
      description: 'Comprehensive asset lifecycle management with automated discovery and tracking.',
      shortDescription: 'Complete asset lifecycle management solution',
      image: 'https://via.placeholder.com/400x250/42a5f5/ffffff?text=Asset+Management',
      technologies: ['ServiceNow', 'Discovery', 'CMDB', 'JavaScript', 'SQL'],
      features: [
        'Automated asset discovery and inventory',
        'Configuration item relationship mapping',
        'Software license management',
        'Asset depreciation tracking',
        'Compliance reporting',
      ],
      challenges: [
        'Large-scale asset discovery across multiple networks',
        'Complex relationship mapping between CIs',
        'Real-time synchronization with external systems',
      ],
      solutions: [
        'Implemented distributed discovery for network scalability',
        'Created custom relationship mapping algorithms',
        'Used scheduled jobs for data synchronization',
      ],
      impact: 'Achieved 95% asset accuracy and reduced manual tracking effort by 70%',
    },
    {
      id: 4,
      title: 'Integration Hub Implementation',
      description: 'Centralized integration platform connecting ServiceNow with multiple external systems.',
      shortDescription: 'Seamless integration with external systems',
      image: 'https://via.placeholder.com/400x250/dc004e/ffffff?text=Integration+Hub',
      technologies: ['ServiceNow', 'Integration Hub', 'REST APIs', 'SOAP', 'JSON'],
      features: [
        'Multi-system data synchronization',
        'Error handling and retry mechanisms',
        'Real-time data transformation',
        'Integration monitoring dashboard',
        'Secure authentication protocols',
      ],
      challenges: [
        'Handling different data formats and structures',
        'Managing integration failures and retries',
        'Ensuring data consistency across systems',
      ],
      solutions: [
        'Implemented data transformation scripts for format conversion',
        'Created robust error handling with exponential backoff',
        'Used transaction management for data consistency',
      ],
      impact: 'Reduced integration errors by 80% and improved data accuracy by 90%',
    },
    {
      id: 5,
      title: 'Custom Application Development',
      description: 'Tailored business application for specific organizational needs and processes.',
      shortDescription: 'Custom business application development',
      image: 'https://via.placeholder.com/400x250/ff9800/ffffff?text=Custom+App',
      technologies: ['ServiceNow', 'JavaScript', 'Business Rules', 'UI Policies', 'Reports'],
      features: [
        'Custom table structures and relationships',
        'Automated business logic implementation',
        'Role-based access control',
        'Custom reporting and analytics',
        'Workflow automation',
      ],
      challenges: [
        'Understanding complex business requirements',
        'Designing scalable data models',
        'Implementing complex business rules',
      ],
      solutions: [
        'Conducted detailed requirement analysis sessions',
        'Used normalized database design principles',
        'Implemented modular business rule architecture',
      ],
      impact: 'Streamlined business processes and reduced manual work by 50%',
    },
    {
      id: 6,
      title: 'Performance Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard for operational insights and decision making.',
      shortDescription: 'Real-time analytics and reporting platform',
      image: 'https://via.placeholder.com/400x250/4caf50/ffffff?text=Analytics+Dashboard',
      technologies: ['ServiceNow', 'Performance Analytics', 'JavaScript', 'Charts', 'SQL'],
      features: [
        'Real-time KPI monitoring',
        'Interactive charts and graphs',
        'Custom metric calculations',
        'Automated report generation',
        'Drill-down capabilities',
      ],
      challenges: [
        'Handling large datasets for real-time processing',
        'Creating meaningful visualizations',
        'Optimizing query performance',
      ],
      solutions: [
        'Implemented data aggregation and caching strategies',
        'Used modern charting libraries for better visualization',
        'Optimized database queries with proper indexing',
      ],
      impact: 'Provided actionable insights leading to 20% improvement in operational efficiency',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
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
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {project.shortDescription}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3} more`}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button
                    size="small"
                    startIcon={<Code />}
                    onClick={() => handleProjectClick(project)}
                  >
                    View Details
                  </Button>
                  <Box>
                    <IconButton size="small" sx={{ color: 'primary.main' }}>
                      <GitHub />
                    </IconButton>
                    <IconButton size="small" sx={{ color: 'primary.main' }}>
                      <Launch />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              maxHeight: '90vh',
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <IconButton onClick={handleCloseDialog}>
                    <Close />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </Box>

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {selectedProject.description}
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Features
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {selectedProject.features.map((feature, index) => (
                        <Typography
                          key={index}
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
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedProject.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Challenges & Solutions
                    </Typography>
                    <Paper sx={{ p: 2, mb: 3, backgroundColor: 'grey.50' }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Challenges:
                      </Typography>
                      {selectedProject.challenges.map((challenge, index) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                          • {challenge}
                        </Typography>
                      ))}
                    </Paper>

                    <Paper sx={{ p: 2, mb: 3, backgroundColor: 'primary.50' }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Solutions:
                      </Typography>
                      {selectedProject.solutions.map((solution, index) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                          • {solution}
                        </Typography>
                      ))}
                    </Paper>

                    <Paper sx={{ p: 2, backgroundColor: 'success.50' }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Impact:
                      </Typography>
                      <Typography variant="body2">
                        {selectedProject.impact}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  sx={{ mr: 1 }}
                >
                  View Code
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Launch />}
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;