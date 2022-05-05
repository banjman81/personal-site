import React, {useRef} from 'react';
import { AppBar, Box, Toolbar, Button, Avatar } from '@mui/material';
import selfie from './images/selfie.jpg'
// import Toolbar Toolbar';
// import IconButton IconButton';
// import Typography Typography';
// import Menu Menu';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Home from './Home';
// import Container Container';
// import Avatar Avatar';
// import Button Button';
// import Tooltip Tooltip';
// import MenuItem MenuItem';


const Index = () => {

    const homeRef = useRef(null)
    const projectRef = useRef(null)
    const aboutRef = useRef(null)

    const executeScrollHome = () => homeRef.current.scrollIntoView()
    const executeScrollProject = () => projectRef.current.scrollIntoView()
    const executeScrollAbout = () => aboutRef.current.scrollIntoView()

    function handleNavClick(input){
        if(input === ""){
            executeScrollHome()
        }
        if(input === "Projects"){
            executeScrollProject()
        }
        if(input === "About Me"){
            executeScrollAbout()
        }
    }

    return (
        <>
            <Box className='app-bar'>
            <AppBar position="fixed" style={{background: "linear-gradient(to right, rgb(8,11,20),rgb(1,17,50), rgb(6,13,31)"}}>
            <Box maxWidth="xl" sx={{width: "75%", margin: "0 auto"}}>
                <Toolbar disableGutters>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                    <Button
                        onClick={() => handleNavClick("")}
                        sx={{ my: 2, color: 'white', display: 'block', padding: "0 5px", margin: "5px 20px 5px 5px" }}
                    >
                        <img 
                            variant="h6"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            className='logo' 
                            onClick={() => handleNavClick("")} 
                            src="https://s3.us-east-2.amazonaws.com/banjman.com/bjmlogowhite.svg" 
                            alt="" 
                            width="75px" 
                        />
                    </Button>
                    <Button
                        onClick={() => handleNavClick("Projects")}
                        sx={{ my: 2, color: 'white', display: 'block', padding: "0 5px", margin: "5px 20px 5px 5px", height: "50px" }}
                    >
                        Projects
                    </Button>
                    <Button
                        onClick={() => handleNavClick("About Me")}
                        sx={{ my: 2, color: 'white', padding: "0 5px", margin: "5px 20px 5px 5px", height: "50px", display: "flex" }}
                    >
                        About Me
                        <Avatar alt="Ben" src={selfie} sx={{marginLeft: "10px"}}/>
                    </Button>
                    
                </Box>
                </Toolbar>
            </Box>
            </AppBar>
            </Box>
            
            <div className='page-wrapper'>
                <div ref={homeRef}>
                    <Home />
                </div>
                <div ref={projectRef}>
                    <Projects />
                </div>
                <div ref={aboutRef}>
                    <AboutMe />
                    <ul className='footer'>
                        <li><h5>Icons by icon8</h5></li>
                        <li><h5>Pictures by pexels</h5></li>
                        <li><h5>Deployed with aws</h5></li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Index;