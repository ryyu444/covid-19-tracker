import React, { useState, useEffect } from 'react'
import NavBar from '../../components/navbar/navbar'
import DataDisplay from '../../components/displayData/displayData'
import axios from 'axios'
import './overview.css'

const Overview = () => {
    let [globalData, setData] = useState([])

    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:4000/total_cases")
            setData(response.data)
          };

        fetchData();
    }, [])
    

    return (
        <div>
            <NavBar/>
            <h1 className='title'>Global Case Data</h1>
            <div className='img-container'>
                <img src='https://ontheworldmap.com/world-map-1750.jpg'
                     id='overview-img'
                     width={960} height={500} />
            </div>
            {globalData ? 
                <DataDisplay data={globalData} title={"Overview"}/>
                : null
            }
            <footer className='footer'>
                Note: New = Cases from Previous Day 
                || Total = Cases from Start of Pandemic to Current Day
            </footer>
            <footer className='footer'>
                P.S - If values are 0, the API is caching more values, so please wait and refresh :)
            </footer>
        </div>
    )
}

export default Overview