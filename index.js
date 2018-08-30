var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();


var app = express();

var corsOptions = {
    origin: 'http://localhost:8000', /*change the port with your front end port number */
    optionsSuccessStatus: 200 
  }
  
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'client')));
app.use('/',require('./routes/twitter-api'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'client/dist/index.html'));  
});

app.listen(3000, function () {
    console.log('server running on port 3000!');
  });


  module.exports = app;