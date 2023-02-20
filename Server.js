const cors = require('cors')
const express = require('express')
const path = require('path')

const app = express()

const SERVER_PORT = process.env.YOUR_PORT || process.env.SERVER_PORT || '8080';

exports.start = () => {
    app.set('port', SERVER_PORT)
    app.listen(SERVER_PORT,
        () => console.log(`the router is alive on port:${SERVER_PORT}`)
    )

    app.use('/', express.static(path.join(__dirname, 'dist')))
    app.use('/images', express.static(path.join(__dirname, 'src/images')))

    app.use(cors())
}
