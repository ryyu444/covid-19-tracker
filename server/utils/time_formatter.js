const dayjs = require('dayjs')

// Converts a given string to ISO format
function toISO(date_str) {
    const format = "YYYY-MM-DDTHH:mm:ss[Z]"
    // 1/18/22 || 2022-1-18
    let newDate = dayjs(date_str).format(format)
    
    if (newDate !== "Invalid Date") {
        return newDate
    }

    return ""
}

module.exports = { toISO }