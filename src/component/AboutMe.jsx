import React from 'react'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div>
                <h1>About Me</h1>
                <ul className='about-me-cards'>
                    <li className='am-card'>
                        <h1 className='sub-font'>Educations</h1>
                                    <h3>Coding Dojo, <span className='school-info' style={{fontSize: "17px", fontWeight: '200'}}>Full Stack Web Development Coding Bootcamp</span></h3>
                                    <h3>14 Wks, Intensive coding bootcamp, testing, coding, pair programming
                                    algorithms
                                    </h3>
                                <hr />
                                    <h3>Code Immersives, <span style={{fontSize: "17px", fontWeight: '200'}}>Full Stack Web Development Coding School</span></h3>
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
                        <h1 className='sub-font'>Contact Info</h1>
                        <section className='card-table'>
                            <p>Benjamin.man97@gmail.com</p>
                            <p>(612) 274-8060</p>
                        </section>
                    </li>
                </ul>
            </div>
                
            
        </div>
    )
}

export default AboutMe