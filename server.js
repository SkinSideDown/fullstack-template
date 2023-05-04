const express = require('express')
const app = express()
const cors = require('cors')
const { Collection } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//MongoDB
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

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//Port
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running`)
}
)