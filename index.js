const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app=express()
app.use(cors())


const PORT = 3000


app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'India',
                language: 'en',
                sortBy: 'publishedAt',
                pageSize: 20,
                apiKey: process.env.NEWS_API_KEY
            }
        })
        res.json(response.data.articles)
    } catch(error){
        res.json({error:error.message})
    }
    
})

app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`)
})