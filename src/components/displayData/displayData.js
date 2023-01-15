import React from 'react'

const DataDisplay = (props) => {
    const { data, title } = props;
    const emotes = {confirmed: '😷', recovered: '💚', deaths: '💀'}

    const countryCOVIDDataDisplay = (data) => {
        // Implement checks on whether the data is valid or not
        if (!data.success) {
            return (
                <div className={data.type ? "country-data-item" : "global-data-item"}>
                    <p>Error: {data.error.status} - {data.error.statusText}</p>
                </div>
            )
        }

        let dataKey = data.country + "-" + data.type;
        let header = ''
        if (data.type) {
            header = emotes[data.type]
        }

        const display = data.type ? 
            <div className="country-data-item" key={dataKey}>
                {header} {data.type.toUpperCase()}: {data.cases}
            </div>
            :
            Object.keys(data).map((key) => {
                if (key === "success") {
                    return null;
                }

                return (
                    <div className="global-data-item" key={key}>
                        {key}: {key != "Date" ? data[key] : data[key].slice(0,10)}
                    </div>
                )
            })

        return (display)
    }

    return (
        data ? 
            <div className={"data"}>
                <h2 className='heading'>
                {title === "Overview" ? '🌍' : ''} {title}</h2>
                {data.map(countryCOVIDDataDisplay)}
            </div>
        : null
    )
}

export default DataDisplay