const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const comments = require('./routes/api/comments');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect To MongoDb Using Mongoose
mongoose
    .connect(db, { useNewUrlParser: true }) 
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Mongo failed to connect.'));



app.use('/api/comments', comments);


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server Started On Port ${port}`))