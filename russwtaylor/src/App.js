import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Box, Grid, Card, CardContent, CardActions, Button, Avatar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Email, LinkedIn, GitHub, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MyToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}));

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const currentTheme = useTheme();
    const isMobile = useMediaQuery(currentTheme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" sx={{ width: '100vw' }}>
                <MyToolbar>
                    <Typography variant="h6">My Portfolio</Typography>
                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                <Menu />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                                <List>
                                    <ListItem button component="a" href="#about" onClick={handleDrawerToggle}>
                                        <ListItemText primary="About" />
                                    </ListItem>
                                    <ListItem button component="a" href="#projects" onClick={handleDrawerToggle}>
                                        <ListItemText primary="Projects" />
                                    </ListItem>
                                    <ListItem button component="a" href="#contact" onClick={handleDrawerToggle}>
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                    <ListItem button onClick={handleThemeChange}>
                                        <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
                                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                                    </ListItem>
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <Box>
                            <IconButton color="inherit" href="#about">
                                <Typography variant="body1">About</Typography>
                            </IconButton>
                            <IconButton color="inherit" href="#projects">
                                <Typography variant="body1">Projects</Typography>
                            </IconButton>
                            <IconButton color="inherit" href="#contact">
                                <Typography variant="body1">Contact</Typography>
                            </IconButton>
                            <IconButton color="inherit" onClick={handleThemeChange}>
                                {darkMode ? <Brightness7 /> : <Brightness4 />}
                            </IconButton>
                        </Box>
                    )}
                </MyToolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ mt: 8 }}>
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
        </ThemeProvider>
    );
}

export default App;
