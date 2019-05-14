const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const URI = process.env.MONGODB_URI || 'mongodb://localhost/database';
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/secret', (req, res) => res.sendFile(path.join(__dirname, 'secret.html')));

app.get('/secret', (req, res) => {
    MongoClient.connect(URI, { useNewUrlParser : true }, (err, db) => {
        if(err) {
            console.log(err);
        }
        else {
            const db = client.db(DB_NAME);
            const collection = db.collection('names');
            const entry = {
                name : req.body.name.toLowerCase();
            }
        }
    })
})