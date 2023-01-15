const express = require("express")
const axios = require("axios")
const cors = require("cors")
const app = express()

const time = require('./utils/time_formatter.js')
const country = require('./utils/country_formatter.js')
const data = require('./utils/getData.js')

const port = 4000

app.listen(port, () => {
    console.log("running server on port" + port)
})

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.get("/cases_by_country", async (req, res) => {
    let location = country.formatCountry(req.query.country)
    /*
       1) If start && no end --> Set end to current
       2) If no start && end --> Set start to start of pandemic
       3) If no start & no end --> Start of Pandemic to Now

       4) Need to check if start is beyond the beginning of Pandemic --> Account for Case 1
    */
    let start_date = time.toISO(req.query.from)
    let end_date = time.toISO(req.query.to)
    
    if (!location) {
        res.send({
            success: false,
            error: "No country provided"
        })
    // Fetch data from API
    } else {
        res.send(await data.getCOVIDData(location, start_date, end_date))
    }
    
})

app.get("/total_cases", async (req, res) => {
    res.send(await data.getCOVIDData("global", "", ""))
})