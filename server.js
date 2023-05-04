const express = require('express')
const app = express()
const cors = require('cors')
const { Collection } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING
    dbName = 'star-wars-quotes',
    Collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('quotes')
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running`)
}
)