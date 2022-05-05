import React from 'react'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div>
                <h1>About Me</h1>
                <ul className='about-me-cards'>
                    <li className='am-card'>
                        <p className='sub-font'>Educations</p>
                                    <h2>Coding Dojo, <span style={{fontSize: "17px", fontWeight: '200'}}>Full Stack Web Development Coding Bootcamp</span></h2>
                                    <h3>14 Wks, Intensive coding bootcamp, testing, coding, pair programming
                                    algorithms
                                    </h3>
                                <hr />
                                    <h2>Code Immersives, <span style={{fontSize: "17px", fontWeight: '200'}}>Full Stack Web Development Coding School</span></h2>
                                    <h3>45 Wks, Web Development Coding Bootcamp, testing, coding, pair
                                        programming algorithms and deployment with AWS
                                    </h3>
                    </li>
                    <li className='am-card'>
                        <h1>Technical Skills</h1>
                        <ul>
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>React</li>
                            <li>React Redux</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Python</li>
                        </ul>
                    </li>
                    <li className='am-card'>
                        <p className='sub-font'>Contact Info</p>
                        <section className='card-table'>
                            <h2>Benjamin.man97@gmail.com</h2>
                            <h2>(612) 274-8060</h2>
                        </section>
                    </li>
                </ul>
            </div>
                
            
        </div>
    )
}

export default AboutMe