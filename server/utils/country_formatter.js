// There are too many...
let uniqueCountryTags = {
    "united-states-of-america" : "united-states",
    "america" : "united-states",
    "south-korea" : "korea-south",
    "england" : "united-kingdom",
    "britain" : "united-kingdom"
}

function filterChars(str) {
    // console.log(str)
    return str.split("")
              .filter(c => c >= 'a' && c <= 'z' || c === '-')
              .join("")
}

function formatCountry(str) {
    let formattedStr = str.toLowerCase()
    
    if (formattedStr.includes(" ")) {
        formattedStr = formattedStr.split(" ")
                                   .map(str => {return filterChars(str)})
                                   .join('-')
    }
    // Check if formattedStr in unique Country Tags
    if (uniqueCountryTags.hasOwnProperty(formattedStr)) {
        return uniqueCountryTags[formattedStr]
    }

    return formattedStr
}

module.exports = { formatCountry }