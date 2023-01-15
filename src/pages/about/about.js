import React from 'react'
import NavBar from '../../components/navbar/navbar'
import './about.css'

const About = () => {
    return (
        <div>
            <NavBar/>
            <h1 className='title'>About Section</h1>
            <div className='text-container'>
                <ol>
                    <li className='text-question text-font'>
                        What is the purpose of this website?
                        <p className='text-response text-font'>
                            To try and apply what I've learned about HTML & CSS into a working project :D
                        </p>
                    </li>
                    <li className='text-question text-font'>
                        Why choose COVID-19 of all topics?
                        <p className='text-response text-font'>
                            I felt that this API provides quite useful information about our current situation.
                            It also challenged me to think of ways to manipulate user inputs to fit the API calls
                            & response data to provide me the data I wanted.
                        </p>
                    </li>
                    <li className='text-question text-font'>
                        Are you going to continue development for this?
                        <p className='text-response text-font'>
                            I hope to come back to this when I am more knowledgeable about HTML & CSS
                            and improve upon the various design flaws!
                        </p>
                    </li>
                    
                </ol>
            </div>

        </div>
    )
}

export default About