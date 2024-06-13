const express = require('express')
const app = express()
const PORT = 8080



app.use(express.json())


app.get('/', (req, res) => {
    res.json({message: 'Welcome Home'})
})


app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})

