const axios = require("axios")

async function getCOVIDData(country, start_date, end_date) {
	// axios get call towards api
    /* Endpoints
	1) Try to get the data from the provided country
	2) On fail, return error & success = false
	3) Otherwise, format the data & success = true
	*/
	const caseTypes = ["confirmed", "recovered", "deaths"]
	let caseData = []

	if (country == "global") {
		await axios.get(`https://api.covid19api.com/summary`)
		.then(async response => {
			const data = response.data
			caseData.push({
				success: true,
				"New Confirmed": data.Global.NewConfirmed,
				"Total Confirmed": data.Global.TotalConfirmed,
				"New Deaths": data.Global.NewDeaths,
				"Total Deaths": data.Global.TotalDeaths,
				"Date": data.Global.Date
			})
		})
	} else {
		for (let i = 0; i < caseTypes.length; i++) {
			let err = false
			await axios.get(`https://api.covid19api.com/total/country/${country}
							/status/${caseTypes[i]}?from=${start_date}&to=${end_date}`)
			.then(async response => {
				const data = response.data
				
				const startCases = data[0].Cases
				const endCases = data[data.length - 1].Cases
				const totalCases = caseTypes[i] != "recovered" ? 
								   startCases > 10 ? endCases - startCases : endCases 
								   : data.length
				
				caseData.push({
					success: true,
					type: caseTypes[i],
					cases: totalCases,
					country: country,
					start: start_date,
					end: end_date
				})
			})
			.catch((e) => {
				caseData.push({
					success: false,
					error: {
						  status : e.response ? e.response.status : "Failed",
						  statusText: e.response ? e.response.statusText : "Couldn't fetch all data :(",
					}
				  })
				err = true
			})
			if (err) { break }
		}
	}
	return caseData
}

module.exports = { getCOVIDData }