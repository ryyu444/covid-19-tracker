import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import DataDisplay from "../../components/displayData/displayData";
import axios from 'axios';
import './search.css'

const CaseByCountry = () => {
    let [country, setCountry] = useState("")
    let [startDate, setStartDate] = useState("")
    let [endDate, setEndDate] = useState("")
    let [searchParams, setSearchParams] = useSearchParams();
    
    let [countryData, setCountryData] = useState([])
    let countryRef = useRef("")

    
    const searchHandler = async (e) => {
        e.preventDefault();
        const param1 = country ? country : "United States"
        const param2 = startDate ? startDate : "1/1/20"
        const param3 = endDate ? endDate : new Date().toLocaleDateString()
        countryRef.current = country ? country : "United States";
        
        let parameters = `/cases_by_country?country=${param1}&from=${param2}&to=${param3}`
        const response = await axios.get(`http://localhost:4000${parameters}`)
        setCountryData(response.data)
        setSearchParams({
            country: param1,
            from: param2,
            to: param3,
        });
    }
    
    
    return (
        <div>
            <NavBar />
            <h1 className="title">Search for a Country</h1>
            <div className="search-form-container">
                <form className="search-form" onSubmit={searchHandler}>
                    <label htmlFor="country-field" className="search-label">
                        Country:
                    </label>
                    <input
                        type="text" 
                        name="country" 
                        className="input-field"
                        value={country}
                        placeholder = "Country"
                        onChange={e => setCountry(e.target.value)}
                    /> 
                    <label htmlFor="start-date-field" className="search-label">
                        From:
                    </label>
                    <input
                        type="text" 
                        name="from" 
                        className="input-field"
                        value={startDate}
                        placeholder = "MM/DD/YYYY"
                        onChange={e => setStartDate(e.target.value)}
                    /> 
                    <label htmlFor="end-date-field" className="search-label">
                        To:
                    </label>
                    <input
                        type="text" 
                        name="to" 
                        className="input-field"
                        value={endDate}
                        placeholder = "MM/DD/YYYY"
                        onChange={e => setEndDate(e.target.value)}
                    /> 
                    <button
                        type="submit"
                        className="submit-button"
                    > Search </button>
                </form>
            </div>
            {countryData ? 
                <DataDisplay data={countryData} title={countryRef.current}/>
            : null}
            <footer id="footer">Default: United States || 1/1/2020 || Today</footer>
        </div>
    )
}

export default CaseByCountry