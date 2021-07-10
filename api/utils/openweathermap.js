const fetch = require('node-fetch')
const getLocation = require('./mapbox')
const API_KEY = process.env.OPENWEATHERMAP_KEY

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

const getForecast = async address => {
    const locData = await getLocation(address)
    const location_data = await locData.features[0]

    const longitude = location_data.center[0]
    const latitude = location_data.center[1]


    const url = `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`

    const response = await fetch(url)
    const weather_data = await response.json()

    return { location_data, weather_data }
}

module.exports = getForecast
