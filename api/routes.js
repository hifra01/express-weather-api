const express = require('express')
const router = express.Router()
const getLocation = require('./utils/mapbox')
const getForecast = require('./utils/openweathermap')

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Weather API'
    })
})

router.get('/location', async (req, res) => {
    if (!req.query.search) {
        return res.status(400)
            .json({
                error: 400,
                message: '"search" parameter is required!'
            })
    }

    try {
        const response = await getLocation(req.query.search)
        return res.send(response)
    } catch (e) {
        return res.status(500).json({
            error: 500,
            message: e.message
        })
    }

})

router.get('/weather', async (req, res) => {
    if (!req.query.location) {
        return res.status(400)
            .json({
                error: 400,
                message: '"location" parameter is required'
            })
    }

    try {
        const response = await getForecast(req.query.location)
        return res.send(response)
    } catch (e) {
        return res.status(500).json({
            error: 500,
            message: e.message
        })
    }
})

module.exports = router
