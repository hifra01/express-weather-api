require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./api/routes')

const PORT = process.env.PORT || 3000

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send("Reserved for views. Use /api to access API")
})

app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`)
})
