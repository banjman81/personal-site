import React from 'react'


function Projects() {
    return (
        <div className='project-container'>
            <h1> Projects</h1>
            <ul className='show'>
                <li>
                    <a href="https://github.com/banjman81" target="_blank" rel="noopener noreferrer" className='project-links'>
                        <div className='btn-pjt'>
                            <div className='btn-img'>
                                <img src="https://s3.us-east-2.amazonaws.com/banjman.com/iconmonstr-github-1.svg" alt="Github" />
                            </div>
                            <div>
                                <h1>Github</h1>
                                <h4> Github Profile</h4>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://armmory.banjman.com/" target="_blank" rel="noopener noreferrer" className='project-links'>
                        <div className='btn-pjt'>
                            <div className='btn-img'>
                                <img src="https://s3.us-east-2.amazonaws.com/banjman.com/logo.svg" alt="Armmory" />
                            </div>
                            <div>
                                <h1>ARMMORY</h1>
                                <h4>A yelp inspired game review application with a fully fuctional frontend React app that connects with a backend API. <span style={{color: 'rgb(45, 145, 145)'}}>(Deployed on AWS EC2 instance)</span>
                                </h4>
                            </div>
                        </div>
                    </a>
                </li>
                {/* <li>
                    <a href="https://calendar.banjman.com/" target="_blank" rel="noopener noreferrer" className='project-links'>
                        <div className='btn-pjt'>
                            <div className='btn-img'>
                                <img src="https://s3.us-east-2.amazonaws.com/banjman.com/mern.svg" alt="Calander" />
                            </div>
                            <div>
                                <h1>Calendar</h1>
                                <h4>Event creator and sign up application. Built with Mern and deployed with AWS. <span style={{color: 'rgb(45, 145, 145)'}}>(Deployed on AWS EC2 instance)</span>
                                </h4>
                            </div>
                        </div>
                    </a>
                </li> */}
                <li>
                    <a href="https://banjman81.github.io/pong/" target="_blank" rel="noopener noreferrer" className='project-links'>
                        <div className='btn-pjt'>
                            <div className='btn-img'>
                                
                            <img src="https://s3.us-east-2.amazonaws.com/banjman.com/ping-pong-svgrepo-com.svg" alt="Pong" />
                            </div>
                            <div>
                                <h1>PONG</h1>
                                <h4>Try to get your best score against a very OP opponent.</h4>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            {/* <hr />
            <div className='a-box'>
                <h1>Personal Achievements</h1>
                <ul>
                    <li>
                        <div className='a-section'>
                            <h2>this</h2>
                            <p>Code Immersives</p>
                        </div>
                    </li>
                    <li>
                        <div className='a-section'>
                            <h2>this</h2>
                            <p>Coding Dojo</p>
                        </div>
                    </li>
                    <li>
                        <div className='a-section'>
                            <h2>GIthub</h2>
                            <p>100+</p>
                        </div>
                    </li>
                    <li>
                        <div className='a-section'>
                            <h2>this</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default Projects