function capitalizeString(string) {
    string = string.replace(string[0], string[0].toUpperCase())
    return string
}

module.exports = capitalizeString;