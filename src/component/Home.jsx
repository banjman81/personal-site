import React from 'react'
import TypewriterEffect from 'react-typewriter-effect';

function Home() {
    
    return (
        <>
            <div className='home-container'>
                <div>
                    <img 
                        variant="h6"
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        className='m-logo' 
                        src="https://s3.us-east-2.amazonaws.com/banjman.com/bjmlogowhite.svg" 
                        alt="" 
                        width="75px" 
                    />
                </div>
                <div className='title-container'>
                    <TypewriterEffect
                        textStyle={{ fontFamily: 'Red Hat Display', textAlign: "center" }}
                        startDelay={1000}
                        cursorColor="black"
                        text="Welcome, My name is Ben and I am a Fullstack Developer."
                        typeSpeed={60}
                    />
                    
                </div>
                <div className='btn-container'>
                    <a href="https://s3.us-east-2.amazonaws.com/banjman.com/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className='resume-btn'><span><img src="https://s3.us-east-2.amazonaws.com/banjman.com/pdf-svgrepo-com.svg" alt="PDF" /><h4>Resume</h4></span></button>
                    </a>
                    <a href="https://www.linkedin.com/in/ban-man-4b0536169/" target="_blank" rel="noopener noreferrer">
                        <button className='resume-btn'><span><img src="https://s3.us-east-2.amazonaws.com/banjman.com/linkedin.svg" alt="inkedin" /><h4>Linkedin</h4></span></button>
                    </a>
                </div>
                <div className="down-arrow"></div>
                

            </div>
            <div className='m-home-container'>
            </div>
        </>
    )
}

export default Home