import React from 'react'
import NavBar from '../../components/navbar/navbar'
import './home.css'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className='title-container'>
                <h1 className='title'>COVID-19 Tracker</h1>
                <p className='title-text'>Welcome to my tracking website!</p>
            </div>
            <div className='img-container'>
                <ol className='instruction-container'>
                    <h2 id='instruction-title'>How to Setup</h2>
                    <li className='instruction-text'>
                        Git clone into desired folder & install all packages if needed with npm install
                    </li>
                    <li className='instruction-text'>
                        Navigate to the covid-tracker folder & open two terminals
                    </li>
                    <li className='instruction-text'>
                        In one terminal, run the react app with npm start
                    </li>
                    <li className='instruction-text'>
                        In the other terminal, navigate to the server folder & run it with npm run start
                    </li>
                    <li className='instruction-text'>
                        You're all set to browse the site!
                    </li>
                </ol>
                <img src='https://www.woah.org/app/uploads/2022/05/adobestock-333039083-e1653147797451.jpeg'
                     id='home-img'
                     width={600}
                     height={300}
                     />
            </div>
        </div>
    )
}

export default Home