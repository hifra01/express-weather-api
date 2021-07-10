const fetch = require('node-fetch')
const API_KEY = process.env.MAPBOX_KEY

const PLACES_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

const getLocation = async address => {
    const url = `${PLACES_URL}${address}.json?access_token=${API_KEY}&limit=1`

    const response = await fetch(url)
    const data = await response.json()

    if (data.features.length > 0) {
        return data
    }
    else {
        throw new Error("Can't find location.")
    }
}

module.exports = getLocation