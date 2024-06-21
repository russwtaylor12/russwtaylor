import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box, Grid, Card, CardContent, CardActions, Button, Avatar } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="md">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">My Portfolio</Typography>
                </Toolbar>
            </AppBar>
            <Box my={4} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <section id="about">
                    <Typography variant="h4" gutterBottom>About Me</Typography>
                    <Box display="flex" justifyContent="center" mb={2}>
                        <Avatar alt="Your Name" src="your-photo-url.jpg" sx={{ width: 150, height: 150 }} />
                    </Box>
                    <Typography variant="body1" paragraph align={isMobile ? 'center' : 'left'}>
                        Hello! I'm [Your Name], a passionate developer with experience in [your skills].
                        I love creating web applications and learning new technologies.
                    </Typography>
                </section>
                <section id="projects">
                    <Typography variant="h4" gutterBottom>Projects</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Card component={motion.div} whileHover={{ scale: 1.05 }}>
                                <CardContent>
                                    <Typography variant="h5">Project 1</Typography>
                                    <Typography variant="body2">Description of project 1.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="project-link-1" target="_blank">View Project</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card component={motion.div} whileHover={{ scale: 1.05 }}>
                                <CardContent>
                                    <Typography variant="h5">Project 2</Typography>
                                    <Typography variant="body2">Description of project 2.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="project-link-2" target="_blank">View Project</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </section>
                <section id="contact">
                    <Typography variant="h4" gutterBottom>Contact</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" paragraph align={isMobile ? 'center' : 'left'}>
                                <Email /> <a href="mailto:your-email@example.com">your-email@example.com</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" paragraph align={isMobile ? 'center' : 'left'}>
                                <LinkedIn /> <a href="your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" paragraph align={isMobile ? 'center' : 'left'}>
                                <GitHub /> <a href="your-github-profile" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </section>
            </Box>
        </Container>
    );
}

export default App;
